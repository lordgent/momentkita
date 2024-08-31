import React from 'react'
import styled from './category.module.css'

const Category = () => {
  return (
    <div className={styled.body}>
        <p className={styled.cat}>Art</p>
        <p className={styled.cat}>Design</p>
        <p className={styled.cat}>Tech</p>
        <p className={styled.cat}>Bussines</p>
        <p className={styled.cat}>Wallpaper</p>
        <p className={styled.cat}>Cat</p>
        <p className={styled.cat}>Esthetic</p>
    </div>
  )
}

export default Category