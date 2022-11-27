import React, { useState } from 'react'
import Avatar from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,db,storage } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

export default function Register() {
  const [err, setError] =useState(false)

  const handlesubmit = async (e)=>{
    e.preventDefault()
    const displayName =e.target[0].value;
    const email =e.target[1].value;
    const password =e.target[2].value;
    const file =e.target[3].files[0];

try {
  const res= await createUserWithEmailAndPassword(auth, email, password)


const storageRef = ref(storage, 'images/rivers.jpg');

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on( 
 
  (error) => {
      setError(true) }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL,
      });
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });
    });
  }
);

} catch (err) {
  setError(true)
}

}


  return (
    <div className='formConatiner'>
    

      <div className="formWrapper">
      <div className="form-header">
        <h2>Amit's Chat App</h2>
        <p>Register</p>
       </div>

         <form onSubmit={handlesubmit}>
         <input type="text" placeholder='dispaly name' />
         <input type="email" placeholder='email' />
         <input type="password" placeholder='password' />
         <input type="file" style={{display:"none"}} id="file"/>
         <label htmlFor="file">
          <img src={Avatar} alt="" />
          <span>Add Profile Avatar</span>
         </label>
          <div className="form-footer">
         <button className='register-btn'>Register</button>
         <p>Already have an account? Log In</p>
         </div>
         {err && <span>Something went wrong</span>}
         </form>
      </div>
      
    </div>
  )
}
