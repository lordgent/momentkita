import React from 'react'
import styled from './card.module.css'

interface CardPostProps {
    index: number;
  }
  

const CardPost : React.FC<CardPostProps> = ({ index }) => {
    const heightPattern = ['400px', '340px', '380px'];

  return (
    <div className={styled.card} style={{ height: heightPattern[index % heightPattern.length] }}>
      <img src="https://random.imagecdn.app/500/150" className={styled.imageCard} />
    </div>
  )
}

export default CardPost;