import {storage} from "./firebase";
import firebase from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { getStorage, ref, listAll } from "firebase/storage";


export const handleUpload = (file) => {
    const db = firebase.firestore();
    try{
        const blobURL = URL.createObjectURL(file);
        const blob =  fetch(blobURL).then((r) => r.blob());
        const snapshot =  storage.ref(`documents/${file.name}`).put(blob).then(snapshot => {
        return snapshot.ref.getDownloadURL().then(url => {
        try{
            const d = Date.now();
            const fileRef =  addDoc(collection(db, "files"), {
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

export const dropUpload = useCallback(async (acceptedFiles) => {
    try{
        await acceptedFiles.forEach(handleUpload);
    }
    catch (error) {
        throw error;
    }
}, [])

