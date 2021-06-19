import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info'; 
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
function Widgets(){
	
	const newsArticle = (heading,subtitle)=> (
	<div className="widgets__article">
			
		<div className="widgets__articleLeft">
			<FiberManualRecordIcon />
		</div>
		<div className="widgets__articleRight">
			<h4>{heading}</h4>
		    <p>{subtitle}</p>
			
		</div>		
	</div>
	);
	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<InfoIcon/>
			</div>
			{newsArticle("Shubham Jain","This is Me")}
			{newsArticle("Software Engineering","Trends in India")}
			{newsArticle("Engineering","Fileds like CSE tops the table")}
			{newsArticle("Facebook","tries to implement ads on user data basis ")}
			{newsArticle("Shubham Jain","This is Me")}
			{newsArticle("Software Engineering","Trends in India")}
			{newsArticle("Engineering","Fileds like CSE tops the table")}
			{newsArticle("Facebook","tries to implement ads on user data basis ")}
			{newsArticle("Shubham Jain","This is Me")}
			
			
			
		</div>
	);
}
export default Widgets;