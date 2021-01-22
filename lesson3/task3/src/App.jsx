import React from 'react';
import Comment from './Comment';
const UserInfo = {
    name: "Tom",
    avatarUrl: "https://avatars.githubusercontent.com/github"
} 


const App = () => {
    return (
        <Comment 
    author={UserInfo}
    text="good job"
    date={new Date(new Date())}
    />
    );
}
export default App;