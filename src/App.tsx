import { useEffect, FC } from 'react';
import './App.css';
import { Canvas } from 'react-three-fiber';

const App: FC = () => {

	const Box = () => {
		return (
			<mesh>
				<boxBufferGeometry attach='geometry' />
				<meshLambertMaterial attach='material' color='hotpink' />
			</mesh>
		);
	};

	return (
		<div className='App'>
	
			<Canvas>
				<Box/>
			</Canvas>

			{/*<h1 className='text-red-500 text-5xl'>Bradley White</h1>

			<p>
				hajjhhkshdjkhhjhkjsdkhjhkhkjkhds
				hkdjkfsjhkjhkhkfshkjhkjhjkhjkfs
			</p>

			<p>
				hajjhhkshdjkhhjhkjsdkhjhkhkjkhds
				hkdjkfsjhkjhkhkfshkjhkjhjkhjkfs
			</p>
			
			<p>
				hajjhhkshdjkhhjhkjsdkhjhkhkjkhds
				hkdjkfsjhkjhkhkfshkjhkjhjkhjkfs
			</p>
			
			<p>
				hajjhhkshdjkhhjhkjsdkhjhkhkjkhds
				hkdjkfsjhkjhkhkfshkjhkjhjkhjkfs
			</p>*/}

		</div>
	);
}

export default App;
