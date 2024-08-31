import React, { useState } from "react";
import styled from "./register.module.css";
import {useSelector,useDispatch} from 'react-redux'
import {fetchLoginPost} from '../../../providers/actions/auth'
import { AppDispatch,RootState } from '@/providers/store'
import { useRouter } from 'next/router';


interface FormState {
  email: string;
  password: string;
  phoneNumber: string;
}

const RegisterPage = () => {
  const route = useRouter();



  const [form,setForm ] = useState<FormState>({
    email: "",
    password:"",
    phoneNumber: ""
  })
  const dispatch = useDispatch<AppDispatch>(); 
  const { data,loading } = useSelector((state: RootState) => state.posts.list_post);

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;


    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  
  const handleSubmit = () =>{
    dispatch(fetchLoginPost(form))
    console.log(data);
    if(data !== null){
      route.push("/")
    }
    
  }

  return (
    <div className={styled.containerRegister}>
      <div className={styled.bodyRegister}>
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
            <label htmlFor="username">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className={styled.inputText}
              placeholder="08***"
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
          </div>

          <button className={styled.btn} onClick={handleSubmit}>Sign Up</button>
          <p className={styled.infoReg}>Sudah memiliki akun? <span onClick={() => route.push("/auth/login")}>Sign in</span></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
