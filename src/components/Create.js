import React from 'react';

const Create = ({createMethod}) => {
	const addTodo = () => {
		let inputField = document.querySelector( '.form-create textarea' );
		
		// if ( inputField.value.length ) {
			let todo = {};
			todo.content = inputField.value;
			
			createMethod( todo )
			inputField.value = '';
		
	}

	const handleSubmit = (e) => {
	    e.preventDefault();
	    addTodo();
	}

	const handleSending = (e) => {
	    if ( e.key === 'Enter' && !e.shiftKey ) {
	    	e.preventDefault();
	      	addTodo()
	    }
	}

	return(
		<div className="form-create">
			<div className="form__head">
				<h3>Add New Todo:</h3>
			</div>

			<div className="form__body">
				<form  onSubmit={ handleSubmit }>
					<textarea 
						onKeyPress={ handleSending } 
						placeholder="Enter a content for todo"
						cols="22" rows="5"
					></textarea>
				</form>
			</div>

			<div className="form__foot">
				<p>Press enter to add new record.</p>

				<p>Press shift + enter to add new line.</p>
			</div>
		</div>
	)
}

export default Create