import React from 'react';

const Create = ({createMethod, cookies}) => {
	const addTodo = () => {
		let inputField = document.querySelector( '.form-create textarea' );

		let todoContent = strip_html( inputField.value );
		
		if ( todoContent !== false ) {
			let todo = {};
			todo.content = strip_html( inputField.value );
			createMethod( todo )

			inputField.value = '';	
		}
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

	const strip_html = str => {
       return str === null || str === '' 
       ? false 
       : str.toString().replace(/<[^>]*>/g, '');
	}

	return(
		<div className="form-create">
			<div className="form__head">
				<h3>Add New Todo:</h3>
			</div>

			<div className="form__body">
				<form onSubmit={ handleSubmit }>
					<textarea 
						onKeyPress={ handleSending } 
						placeholder="Enter a content for todo"
						cols="22" rows="5"
					></textarea>
				</form>
			</div>

			<div className="form__foot">
				<p>Press enter to add new record. Press shift + enter to add new line. You can easily remove one todo by click on it.</p>
			</div>
		</div>
	)
}

export default Create