import React from "react";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
    function create() {
        const id = 'introtoswe'
        props.history.push(`/video/${id}`);
    }

    return (
        <button onClick={create}>Create room</button>
    );
};

export default CreateRoom;