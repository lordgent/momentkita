import React from "react";
import styled from "./LoadingCard.module.css";

const LoadingCard = () => {
  return (
    <div className={styled.gridBody}>
      <div className={styled.blinkCard}></div>
      <div className={styled.blinkCard}></div>
      <div className={styled.blinkCard}></div>
      <div className={styled.blinkCard}></div>
      <div className={styled.blinkCard}></div>
      <div className={styled.blinkCard}></div>
    </div>
  );
};

export default LoadingCard;
