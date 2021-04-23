import React from 'react';
import s from "./Users.module.css";
import userDefaultPhoto from "../../assets/images/userDefault.jpg";

const Users = (props) => {
    const pageAll = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pageAll; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <button onClick={() => {
                        props.onPageChanged(p)
                    }} className={`${props.currentPage === p && s.selected} ${s.check}`}>{p}</button>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userDefaultPhoto} alt="Avatar"
                             className={s.photo}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.toggleFollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.toggleFollow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                    <div>
                        {'u.location.city'}
                        {'u.location.country'}
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;