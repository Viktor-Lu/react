import {rerenderEnter} from "../render";



let state={
    profilePage:{
        Posts:[
            {id:1,message:'My first Post',likesCount:1234},
            {id:2,message:'My second Post',likesCount:260},
            {id:3,message:'I like Post',likesCount:12}
        ],
        newPostText:'it-kamasutra'
    },
    dialogPage:{
        dialogsDate:[
            {id: 1, name: 'Andrew',ava:'https://upload.wikimedia.org/wikipedia/commons/8/85/Smiley.svg'},
            {id: 3, name: 'Sasha',ava:'https://upload.wikimedia.org/wikipedia/commons/8/85/Smiley.svg'},
            {id: 4, name: 'Sveta',ava:'https://upload.wikimedia.org/wikipedia/commons/8/85/Smiley.svg'},
            {id: 5, name: 'Valera',ava:'https://upload.wikimedia.org/wikipedia/commons/8/85/Smiley.svg'},
            {id: 6, name: 'Viktor',ava:'https://upload.wikimedia.org/wikipedia/commons/8/85/Smiley.svg'},
            {id:7,name:'Valera',ava:'https://upload.wikimedia.org/wikipedia/commons/8/85/Smiley.svg'},
                    ],
        messagesDate:[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'My name Viktor'}
        ],
    }
}

window.state=state;

export let addPost=()=>{
    let newPost={
        id:4,
        message:state.profilePage.newPostText,
        likesCount:0
    };

    state.profilePage.Posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEnter(state);
}


export let updateNewPostText=(text)=>{
    state.profilePage.newPostText=text;
    rerenderEnter(state);
}


export default state;