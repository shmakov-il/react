import NameLink from "./NameLink";

const NameLinkContainer = (props) => {

    const nav = props.store.getState().nav;

    return (
        <NameLink nav={nav}/>
    )
}

export default NameLinkContainer;