import React, { useState, useEffect } from 'react'
import axios from 'axios'

import fetchPosts from '../logic/fetch'

const Main = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [isLoaded, toggleIsLoaded] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', handleScrollLoading)
    fetchPosts(page)
  }, [])

  const handleScrollLoading = page => {
    let distance = Math.round(
      ((document.body.scrollHeight - window.innerHeight - window.scrollY + 35) / document.body.scrollHeight) * 100
    )

    if (distance <= 2) {
      setPage(page + 1)
    }
  }

  const fetchPosts = page => {
    axios
      .get(`https://api.hackerwebapp.com/news?page=${page}`)
      .then(response => {
        response.data.forEach(element => {
          console.log(element)
        })
        setPosts(response.data)
        toggleIsLoaded(true)
      })
      .catch(err => {
        console.log('ERROR:', err)
      })
  }

  return (
    <div>
      {posts.map((item, index) => {
        return <div>{item.title}</div>
      })}
    </div>
  )
}

export default Main
