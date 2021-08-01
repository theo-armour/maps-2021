// copyright 2021 Theo Armour. MIT license.
// jshint esversion: 6
// jshint loopfunc: true
// hacked to work with RAM Stats

const FOZ = {};


FOZ.onLoadFile = function ( dataZip ) {

	FOZ.timeStart = performance.now();

	const zip = new JSZip();
	const files = [];
	let fileName;

	zip.loadAsync( dataZip )

		.then( zip => {

			//console.log( 'zip', zip );
			//zip.forEach( ( relativePath, zipEntry ) => files.push( zipEntry ) );
			//fileName = files[ 0 ].name;

			fileName = Object.keys( zip.files )[ 0 ];
			return zip.file( fileName ).async( "string" );

		} ).then( text => {

			selElement.disabled = false;

			FOZdivFileOpenZip.innerHTML = `
<p>
	bytes loaded: ${ text.length.toLocaleString() }<br>
	time elapsed ${ ( performance.now() - FOZ.timeStart ).toLocaleString() } ms<br>
	file: ${ fileName }
</p>`;

			FOZ.lines = text.split( /\r\n/ ).map( line => line.split( "|" ).map( item => item.trim() ) ).slice( 0, -1 );

			divContent.innerText = `
First 20 of ${ FOZ.lines.length.toLocaleString() } lines: \n
${ FOZ.lines.slice( 0, 20 ).join( "\n" ) }`;

		} );

};
