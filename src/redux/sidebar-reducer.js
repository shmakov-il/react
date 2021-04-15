const initialState = {
    friends: [
        {id: 1, name: 'Kate', link: '/kate'},
        {id: 2, name: 'Mary', link: '/mary'},
        {id: 3, name: 'Jack', link: '/jack'},
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;