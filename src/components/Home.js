import React, { Suspense, Component } from "react";
import axios from "axios";
import compromise from "compromise";
import "../home.css";

import Loading from "./Loading";

class Home extends Component {
  state = {
    data: [],
    page: 1
  };

  handleScrollLoading = () => {
    let distance = Math.round(((document.body.scrollHeight - window.innerHeight - window.scrollY + 35) / document.body.scrollHeight) * 100);

    if (distance <= 2) {
      this.setState({
        page: this.state.page + 1
      });
      this.updatePosts(this.state.page);
    }
  };

  getTitleNLP = async props => {
    await compromise(props);
  };

  updatePosts = page => {
    let currentPosts = this.state.data;
    let scrollPos = window.scrollY;

    if (this.state.page < 11) {
      axios
        .get(`https://api.hackerwebapp.com/news?page=${page}`)
        .then(response => {
          this.setState({
            data: currentPosts.concat(response.data)
          });
        })
        .catch(err => {
          console.log("ERROR:", err);
        });
    }

    window.scrollTo(0, scrollPos);
  };

  fetchPosts = () => {
    axios
      .get(`https://api.hackerwebapp.com/news?page=1`)
      .then(response => {
        // compromise(response.data.title).
        this.setState({
          data: response.data
        });
      })
      .catch(err => {
        console.log("ERROR:", err);
      });
  };

  componentDidMount() {
    document.addEventListener("scroll", this.handleScrollLoading);
    this.fetchPosts(this.state.page);
  }

  render() {
    const { data } = this.state;

    const stories = data.map((data, index) => {
      return (
        <div className="individual_post" key={index}>
          <p className="post_info">
            <span className="post_author">{data.user !== null ? data.user : "[deleted]"}</span>, {data.points !== null ? `${data.points} points` : null} {data.time_ago}
          </p>
          <a href={data.url} className="post_title_link">
            <h3 className="post_title">{data.title}</h3>
          </a>
          <a href={`https://api.hackerwebapp.com/item/${data.id}`}>
            <p className="post_comments">{data.comments_count === 1 ? `${data.comments_count} comment >` : `${data.comments_count} comments >`}</p>
          </a>
        </div>
      );
    });

    return (
      <div>
        <div
          className="header_container"
          onClick={() => {
            console.log(this.state.data);
          }}
        >
          hacker<span className="title_secondword">news</span>
        </div>
        <Suspense fallback={Loading}>
          <div className="post_container">{stories}</div>
        </Suspense>
      </div>
    );
  }
}

export default Home;
