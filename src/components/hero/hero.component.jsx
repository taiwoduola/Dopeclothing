import React from 'react';
import './hero.styles.scss';

//images
import pngfuel from '../../images/pngfuel.com.png';

import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

const Hero = ({ history }) => (
	<div
		style={{
			backgroundImage: `url(${pngfuel})`
		}}
		className="arrival"
	>
		<div className="page_info">
			<p className="paragraph">#new summer collection 2020</p>
			<h2 className="title">arrivals sales</h2>
			<CustomButton onClick={() => history.push('/shop')}>Shop now</CustomButton>
		</div>
	</div>
);

export default withRouter(Hero);
