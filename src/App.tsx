import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
//import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';

const App = () => {
	useEffect(() => {
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		camera.position.z = 96;

		const canvas = document.getElementById('bg');//querySelector('#bg');
		const renderer = new THREE.WebGLRenderer(/*{
			canvas,
			antialias: true
		}*/);

		//document.getElementById('bg').append(renderer.domElement);

		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild(renderer.domElement);

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		ambientLight.castShadow = true;
		scene.add(ambientLight);

		const spotlight = new THREE.SpotLight(0xffffff, 1);
		spotlight.castShadow = true;
		spotlight.position.set(0, 64, 32);
		scene.add(spotlight);

		const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
		const boxMaterial = new THREE.MeshNormalMaterial();
		const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
		scene.add(boxMesh);

		const animate = () => {
			boxMesh.rotation.x += 0.01;
			boxMesh.rotation.y += 0.01;
			renderer.render(scene, camera);
			window.requestAnimationFrame(animate);
		};
		animate();
	}, []);

	return (
		<div className="App">
	
			<canvas id='bg'></canvas>

		</div>
	);
}

export default App;
