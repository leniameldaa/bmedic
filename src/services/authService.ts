import firebase from "firebase";
import { User } from "../data/user.interface";

export class AuthService{

    user: User
    config = {
        apiKey: "AIzaSyBh-3YvuV6tkKoBKeueUl8Tj4ZZ8I0QwYM",
        authDomain: "bmedic-app.firebaseapp.com",
        databaseURL: "https://bmedic-app.firebaseio.com"      
      }
      secondaryApp = firebase.initializeApp(this.config, "iseng");

    signin(email: string, password:string){
        return firebase.auth().signInWithEmailAndPassword(email,password);
    }

    signup(email: string, password: string){
        return firebase.auth().createUserWithEmailAndPassword(email,password);
    }

    logout(){
       firebase.auth().signOut(); 
    }

    getActiveUser(){
        return firebase.auth().currentUser
    }
}