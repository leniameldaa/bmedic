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

    cekAdmin(){
        //cek admin atau tidak
        var uId = firebase.auth().currentUser.uid
        var userTable = firebase.database().ref("userTable/").child(uId)
        return userTable.on('value', data =>{
            this.user = data.val()
            // console.log(this.user)
        })
    }
}