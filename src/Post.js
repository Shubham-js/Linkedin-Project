import React from 'react';
 import './Post.css';
import {Avatar} from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import InputOption from './InputOption.js';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';


const Post = ({name,description, message ,photoUrl}) => {   /*(props are here but in react we can break the props into individual parameters)*/
	
	return (
		
		<div  className='post'>
			<div className='post__header'>
				<Avatar src={photoUrl} >{name[0]}</Avatar>
				<div className='post__info'>
				<h2>{name}</h2>
				<p>{description}</p>
				</div>
			</div>
			<div className='post__body'>
				<p>{message}</p>
			</div>
			<div className='post__buttons'>
			<InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray'/> 
			<InputOption Icon={ChatOutlinedIcon} title='Comment'/> 
			<InputOption Icon={ShareOutlinedIcon} title='Share'/> 
				<InputOption Icon={SendOutlinedIcon} title='Send'/> 
			</div>
		</div>
	);
	
};
export default Post;