import React from 'react'

const Listing = ({todos, deleteMethod}) => {
	if ( todos ) {
		const todosList = todos.map(todo => {
			return (
				<li 
					onClick={ () => { deleteMethod( todo.id ) } } 
					key={ todo.id }>
						{ todo.content }
				</li>
			)
		})

		return(
			<div className="column">
				<ul className="list-todos">
					{ todosList }
				</ul>
			</div>
		)
	} else {
		return(
			<div className="column">
				<div className="message-success">
					<p>No more todos for today! ;)</p>
				</div>
			</div>
		)
	}
}

export default Listing