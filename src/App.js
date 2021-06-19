import {React,useEffect} from 'react';
import {auth} from './firebase';
import './App.css';
import {useSelector} from 'react-redux';
import {login,logout,selectUser} from './features/userSlice';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed.js';
import Login from './Login.js';
import {useDispatch} from 'react-redux';
import Widgets from './Widgets.js';
function App() {
	const user =useSelector(selectUser); //useSelector is a fancy hook from redux
	const dispatch = useDispatch();
	useEffect(()=>{
		auth.onAuthStateChanged(userAuth =>{
			if(userAuth)
				{//user logged in
					dispatch(login({
					email:userAuth.email,
					uid:userAuth.uid,
					displayName:userAuth.displayName,
				    photoUrl:userAuth.photoUrl,
					}))
				}
			else{ //user logged out
				dispatch(logout());
			}
		})
	},[]);
  return (
    <div className="app">
    
		
		  <Header />
		  {!user ? (
		  <Login />
		  )
		  :
		  (
		  <div className="app__body">
			
			  <Sidebar />
			  <Feed />
			 <Widgets/>
		  </div>
		  
		  )}
		  
		 
		      
		  		
    </div>
  );
}

export default App;
