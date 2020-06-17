import React from 'react';
import './Card.css'

const Card = ({ id, name, username, email}) => {
	return(
		<div className="bg-light-green dib br3 ma2 grow tc bw2 shadow-5">
		<img className='just' alt="RoboImage" src={require(`../../pictures/PythonImage${id}.png`)} />
		<div>
		<p className='f3'>{name}</p>
		<p> {username}</p>
		<p>{email}</p>
		</div>
		</div>
		);
}

export default Card;