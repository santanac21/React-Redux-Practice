import React , {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from "../Redux/index";

function UserContainer(props) {
    const {users, error, fetchUsers} = props;

    let userList = users.map((user)=>{
        return(
            <li key={user.id}>{user.name}</li>
        );
    });

    useEffect(()=>{
        fetchUsers();
    }, []);

    return (
        <div>
            {(error) ? (<h1>Failed to load</h1>):
                (<ul> 
                    { userList }
                </ul>)
            }
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        users: state.user.users,
        error: state.user.error,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(UserContainer);