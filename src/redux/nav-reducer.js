const initialState = {
    nameLink: [
        {name: 'Profile', link: '/profile'},
        {name: 'Dialogs', link: '/dialogs'},
        {name: 'News', link: '/news'},
        {name: 'Music', link: '/music'},
        {name: 'Settings', link: '/settings'},
    ]
};

const navReducer = (state = initialState, action) => {
    return state;
}

export default navReducer;