import React from 'react'
import Create from './Create'
import Delete from './Delete'

const Controls = ({ deleteAllMethod, createMethod }) => {

	return (
		<div className="column">
			<Create createMethod={ createMethod } />

			<Delete deleteAllMethod={ deleteAllMethod } />
		</div>
	)
}

export default Controls