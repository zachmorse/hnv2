import React from 'react'
import { CardStyleProvider } from './styled'

const comments = (commentsCount, itemId) => {
  return commentsCount === 0 ? (
    <span>No comments</span>
  ) : (
    <a href={`https://api.hackerwebapp.com/item/${itemId}`}>
      {commentsCount} {commentsCount === 1 ? 'comment' : 'comments'}
    </a>
  )
}

const Card = props => {
  const { comments_count, points, time_ago, title, url, user, type, id } = props.story
  return (
    <CardStyleProvider>
      <h1>{type !== 'ask' ? <a href={url}>{title}</a> : <p>{title}</p>}</h1>
      <span>{`${user} // ${points} ${points !== 1 ? 'points' : 'point'} // ${time_ago}`}</span>
      <p>{comments(comments_count, id)}</p>
    </CardStyleProvider>
  )
}

export default Card
