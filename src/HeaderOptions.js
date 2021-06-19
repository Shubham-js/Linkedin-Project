import React from 'react';
import './HeaderOptions.css';
import {Avatar} from '@material-ui/core';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
 function HeaderOption({Icon, title,avatar,onClick}) /*Here we use ecma 6 so wwe can break the object*/
{
	const user = useSelector(selectUser);
	
	
	return	(
	
	 
	<div onClick={onClick} className='headerOption'>
		{Icon && <Icon className='headerOption__icon' />}
			{avatar && 
				(<Avatar className='headerOption__icon'>{user?.email[0]}
				</Avatar>)}
				
			
		<h3 className='headerOption__title'>{title}</h3>
	</div>

	);
}

export default HeaderOption;