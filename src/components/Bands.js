import React from 'react';
import Band from './Band';
import { connect } from 'react-redux';

const Bands = props => {
	return (
		<div>
			{props.bands.map(band => {
				return (
					<Band key={band.id} band={band} delete={props.deleteBand} />
				);
			})}
		</div>
	);
}

const mapDispatchToProps = dispatch => {
	return {
		deleteBand: id => dispatch({ type: "DELETE_BAND", id })
	}
}

export default connect(null, mapDispatchToProps)(Bands);
