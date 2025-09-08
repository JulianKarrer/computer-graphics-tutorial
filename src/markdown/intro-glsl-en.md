
## An Introduction to GLSL

We will be using the OpenGL shading language (GLSL) to generate images by writing fragment shaders, which are a programmable part of the OpenGL rasterization rendering pipeline implemented by your graphics processor. All that matters to us in this context is that we get to write a function `void main` where:
-  we have access to a normalized 2D position on the image plane in $[0;X]\times [0; Y]$ for an $X\times Y$ pixel image as input through the special variable `gl_FragCoord : vec2`
- we can write a 4D or RGBA colour in $[0;1]^4$ to a special output variable `gl_FragColor : vec4` 
- the function is executed once per fragment, which in our case corresponds to once per pixel (more on that in the lecture on rasterization)
- we can access additional variables passed into the shader from regular, CPU-accessible memory, which are called **uniforms** and are used for small amounts of data or parameters, whereas textures and 3D models require larger buffers. Common examples of uniforms that are provided in the editors in this tutorial are:
    - a uniform `u_resolution : vec2` that gives the number of pixels of the $X\times Y$ image in each direction. This can be used to calculate a normalized position of a fragment in the image, i.e. in $[0;1]^2$
    - a uniform `u_time : float` which holds the number of seconds since the shader was loaded and can be used for animations
    - a uniform `u_mouse : vec2` which gives the coordinates of the mouse pointer relative to the canvas, which can be used to create interactive shaders
