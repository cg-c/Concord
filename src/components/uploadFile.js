import React from 'react';
import {storage, db} from "../firebase/firebaseConfig";
import {collection, addDoc, query, getDocs, where} from "firebase/firestore"; 
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import 'react-keyed-file-browser/dist/react-keyed-file-browser.css';
import 'font-awesome/css/font-awesome.min.css'
import { StyledForm } from './styles/Form.styled';
import FileBrowser, {Icons} from 'react-keyed-file-browser'
import {getAuth} from "firebase/auth"

//style and some boilerplate taken from the live examples on https://react-dropzone.js.org/
const FileUpload = () =>{

    const auth = getAuth();
    const user = auth.currentUser;
    //gets currently signed in user


    const generateFiles = () => {
      var files = [];
        function addFiletoFiles(name, date, size){
          files.push({key : name, modified : date, size : size});
        }
      
          const q = query(collection(db, "files"), where('owner', '==', user.email));   //gets all files logged in user uploaded
            getDocs(q).then((querySnapshot) => {    
              querySnapshot.forEach((doc) => {
                if(!querySnapshot.empty){
                  addFiletoFiles(doc.data().name, doc.data().date, doc.data().size);    //adds each file to array of all user files
                }
            });
          });
          return files;
        }

        var fileArray = generateFiles();

    const handleUpload = (file) => {
        try{
            const blobURL = URL.createObjectURL(file);  
            const blob =  fetch(blobURL).then((r) => r.blob()); //get data from uploaded file
            const storageRef = ref(storage, `${user.email}/${file.name}`);  //set storage path to current user's directory
            const uploadTask = uploadBytesResumable(storageRef, blob);      //uploads file
            uploadTask.on('state_changed', 
                (snapshot) =>{},    //do nothing while uplaoding
                (error) => { console.log(error)},   //log error on error
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(url => {
                        try{
                            const d = Date.now();
                            const fileRef =  addDoc(collection(db, "files"),{
                                name: file.name,
                                size: file.size,
                                date: d,
                                url: url,
                                owner : user.email
                            })
                            console.log("Document written with ID: ", fileRef.id);
                            fileArray = generateFiles();
                        } catch (e) {
                            console.error("Error adding document: ", e);
                        }
                    });         
                });
                //once upload is compelte, add matching object to relational database with file info, owner, and download url
        }
        catch(error){
            throw console.log(error);
        }
    };

   /* const onDrop = useCallback(async (acceptedFiles) => {
        try{
            await acceptedFiles.forEach(handleUpload);  //for each file that's accepted, run through upload process
        }
        catch (error) {
            throw console.log(error);
        }
    }, []) */

    function setFiles(event){
      const fileList = event.target.files;
      for(let i = 0; i < fileList.length; i++){
        handleUpload(fileList[i]);
      } //fileList doesn't like foreach so we do it the old fashioned way
    }

    return (
      <>
        <StyledForm>
          <div className="container" style={{backgroundColor: "#cbd2d0"}}>
            <p></p>
            <input type="file" className="file" id="attachment" onChange={setFiles} multiple/>
          </div>
          <div style={{backgroundColor: "#cbd2d0"}}><FileBrowser 
              files = {fileArray}
              icons = {Icons.FontAwesome(4)}
          /></div> 
        </StyledForm>
      </>
    );
};

export default FileUpload;