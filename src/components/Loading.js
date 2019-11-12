import React from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { LoadingContainer } from './styled'

function Loading() {
  return (
    <LoadingContainer>
      <PropagateLoader size={15} />
    </LoadingContainer>
  )
}

export default Loading
