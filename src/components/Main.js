import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Card from './Card'
import Loading from './Loading'

// import fetchPosts from '../logic/fetch'

const Main = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [isLoaded, toggleIsLoaded] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', handleScrollLoading)
    fetchPosts(page)
  }, [page])

  const handleScrollLoading = page => {
    let distance = Math.round(
      ((document.body.scrollHeight - window.innerHeight - window.scrollY + 35) / document.body.scrollHeight) * 100
    )

    if (distance <= 2) {
      updatePosts(page)
    }
  }

  const fetchPosts = page => {
    axios
      .get(`https://api.hackerwebapp.com/news?page=${page}`)
      .then(response => {
        setPosts(response.data)
        toggleIsLoaded(true)
      })
      .catch(err => {
        console.log('ERROR:', err)
      })
  }

  const updatePosts = () => {
    let currentPosts = posts
    let scrollPos = window.scrollY

    console.log('fired')

    if (page < 11) {
      console.log('should be loading now', page)
      axios
        .get(`https://api.hackerwebapp.com/news?page=${page}`)
        .then(response => {
          setPosts(currentPosts.concat(response.data))
        })
        .catch(err => {
          console.log('ERROR:', err)
        })
    }

    window.scrollTo(0, scrollPos)
  }

  return (
    <div>
      {!isLoaded ? (
        <Loading />
      ) : (
        <div>
          {posts.map((post, index) => {
            return <Card key={index} story={post} />
          })}
        </div>
      )}
    </div>
  )
}

export default Main
