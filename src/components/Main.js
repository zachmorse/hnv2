import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
// import PropagateLoader from 'react-spinners/PropagateLoader'
import axios from 'axios'

import Card from './Card'
import Loading from './Loading'
import BottomControls from './BottomControls'
import { MainContainer } from './styled'

const Main = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [isLoaded, toggleIsLoaded] = useState(false)
  const [storyTypeMenuOpen, toggleStoryTypeMenuOpen] = useState(false)

  useEffect(() => {
    fetchPosts(page)
  }, [page])

  const fetchPosts = pageNum => {
    toggleIsLoaded(false)
    axios
      .get(`https://api.hackerwebapp.com/news?page=${pageNum}`)
      .then(response => {
        setPosts(response.data)
        toggleIsLoaded(true)
      })
      .catch(err => {
        console.log('ERROR:', err)
      })
  }

  const updatePosts = direction => {
    if (direction === 'fwd' && page <= 9) {
      setPage(page + 1)
      fetchPosts(page)
    }

    if (direction === 'rev' && page >= 2) {
      setPage(page - 1)
      fetchPosts(page)
    }
  }

  const toggleStoryMenu = () => {
    console.log(storyTypeMenuOpen)
    toggleStoryTypeMenuOpen(!storyTypeMenuOpen)
  }

  return (
    <MainContainer>
      {!isLoaded ? (
        <Loading />
      ) : (
        <div>
          {posts.map((post, index) => {
            return <Card key={index} story={post} />
          })}
          <BottomControls
            updatePosts={updatePosts}
            storyTypeMenuOpen={storyTypeMenuOpen}
            toggleStoryMenu={toggleStoryMenu}
          />
        </div>
      )}
    </MainContainer>
  )
}

export default Main
