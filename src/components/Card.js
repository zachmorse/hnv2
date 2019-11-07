import React from 'react'
import styled from 'styled-components'

const StyleProvider = styled.div`
  font-weight: 100;
  font-size: 12px;
  margin: 20px 20px;
  border-bottom: 1px dotted black;
  color: #68a3b5;

  h1 {
    font-size: 16px;
    font-weight: 200;
    padding-right: 50px;
  }

  a {
    text-decoration: none;
    color: #68a3b5;
  }
`

const comments = (commentsCount, itemId) => {
  if (commentsCount > 1) {
    return <a href={`https://api.hackerwebapp.com/item/${itemId}`}>{commentsCount} comments</a>
  } else if (commentsCount === 1) {
    return <a href={`https://api.hackerwebapp.com/item/${itemId}`}>{commentsCount} comment</a>
  } else {
    return <span>No comments</span>
  }
}

const Card = props => {
  const { comments_count, points, time_ago, title, url, user, type, id } = props.story
  return (
    <StyleProvider>
      <h1>{type !== 'ask' ? <a href={url}>{title}</a> : <p>{title}</p>}</h1>

      <span>{`${user} // ${points} ${points !== 1 ? 'points' : 'point'} // ${time_ago}`}</span>
      <p>{comments(comments_count, id)}</p>
    </StyleProvider>
  )
}

export default Card
