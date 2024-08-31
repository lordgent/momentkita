import React, { useState } from "react";
import styled from "./login.module.css";
import {useSelector,useDispatch} from 'react-redux'
import {fetchLoginPost} from '../../../providers/actions/auth'
import { AppDispatch,RootState } from '@/providers/store'
import { useRouter } from 'next/router';

interface FormState {
  email: string;
  password: string;
}

const LoginPage = () => {
  const route = useRouter();



  const [form,setForm ] = useState<FormState>({
    email: "",
    password:""
  })
  const dispatch = useDispatch<AppDispatch>(); 
  const { data,loading,error } = useSelector((state: RootState) => state.posts.list_post);

 


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;


    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  
  const handleSubmit = () =>{
    dispatch(fetchLoginPost(form))
    if(data !== null){
      route.push("/")
    }
    
  }
  

  return (
    <div className={styled.containerLogin}>
      <div className={styled.bodyLogin}>
        <div className={styled.bodyContent}>
          <h2 className={styled.title}>Moment</h2>
          <div className={styled.divInput}>
            <label htmlFor="username">Email</label>
            <input
              type="text"
              name="email"
              className={styled.inputText}
              placeholder="jhondoe@mail.com"
              onChange={handleChange}
            />
          </div>
          <div className={styled.divInput}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={styled.inputText}
              placeholder="****"
              name="password"
              onChange={handleChange}
            />
            <span className={styled.info}>Lupa password?</span>
          </div>

          <button className={styled.btn} onClick={handleSubmit}>Sign In</button>
          <p className={styled.infoReg}>Belum memiliki akun? <span onClick={() => route.push("/auth/register")}>register</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
