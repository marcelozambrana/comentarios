import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
   
})

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}
  
export const auth = firebaseApp.auth()
export default base