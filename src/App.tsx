import { useEffect, useRef, FC } from 'react';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';//'react-three-fiber';
import { Mesh } from 'three';

const App: FC = () => {

	const ThreeScene = () => {
		return (
			<Canvas>
				<ambientLight />
				<Box />
			</Canvas>
		);
	};

	const Box = () => {
		const boxRef = useRef<Mesh>(null!);

		useFrame(() => {
			boxRef.current.rotation.x += 0.001;
			boxRef.current.rotation.y += 0.01;
		});

		return (
			<Mesh ref={boxRef}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color='red' />
			</Mesh>
		);
	};

	return (
		<div className='App h-screen'>
	
			<ThreeScene />
			
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
