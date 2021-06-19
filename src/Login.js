import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import './Login.css';
import {auth} from './firebase';
import {login} from './features/userSlice'




function Login (){
	const [email,setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const dispatch = useDispatch();
	
	
	
	const register = ()=>{
		if(!name){
			return alert("Warning: Please Enter Full Name")
		}
			auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
			userAuth.user.updateProfile({
				displayName:name,
				photoUrl:profilePic,
				
				
			}).then(() =>{
				dispatch(
					login({
					email:userAuth.user.email,
					uid:userAuth.user.uid,
					displayName:name,
				    photoUrl:profilePic,
					
				}));
			})
		}).catch((error) => alert(error));
	};
		
		
			
	const loginToApp = (e)=>{
		e.preventDefault();
		auth.signInWithEmailAndPassword(email,password)
		.then(userAuth =>{
			dispatch(login({
					email:userAuth.user.email,
					uid:userAuth.user.uid,
					displayName:userAuth.user.displayName,
					photoUrl:userAuth.user.photoUrl,
			}))
		}).catch((error)=> alert(error));
	};
	
		
	return (
	<div className='login'>
		
		<img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="/" />
			<form>
		<input
			value={name}
			onChange={(e)=> setName(e.target.value)}
			placeholder="Full Name (Required During Registering)" type="text" />
		<input 
			value={profilePic}
			onChange={(e)=> setProfilePic(e.target.value)}
			placeholder="Profile Picture Image Url (Optional)" type="text"/>	
		<input 
			value={email}
			onChange={(e)=> setEmail(e.target.value)}
			placeholder="Email" type="email"/>
		<input 
			value={password}
			onChange={(e)=> setPassword(e.target.value)}		
			
			placeholder="Password" type="password"/>
		<button type ="submit" onClick={loginToApp} >Signin</button>

				
				</form>
			<p>New to LinkedIn {'  '} <span onClick={register}  className="login__Register">Register Now</span></p>
		</div>
	
	)

	
};
export default Login