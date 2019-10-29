import React from 'react'
import styled from 'styled-components'

const StyleProvider = styled.div`
  font-weight: 100;
  font-size: 12px;
  margin: 20px 10px;
  border-bottom: 1px dotted black;
  color: #68a3b5;

  h1 {
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
    padding-right: 50px;
  }

  a {
    text-decoration: none;
    color: #68a3b5;
  }
`

const Card = props => {
  const { comments_count, id, points, time_ago, title, url, user } = props.story
  return (
    <StyleProvider>
      <a href={url}>
        <h1>{title}</h1>
      </a>
      <span>{`${user} // ${points} ${points !== 1 ? 'points' : 'point'} // ${time_ago}`}</span>
      <p>
        {comments_count > 1
          ? `${comments_count} comments`
          : comments_count === 1
          ? `${comments_count} comment`
          : 'No comments'}
      </p>
    </StyleProvider>
  )
}

export default Card

// https://api.hackerwebapp.com/item/${data.id}
