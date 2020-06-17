import React from 'react';
import Card from './Card';


const CardList = ({details}) => {
	const robots = details.map((robot,i)=>{
	return	<Card key={i} id={details[i].id} name={details[i].name} username={details[i].username} email={details[i].email} />
	});
	return(
	<div>
		{robots}
	</div>
	);
}

export default CardList;