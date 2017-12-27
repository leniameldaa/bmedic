import firebase from "firebase";
import { User } from "../data/user.interface";

export class AuthService{

    user: User

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