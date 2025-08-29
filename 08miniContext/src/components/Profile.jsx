import React, {useContext} from "react";
import UserContext from "../context/UserContext.js";

function Profile(){
    const {user} = useContext(UserContext)
    if (!user || !user.username){
        return <div className="text-center  text-red-300 max-w-sm my-5 mx-auto p-5 rounded-2xl bg-gray-700">Please login</div>
    }
    console.log(user)
    return <div className="text-center  max-w-sm my-5 mx-auto p-5 rounded-2xl bg-gray-700">Welcome, your username is {user.username}</div>
}

export default Profile
