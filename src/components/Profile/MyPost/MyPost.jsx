import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {

    const postsElement = props.posts.map( p => <Post message={p.message} like={p.like} />);

    return(
        <>
            <div className={s.post}>
                <h3>My post</h3>
                <div>
                    <textarea
                        onChange={props.onPostChange}
                        value={props.newPostText} />
                    <div>
                        <button onClick={props.onAddMyPost}>send</button>
                    </div>
                </div>
            </div>
            <div>
                { postsElement }
            </div>
        </>
    )
}

export default MyPost;