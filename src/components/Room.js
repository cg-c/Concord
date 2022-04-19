import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import socket from "socket.io-client/lib/socket";

//checks to see if the user is a teacher
let isTeacher = false;
const URL = new URLSearchParams(window.location.search).get("isTeacher");
  console.log("url", URL);
  if (URL) {
    isTeacher = true;
  } else {
    isTeacher =false;
  }


const Container = styled.div`
    display: flex;
    width: 100%;
    height 100vh;
    margin: auto;
    flex-wrap: wrap;
    background-color: #3d3b40;
    color: #3d3b40;
    align-items: center;
`;

const LeftContainer = styled.div`
    float: left;
    width: 80%;
    
`;
const RightContainer = styled.div`
    float: left;
    width: 20%;
`;

const StyledVideo = styled.video`
    height: 100%;
    width: 80%;
    margin: auto;
    color: #3d3b40;
    border: 10px;
    border-color: #eaf5f1;
    border-radius: 20px;
`;

const StyledTeacherVideo = styled.video`
    padding: 20px;
    height: 100%;
    width: 90%;
    color: #3d3b40;
    border: 20px;
    border-color: #eaf5f1;
    border-radius: 20px;
    margin: auto;
`;

const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
        console.log("inside of video useEffect");
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <StyledVideo playsInline autoPlay ref={ref} />
    );
}

const TeacherVideo = (props) => {
    const ref = useRef();

    useEffect(() => {
        console.log("inside of video useEffect");
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <StyledTeacherVideo playsInline autoPlay ref={ref} />
    );
}


const videoConstraints = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2
};

const Room = (props) => {

    const [peers, setPeers] = useState([]);
    const socketRef = useRef();
    const userVideo = useRef();
    const peersRef = useRef([]);
    const roomID = props.match.params.roomID;


    useEffect(() => {
        socketRef.current = io.connect("/");
        console.log('within Effect Window');
        navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
            userVideo.current.srcObject = stream;
            socketRef.current.emit("join room", roomID);
            socketRef.current.on("all users", users => {
                const peers = [];
                users.forEach(userID => {
                    const peer = createPeer(userID, socketRef.current.id, stream);
                    peersRef.current.push({
                        peerID: userID,
                        peer,
                    })
                    peers.push(peer);
                })
                setPeers(peers);
            })

            socketRef.current.on("user joined", payload => {
                const peer = addPeer(payload.signal, payload.callerID, stream);
                peersRef.current.push({
                    peerID: payload.callerID,
                    peer,
                })

                setPeers(users => [...users, peer]);
            });

            socketRef.current.on("receiving returned signal", payload => {
                const item = peersRef.current.find(p => p.peerID === payload.id);
                item.peer.signal(payload.signal);
            });

            // socketRef.current.on("user disconnected", id => {
            //     console.log(id);
            //     const index = peers.length-1;
            //     for(let i = 0; i < peers.length; i++){
            //         if(peers.at(i).userID == id){
            //             index = i;
            //         }
            //     }
            //     if (index !== -1) return peers.splice(index, 1)[0];
            // });
        })
    }, []);

    function createPeer(userToSignal, callerID, stream) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });

        peer.on("signal", signal => {
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
        })

        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        })

        peer.on("signal", signal => {
            socketRef.current.emit("returning signal", { signal, callerID })
        })

        peer.signal(incomingSignal);

        return peer;
    }

    //teacher view works correctly
    if(isTeacher){
        return (
            <Container>
                <LeftContainer>
                    <StyledTeacherVideo muted ref={userVideo} autoPlay playsInline />
                </LeftContainer>
                <RightContainer>
                    {peers.map((peer, index) => {
                            return (
                                <Video key={index} peer={peer} />
                            );
                        })}
                </RightContainer>
            </Container>
        );
    }
    else{
        return (
            <Container>
                <LeftContainer>
                    {peers.map((peer, index) => {
                        //the teacher is the peer at index 0
                        if(index == 0){
                            console.log(index);
                            return (
                                <TeacherVideo key={index} peer={peer} />
                            );
                        }
                        })}
                </LeftContainer>
                <RightContainer>
                    <StyledVideo muted ref={userVideo} autoPlay playsInline />
                    {peers.map((peer, index) => {
                        //the teacher is the peer at index 0
                        if(index > 0){
                            console.log(index);
                            return (
                                <Video key={index} peer={peer} />
                            );
                        }
                        })}
                </RightContainer>
            </Container>
        );
    }
};

export default Room;