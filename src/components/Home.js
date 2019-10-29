import React, { Suspense, Component } from 'react'
import axios from 'axios'
import nlp from 'compromise'
import '../home.css'

import Loading from './Loading'

class Home extends Component {
  state = {
    data: [],
    page: 1,
  }

  handleScrollLoading = () => {
    let distance = Math.round(
      ((document.body.scrollHeight - window.innerHeight - window.scrollY + 35) / document.body.scrollHeight) * 100
    )

    if (distance <= 2) {
      this.setState({
        page: this.state.page + 1,
      })
      this.updatePosts(this.state.page)
    }
  }

  // getTitleNLP = props => {
  //   await nlp
  // }

  unsplash = props => {
    let searchTerm = nlp(props)
      .nouns()
      .data()

    // console.log(searchTerm[0].text)

    return searchTerm.length > 1
      ? // ? `https://source.unsplash.com/random/600x800/?${searchTerm[0].normal}`
        'https://source.unsplash.com/random/600x800/?'
      : 'https://source.unsplash.com/random/600x800/?'
  }

  updatePosts = page => {
    let currentPosts = this.state.data
    let scrollPos = window.scrollY

    if (this.state.page < 11) {
      axios
        .get(`https://api.hackerwebapp.com/news?page=${page}`)
        .then(response => {
          console.log(response.data)
          this.setState({
            data: currentPosts.concat(response.data),
          })
        })
        .catch(err => {
          console.log('ERROR:', err)
        })
    }

    window.scrollTo(0, scrollPos)
  }

  getRandomImage = () => {
    return 'https://source.unsplash.com/random/600x800/'
  }

  fetchPosts = () => {
    axios
      .get(`https://api.hackerwebapp.com/news?page=1`)
      .then(response => {
        response.data.forEach(element => {
          element.imgURL = this.getRandomImage()
        })
        this.setState({
          data: response.data,
        })
      })
      .catch(err => {
        console.log('ERROR:', err)
      })
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScrollLoading)
    this.fetchPosts(this.state.page)
  }

  render() {
    const { data } = this.state

    const stories = data.map((data, index) => {
      return (
        <div key={index}>
          <div
            style={{
              height: '100px',
              width: 'auto',
              margin: '10px auto',
              // backgroundImage: `url(${data.imgURL})`,
            }}>
            <div style={{ backgroundColor: 'black', color: 'white' }}>
              <p>{data.title}</p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <div
          className='header_container'
          onClick={() => {
            console.log(this.state.data)
          }}>
          hacker<span className='title_secondword'>news</span>
        </div>
        <Suspense fallback={Loading}>
          <div className='post_container'>{stories}</div>
        </Suspense>
      </div>
    )
  }
}

export default Home
