import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import post from "./components/Profile/MyPosts/Post/Post";

let dialogsDate = [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Dmitry'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Viktor'}
]
let messagesDate = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'My name Viktor'}
]
let Posts= [
    {id:1,message:'My first Post',likesCount:1234},
    {id:2,message:'My second Post',likesCount:260},
    {id:3,message:'I like Post',likesCount:12}
]
ReactDOM.render(
  <BrowserRouter>
    <App dialogsDate={dialogsDate} messagesDate={messagesDate} Posts={Posts}/>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
