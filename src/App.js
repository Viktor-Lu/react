import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes,Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {updateNewPostText} from "./Redux/state";

// рисуем функцию app

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar />
                <div className='app-wrapper-content'>
                    <Routes>
                    <Route path='profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='dialogs' element={<Dialogs state={props.state.dialogPage} addPost={props.addPost}/>}/>
                    <Route path='news' element={<News/>}/>
                    <Route path='music' element={<Music/>}/>
                    <Route path='settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    )
}

export default App;
