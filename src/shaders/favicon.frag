// HELPER FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// returns 1.0 if the given radius is inside a ring 
// and 0.0 otherwise using step()
float ring(float r){
    return  (
        // anything outside of this disk is set to zero
        (1. - step(0.4, r)) * 
        // anything inside of this smaller disk is set to zero
        step(0.3, r)
    );
}
// returns 1.0 if the normalized coordinate "st" 
// is in a horizontal bar from the centre,
// -1.0 if in a small region above the bar and 0.0 otherwise
float g(vec2 st){
    return  
        // add horizontal bar from (0.5, 0.45) to (0.85, 0.55)
        step(-0.85, -st.x) * step(0.5, st.x) * 
        step(-0.55, -st.y) * step(0.45, st.y) *
        // remove rectangle from (0.5, 0.55) to (1.0, 0.7) 
        // above the horizontal bar
        1.0 - (
        step(0.5, st.x) * step(-0.700, -st.y) * step(0.55, st.y)
    );
}

// MAIN FUNCTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
void main() {
    // calculate the st, or scaled coordinates in [-0.5; 0.5] 
    // of the current fragment
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    // create a classic RGB radial gradient as a background
    vec3 color = vec3(0.);
    color = vec3(st.x, st.y, 0.5);
    
    // calculate the radius of the current fragment 
    // from the centre of the image
    float r = sqrt(pow(st.y-0.5, 2.0) + pow(st.x-0.5, 2.0));
      // multiply with the "ring" value to mask out 
      // wherever "ring == 0" to black
      color *= clamp(ring(r) + g(st), 0., 1.0);

	// write the final colour to the output variable 
	// with an alpha value of 1 (fully opaque, no transparency)
    gl_FragColor = vec4(color,1.0);
}
