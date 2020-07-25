import React from 'react';

import { withRouter } from 'react-router-dom';

import './collections.styles.scss';

const Collections = ({ title, items, imageUrl, gridItem, linkUrl, history }) => (
	<div className={`${gridItem} collections`} onClick={() => history.push(`${linkUrl}`)}>
		<div
			className="background-image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className="content">
			<span className="title"> {title} </span>
			<span className="items"> {items} </span>
		</div>
	</div>
);

export default withRouter(Collections);
