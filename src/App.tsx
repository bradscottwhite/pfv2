import { useEffect, useRef, FC } from 'react';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';//'react-three-fiber';
import { Plane, useTexture } from '@react-three/drei';
import { Mesh } from 'three';

const App: FC = () => {

	const ThreeScene: FC = () => {
		return (
			<Canvas>
				<ambientLight />
				<pointLight position={[5, 5, 5]} />
				<Box />
				<Terrain />
			</Canvas>
		);
	};

	const Terrain: FC = () => {
		const texture = useTexture('./background.jpeg');

		return (
			<Plane args={[10, 10]} rotation-x={-Math.PI / 2}>
				<meshStandardMaterial map={texture} />
			</Plane>
		);
	};

	const Box: FC = () => {
		const boxRef = useRef<Mesh>(null!);

		useFrame(() => {
			boxRef.current.rotation.x += 0.001;
			boxRef.current.rotation.y += 0.01;
		});

		return (
			<mesh ref={boxRef}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color='red' />
			</mesh>
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
