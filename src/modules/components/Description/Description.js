import React, {Component} from 'react'
import './Description.scss';

class Description extends Component {
	render() {
		const description = this.props.description;
		const subDescription = this.props.subDescription;

		return (
			<p className="weather-body__description">
				{description}
				{subDescription !== undefined ?
					<small>
						{subDescription}
					</small>
				:
					""
				}
			</p>
		)
	}
}

export default Description
