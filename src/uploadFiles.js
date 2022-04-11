import React, {useMemo, useCallback} from 'react';
import {storage, db} from "./firebase/firebaseConfig";
import {collection, addDoc, query, getDocs} from "firebase/firestore"; 
import {useDropzone} from "react-dropzone";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import 'react-keyed-file-browser/dist/react-keyed-file-browser.css';
import 'font-awesome/css/font-awesome.min.css'
import FileBrowser, {Icons} from 'react-keyed-file-browser'

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
  


const FileUpload = () =>{

    const generateFiles = () => {
    
        var files = [];
      
        function addFiletoFiles(name, date, size){
          files.push({key : name, modified : date, size : size});
        }
      
          const q = query(collection(db, "files"));
            getDocs(q).then((querySnapshot) => {    
              querySnapshot.forEach((doc) => {
                if(!querySnapshot.empty){
                  addFiletoFiles(doc.data().name, doc.data().date, doc.data().size);
                }
            });
          });
          return files;
        }

    const handleUpload = (file) => {
        try{
            const blobURL = URL.createObjectURL(file);
            const blob =  fetch(blobURL).then((r) => r.blob());
            const storageRef = ref(storage, `documents/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, blob);
            uploadTask.on('state_changed', 
                (snapshot) =>{},
                (error) => { console.log(error)},
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(url => {
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
                        }
                    });         
                });
            
        }
        catch(error){
            throw console.log(error);
        }
    };

    const onDrop = useCallback(async (acceptedFiles) => {
        try{
            await acceptedFiles.forEach(handleUpload);
        }
        catch (error) {
            throw console.log(error);
        }
    }, [])

    const {
        getRootProps,
        getInputProps,
        isFocused,
        open,
        isDragAccept,
        isDragReject,
        acceptedFiles
    } = useDropzone({onDrop, noClick : true, noKeyboard : true});
    
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
        <>
        <div className="container">
            <div {...getRootProps({style})}> 
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <button className="bg-blue-500 px-4 py-2 text-white rounded-lg mr-5" type="button" onClick={open}>
                Open File Dialog
                </button>
            </div>
        </div>
        <div><FileBrowser 
            files = {generateFiles()}
            icons = {Icons.FontAwesome(4)}
        /></div> 
        </>
    );
};

export default FileUpload;


