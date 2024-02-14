import React,{useEffect} from 'react'
import logo from "../Assests/images/Netflix_Logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { AddUser, RemoveUser } from '../Utils/Slice'
import { useNavigate } from 'react-router-dom'
import {auth} from '../Utils/firebase'
import {onAuthStateChanged,signOut } from 'firebase/auth'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector( (store) => store.User)
    const handleSignOut =()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(RemoveUser())
           navigate('/')
      }).catch((error) => {
        // An error happened.
      });
           
    }
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {email, uid, displayName} = user
            dispatch(AddUser({email: email, uid: uid, name: displayName}))
            navigate('/Browse')
          } else {
            // User is signed out
             dispatch(RemoveUser())
             navigate('/')
          }
        });

      return ()=> unsubscribe
      },[])
  return (
    <>
      { user === null ?  <img className="img-logo" alt="logo" src={logo} /> :
      <div className='header-container'>
        <img className="img-logo-1" alt="logo" src={logo} />
        <div className='title'>
        <h2 className='name-head'>{user?.name}</h2>
        <button className='signout-btn' onClick={()=>{handleSignOut()}}>Sign Out</button>
        </div>
        </div>
      }
    </>
  )
}

export default Header