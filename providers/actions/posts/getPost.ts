import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDataPost = createAsyncThunk('api/fetchData', async () => {
    const response = await axios.get("https://6392aab2ac688bbe4c68406e.mockapi.io/todos");
    return response.data;
  });
  
  