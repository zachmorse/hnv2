import React from 'react'
import styled from 'styled-components'
import PropagateLoader from 'react-spinners/PropagateLoader'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

function Loading() {
  return (
    <LoadingContainer>
      <PropagateLoader size={15} />
    </LoadingContainer>
  )
}

export default Loading
