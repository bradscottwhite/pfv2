import { useEffect } from 'react';
import './App.css';
//import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const App = () => {
	useEffect(() => {
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		camera.position.setZ(30);//.z = 96;

		//const canvas = document.querySelector('#bg');
		const renderer = new THREE.WebGLRenderer(/*{
			canvas,
			//antialias: true
		}*/);

		//document.getElementById('bg').append(renderer.domElement);

		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		
		document.body.appendChild(renderer.domElement);
		//document.body.insertBefore(renderer.domElement, document.body.firstChild);

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		ambientLight.castShadow = true;
		scene.add(ambientLight);

		const spotlight = new THREE.SpotLight(0xffffff, 1);
		spotlight.castShadow = true;
		spotlight.position.set(0, 64, 32);
		scene.add(spotlight);

		const gridHelper = new THREE.GridHelper(200, 200);
		scene.add(gridHelper);

		const controls = new OrbitControls(camera, renderer.domElement);

		const texture = new THREE.TextureLoader().load('brad-avatar.png');
		//scene.background = texture;

		const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
		const boxMaterial = new THREE//.MeshStandardMaterial({ map: texture });
		.MeshStandardMaterial({ color: 0xFF0000 });//.MeshNormalMaterial();
		const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
		scene.add(boxMesh);

		const moveCamera = () => {
			const t = document.body.getBoundingClientRect().top;

			boxMesh.rotation.x += 0.05;
			boxMesh.rotation.y += 0.075;
			boxMesh.rotation.z += 0.05;

			camera.position.z = t * -0.01;
			camera.position.x = t * -0.0002;
			camera.position.y = t * -0.0002;
		};
		document.body.onscroll = moveCamera;

		const animate = () => {
			boxMesh.rotation.x += 0.01;
			boxMesh.rotation.y += 0.01;
			boxMesh.rotation.z += 0.01;
			
			controls.update();

			renderer.render(scene, camera);
			requestAnimationFrame(animate);
		};
		animate();
	}, []);

	return (
		<div className='App'>
	
			<h1 className='text-red-500 text-5xl'>Bradley White</h1>

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
			</p>

		</div>
	);
}

export default App;
