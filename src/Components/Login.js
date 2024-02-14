import React,{useState} from 'react'
import { Validation } from '../Utils/Validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddUser } from '../Utils/Slice';
import {auth} from "../Utils/firebase";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signUp, setSignup] = useState(false)
  const [name, setName] = useState('')
  const[errMsg, seterrMsg] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    seterrMsg(Validation(email,password,signUp,name))
    if(errMsg) return;
    if(signUp === false){
    seterrMsg(Validation(email,password,signUp))

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      //navigate('/Browse')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrMsg(errorCode + "-" + errorMessage)
    });

    } else if(signUp === true){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        signInWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        const {email, uid, displayName, photoURL} = auth.currentUser
          dispatch(AddUser({email: email, uid: uid, name: displayName, photoURL: photoURL}))
          //navigate('/Browse')
      }).catch((error) => {
        // An error occurred
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrMsg(errorCode + "-" + errorMessage)
      });
    })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrMsg(errorCode + "-" + errorMessage)
      });
    }
   
  }
  return (
    <div className='form-container'>
    <form onSubmit={(e)=>{handleSubmit(e)}}> 
      <label className='mb-2'>Sign { signUp === false ? "In" : "Up" }</label>
      {
        signUp === true ? <div className='input-1'>
        <input type='text' id='name' value={name} onChange={(e)=>{setName(e.target.value)}} 
        placeholder='Name'/>
        </div> : null
      }
      <div className='input-1'>
      <input type='text' id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} 
      placeholder=' Email or phone number'/>
      </div>
      <div className='input-1'>
      <input type='password' id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}
      placeholder='Password'/> 
      </div>
      <p className='error-message'>{errMsg}</p>
      <button className='submit-form' type='submit'>Sign { signUp === false ? "In" : "Up" }</button>
      <p className='signup-form'  onClick={()=>{setSignup(!signUp)}}>{ signUp === false ? "New to Netflix?Sign Up Now" : "Already a User. Sign In" }</p>
    </form>
    </div>
  )
}

export default Login