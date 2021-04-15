import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={s.item}>
            {props.message}
            <img src="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg" alt="Avatar"/>
            <div>{props.like} Like</div>
        </div>
    )
}

export default Post;