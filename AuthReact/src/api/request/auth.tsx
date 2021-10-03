import {auth} from "../firebase";


export const userApi ={
    login:(email:string,password:string)=>auth.signInWithEmailAndPassword(email,password),
    logout:()=>auth.signOut(),
    registration:(email:string,password:string)=>auth.createUserWithEmailAndPassword(email,password),
    initAuth:(onAuth:any)=>{
        auth.onAuthStateChanged(onAuth);
    }
}