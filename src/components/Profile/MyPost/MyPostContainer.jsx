import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {

    const state = props.store.getState();

    const onAddMyPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (event) => {
        const text = event.target.value;
        props.store.dispatch(updateNewPostActionCreator(text))
    }

    return(
        <MyPost onAddMyPost={onAddMyPost}
                onPostChange={onPostChange}
                newPostText={state.profilePage.newPostText}
                posts={state.profilePage.posts}
        />
    )
}

export default MyPostContainer;