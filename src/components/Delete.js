import React from 'react'

const Delete = ({deleteAllMethod, emptyCheck}) => {

	const handleSubmit = (e) => {
		e.preventDefault();

		if ( emptyCheck ) {
			var sureCheck = window.confirm( "Are you sure to clean whole list?" );
			if ( sureCheck ) {
				deleteAllMethod()
			}
		} else {
			alert( 'You already finish all of your "todo" tasks. ' );
		}
	}

	return (
		<div className="form-delete">
			<div className="form__head">
				<h3>Clean up whole list:</h3>
			</div>

			<div className="form__body">
				<form onSubmit={ handleSubmit }>
					<button>Reset List</button>
				</form>
			</div>

			<div className="form__foot">
				<p>This will clean your cookies and your list wouldn't be able on refresh anymore.</p>
			</div>
		</div>
	)
}

export default Delete