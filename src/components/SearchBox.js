import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchfield, searchChange}) => {
	return(
			<input 
			className='pa3 ba bg-lightest-blue'
			type='search' 
			placeholder='search trans4mers' 
			onChange={searchChange} 
			/>
		);
}


export default SearchBox;