let angle = 0;
let w = 25;
let ma;

function setup() {
  createCanvas( 400, 400, WEBGL );
  ma = atan( 1 / sqrt( 2 ) );
  maxD = dist( 0, 0, 200, 200 );

}

function draw() {
  background( 200 );
  ortho( -400, 400, 400, -400, -10, 1200 );
  // directionalLight( 103, 189, 202, 0, -1, 0 );
  // directionalLight( 243, 255, 155, -1, 0, 0 );
  // directionalLight( 68, 177, 182, 0, 0, -1 );

  rotateX( PI / 4 );
  rotateY( 3 * PI / 4 );

  // push();
  // translate( 0, 200, 0 );
  // fill( 255 );
  // sphere( 5 );
  // pop();

  for ( let z = 0; z < height; z += w ) {
    for ( let x = 0; x < width; x += w ) {
      push();
      let d = dist( x, z, 200, 200 );
      if ( z === 8 * w && x === 8 * w ) {
        d += 20;
      }
      let offset = map( d, 0, maxD, -3, 3 );
      let a = angle + offset;
      let h = map( sin( a ), -1, 1, 75, 400 );



      translate( x - width / 2, 0, z - height / 2 );
      noStroke();
      //ambientMaterial( 255 );
      normalMaterial();
      box( w, h, w );
      pop();
    }

  }
  angle -= 0.05;
}