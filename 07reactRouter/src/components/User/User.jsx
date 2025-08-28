import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userID} = useParams()

    return(
        <h1 className="text-center m-10 bg-gray-400 text-white p-5 rounded-2xl">This is user page, Your user ID: {userID}</h1>
    )
}

export default User