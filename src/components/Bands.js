import React from 'react'
import Band from './Band.js'

export default class Bands extends React.Component {
	render(){
		return (
			<ul>
				{this.props.bands.map(band => <Band key={band.id} band={band} deletes={this.props.deletes}/>)}
			</ul>
		)
	}
}
