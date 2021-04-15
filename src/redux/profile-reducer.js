const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 9},
        {id: 2, message: 'I\'m fine, thanks!', like: 2},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_POST':
            const newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE_NEW_POST':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ( {type: ADD_POST} );
export const updateNewPostActionCreator = (text) => ( {type: UPDATE_NEW_POST, newText: text} );

export default profileReducer;