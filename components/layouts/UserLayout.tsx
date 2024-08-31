import React, { ReactNode,useEffect,useState } from 'react'
import Navbar from '../navbar/Navbar'
import styled from './UserLayout.module.css'
import BottomTab from '../bottom-tab/BottomTab';
import { useRouter } from 'next/router';


interface LayoutProps {
  children: ReactNode;
}

const UserLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const currentUrl = router.asPath;

  const [token, setToken] = useState("");

  useEffect(() => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
          setToken(storedToken);
      } else {
          router.push("/auth/login");
      }
  }, [router]);

  if (!token) {
      // Render nothing or a loading indicator while checking the token
      return <p>Loading...</p>;
  }

  return (
    <>
      {currentUrl !== "/search" && currentUrl !== "/message" && <Navbar />}
      <div className={currentUrl === "/search" ? styled.baseNotNav : currentUrl === "/message" ? styled.baseNotNav : styled.base}>
        <div className={styled.bodyBase}>
          {children}
        </div>
      </div>
      <BottomTab />

    </>
  )
}

export default UserLayout