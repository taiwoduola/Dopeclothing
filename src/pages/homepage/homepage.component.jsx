import React from 'react';
import './homepage.styles.scss';

//components
import Hero from '../../components/hero/hero.component';
import Catergory from '../../components/catergories/catergories.component';
import ProductsDir from '../../components/productsdirectory/productsdir.component';
import MiniHero from '../../components/minihero/minihero.component';
import DiscoverStyle from '../../components/discoverheader/discoverheader.component';

const HomePage = () => (
	<div className="homepage">
		<Hero />
		<DiscoverStyle>
			{' '}
			discover <br /> the collections{' '}
		</DiscoverStyle>
		<Catergory />
		<DiscoverStyle>popular products</DiscoverStyle>
		<ProductsDir />
		<MiniHero />
	</div>
);

export default HomePage;
