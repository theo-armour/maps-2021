
/* global scene */

const GLC = {}; // data points. Each point is displayed as a cylindrical 3D object rising perpendicularly from the surface of the globe.



GLC.init = function () {

	//scene.remove( GLC.group );
	GLC.group = new THREE.Group();
	GLC.group.name = "instances";
	THR.group.add( GLC.group );

	//GLC.group.add( GLC.getMesh( geoDataGlobalCsv ) );

	//GLC.group.add( GLC.getMesh( geoDataRegionalCsv ) );

};



GLC.getPoints = function ( data = JFC.json ) {

	let geometry = new THREE.CylinderBufferGeometry( 0.3, 0.1, 1, 12, 1, false );
	geometry.applyMatrix4( new THREE.Matrix4().makeRotationX( 0.5 * Math.PI ) );
	geometry.applyMatrix4( new THREE.Matrix4().makeScale( -1, 1, -1 ) );

	const material = new THREE.MeshStandardMaterial( { roughness: 0.1, side: 2 } );
	const mesh = new THREE.InstancedMesh( geometry, material, data.length );

	for ( let i = 0; i < data.length; i ++ ) {

		const bar = data[ i ];
		//console.log( "bar", bar );
		//let height = isNaN( Number( bar[ 0 ] ) ) ? 1000 : Number( bar[ 0 ] );
		//height = height < 1000 ? 1000 : height;
		height = 0.5 * bar[ 0 ] || 0.001; // 0.005 * Math.sqrt( height );
		//console.log( "height", height );
		width = 0.5 * bar[ 1 ];
		width = width < 0.2 ? 0.2 : width;
		//console.log( "width", width );

		const matrix = getMatrixComposed( { radius: 50, latitude: + bar[ 3 ], longitude: + bar[ 4 ],
			sclX: width, sclY: width, height: height } );
		mesh.setMatrixAt( i, matrix );
		const color = new THREE.Color( Math.random() * 0xffffff );
		mesh.setColorAt( i, bar[ 2 ] );
		mesh.instanceColor.needsUpdate = true;

	}


	//group = new THREE.Group();

	//console.log( "mesh", mesh.instanceColor  );

	return mesh;

};



function getMatrixComposed ( { radius: r = 50, latitude: lat = 0, longitude: lon = 0, sclX = 1, sclY = 1, height: sclZ = 1 } = {} ) {

	const position = latLonToXYZ( r + 0.5 * sclZ, lat, lon );
	const matrix = new THREE.Matrix4();
	const quaternion = new THREE.Quaternion().setFromRotationMatrix(
		matrix.lookAt(
			new THREE.Vector3( 0, 0, 0 ),
			position,
			new THREE.Vector3( 0, 0, 1 )
		)
	);
	const scale = new THREE.Vector3( sclX, sclY, sclZ );

	matrix.compose(
		position,
		quaternion,
		scale
	);

	return matrix;

}



function latLonToXYZ ( radius = 50, lat = 0, lon = 0 ) {

	const phi = ( ( 90 - lat ) * Math.PI ) / 180;
	const theta = ( ( 180 - lon ) * Math.PI ) / 180;
	//console.log( "lat/lon", theta, phi, index);

	const x = radius * Math.sin( phi ) * Math.cos( theta );
	const y = radius * Math.sin( phi ) * Math.sin( theta );
	const z = radius * Math.cos( phi );

	return new THREE.Vector3( - x, y, z );

}



////////// DOM utilities

// https://threejs.org/docs/#api/en/loaders/FileLoader
// set response type to JSON

function requestFile ( url, callback ) {

	const xhr = new XMLHttpRequest();
	xhr.open( "GET", url, true );
	xhr.onerror = ( xhr ) => console.log( "error:", xhr );
	//xhr.onprogress = ( xhr ) => console.log( 'bytes loaded:', xhr.loaded );
	xhr.onload = ( xhr ) => callback( xhr.target.response );
	xhr.send( null );

}

