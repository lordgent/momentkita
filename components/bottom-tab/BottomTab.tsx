import React from 'react'
import styled from './BottomTab.module.css'
import { useRouter } from 'next/router';


const BottomTab = () => {
    const route = useRouter();


  return (
    <div className={styled.containerTab}>
        <div className={styled.bodyTab}>
            <div className={styled.tab}>
                    <img src="/assets/icons/home.svg" alt="home" className={styled.iconTab} onClick={() => route.push("/")} />
                    <img src="/assets/icons/search.svg" alt="search" className={styled.iconTab} onClick={() => route.push("/search")}  />
                    <img src="/assets/icons/chat.svg" alt="message" className={styled.iconTab} onClick={() => route.push("/message")}  />
                    <div className={styled.avatar} onClick={() => route.push("/profile")} >T</div>
            </div>
        </div>
    </div>
  )
}

export default BottomTab