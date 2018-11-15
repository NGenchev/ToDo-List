import React from 'react'
import Create from './Create'
import Delete from './Delete'

const Controls = ({ deleteAllMethod, createMethod, emptyCheck }) => {
	return (
		<div className="column">
			<Create createMethod={ createMethod } />

			<Delete deleteAllMethod={ deleteAllMethod } emptyCheck={ emptyCheck } />
		</div>
	)
}

export default Controls