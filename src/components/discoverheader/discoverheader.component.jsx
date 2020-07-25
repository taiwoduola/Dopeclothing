import React from 'react';

import './discoverheader.styles.scss';

const DiscoverStyle = ({ children }) => (
	<div className="discover">
		<span className="discover-header">{children}</span>
	</div>
);

export default DiscoverStyle;
