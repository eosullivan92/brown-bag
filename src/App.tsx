import { useState } from 'react';
import Avatar from './Components/Avatar';
import AvatarRefactored from './Components/AvatarRefactored';
import HeroImage from './Components/HeroImage';
import Home from './Components/Home';
import ProductCard from './Components/ProductCard';
import Sidebar from './Components/Sidebar';
import {Routes, Route} from 'react-router-dom';

function App() {
	const [dark, setDark] = useState(false);
	return (
		<>
			<div className={dark ? 'main__container main__container--dark' : 'main__container'}>
			<Sidebar />
				<Routes>
					<Route path={'/'} element={<Home setDark={setDark} dark={dark} />} />
					<Route path={'/avatar'} element={<>
					<Avatar />
					{/* <AvatarRefactored /> */}
					</>} 
					/>
					
					<Route path={'/product'} element={<ProductCard />} />
					<Route path={'/hero'} element={<HeroImage />} />

				</Routes>
				{/* <Avatar />
				<AvatarRefactored /> */}

				{/* <ProductCard /> */}

				{/* <HeroImage /> */}
				
			</div>

			{/* Show dynamic classes e.g. display: none*/}
		</>
	);
}

export default App;
