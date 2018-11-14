import React from 'react'

const Listing = ({todos, deleteMethod}) => {
	const todosList = todos.map(todo => {
		return (
			<li 
				onClick={ () => { deleteMethod( todo.id ) } } 
				key={ todo.id }>
					{ todo.content }
			</li>
		)
	})

	if ( todosList.length ) {
		return( 
			<ul className="list-todos">
				{ todosList }
			</ul>
		)
	} else {
		return(
			<p>No more todos for today! ;)</p>
		)
	}
}

export default Listing