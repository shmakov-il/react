import Friends from "./Friends";

const FriendsContainer = (props) => {

    const sidebar = props.store.getState().sidebar;

    return (
        <Friends sidebar={sidebar}/>
    )
}

export default FriendsContainer;