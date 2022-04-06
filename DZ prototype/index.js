import React, {useState, useMemo, useCallback} from 'react';
import {render} from 'react-dom';
import './index.css';
import {storage} from "./firebase";
import firebase from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import {useDropzone} from "react-dropzone";
import ReactDOM from 'react-dom'
import FileBrowser from 'react-keyed-file-browser'
import { getStorage, ref, listAll } from "firebase/storage";
import App from './App';
import { getActiveElement } from '@testing-library/user-event/dist/utils';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };
  
  const db = firebase.firestore();

const ReactFirebaseFileUpload = () =>{
  
        const handleUpload = (file) => {
            try{
              const blobURL = URL.createObjectURL(file);
              const blob =  fetch(blobURL).then((r) => r.blob());
              const snapshot =  storage.ref(`documents/${file.name}`).put(blob).then(snapshot => {
              return snapshot.ref.getDownloadURL().then(url => {
                try{
                  const d = Date.now();
                  const fileRef =  addDoc(collection(db, "files"),{
                    name: file.name,
                    size: file.size,
                    date: d,
                    url: url
                  })
                  console.log("Document written with ID: ", fileRef.id);
                } catch (e) {
                  console.error("Error adding document: ", e);
                }});       
              })     
            }
            catch(error){
                throw error;
            }
        };

        const onDrop = useCallback(async (acceptedFiles) => {
            try{
             await acceptedFiles.forEach(handleUpload);
            }
            catch (error) {
                throw error;
            }
        }, [])

        const {
          getRootProps,
          getInputProps,
          isFocused,
          isDragAccept,
          isDragReject,
          acceptedFiles
        } = useDropzone({onDrop});
      
        const style = useMemo(() => ({
          ...baseStyle,
          ...(isFocused ? focusedStyle : {}),
          ...(isDragAccept ? acceptStyle : {}),
          ...(isDragReject ? rejectStyle : {})
        }), [
          isFocused,
          isDragAccept,
          isDragReject
        ]);
      
        return (
          <div className="container">
            <div {...getRootProps({style})}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </div>
        );
    };

const listRef = ref(storage, 'documents/');
const querySnapshot = getDocs(collection(db, "files"));

ReactDOM.render(<ReactFirebaseFileUpload />, document.querySelector("#root"), );