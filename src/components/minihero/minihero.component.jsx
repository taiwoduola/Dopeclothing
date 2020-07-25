import React from 'react';
import './minihero.styles.scss';

//images
import brownLoofers from '../../images/brownloofers.png';

import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

const MiniHero = ({ history }) => (
	<div
		style={{
			backgroundImage: `url(${brownLoofers})`
		}}
		className="arrivals"
	>
		<div className="page_infos">
			<p className="paragraphs">#new summer collection 2020</p>
			<h2 className="titles">new shoes</h2>
			<CustomButton onClick={() => history.push('/shop')}>Order now</CustomButton>
		</div>
	</div>
);

export default withRouter(MiniHero);
