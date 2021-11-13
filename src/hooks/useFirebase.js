import { useEffect, useState } from 'react'
import firebaseInitialization from '../Components/Login/firebase/firebase.init'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'

firebaseInitialization()
const useFirebase = () => {
  const [user, setUser] = useState({})
  const auth = getAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState('')
  const [admin, setAdmin] = useState(false)

  // REGISTER NEW USER
  const registerUser = (email, password, name, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setAuthError('')
        const newUser = { email, displayName: name }
        setUser(newUser)

        // Save User to the Database
        savedUser(email, name, 'POST')

        // Name to send to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch(() => {})
        history?.replace('/')
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  // SIGN IN USER
  const logInUser = (email, password, location, history) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const destination = location?.state?.from || '/'
        history?.replace(destination)
        setAuthError('')
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  // GOOGLE SIGN IN
  const signInWithGoogle = (location, history) => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider()

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user

        savedUser(user.email, user.displayName, 'PUT')

        setUser(user)
        const destination = location?.state?.from || '/'
        history.replace(destination)
        setAuthError('')
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(setIsLoading(false))
  }

  // Observed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unsubscribe
  }, [auth])

  // LogOut
  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false))
  }

  const savedUser = (email, displayName, method) => {
    const user = { email, displayName }
    fetch('https://infinite-coast-95375.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  // Admin
  useEffect(() => {
    fetch(`https://infinite-coast-95375.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data?.admin))
  }, [user?.email])

  return {
    user,
    logInUser,
    isLoading,
    authError,
    logOut,
    registerUser,
    signInWithGoogle,
    admin,
  }
}

export default useFirebase
