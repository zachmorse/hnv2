import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropagateLoader from 'react-spinners/PropagateLoader'
import axios from 'axios'

import Card from './Card'
import Loading from './Loading'
import BottomControls from './BottomControls'

// import fetchPosts from '../logic/fetch'

const MainContainer = styled.div`
  margin-bottom: 75px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`

const Main = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [isLoaded, toggleIsLoaded] = useState(false)

  useEffect(() => {
    fetchPosts(page)
  }, [page])

  const fetchPosts = pageNum => {
    toggleIsLoaded(false)
    console.log(page, pageNum)
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

  return (
    <MainContainer>
      {!isLoaded ? (
        <LoadingContainer>
          <PropagateLoader size={15} />
        </LoadingContainer>
      ) : (
        <div>
          {posts.map((post, index) => {
            return <Card key={index} story={post} />
          })}
          <BottomControls updatePosts={updatePosts} />
        </div>
      )}
    </MainContainer>
  )
}

export default Main
