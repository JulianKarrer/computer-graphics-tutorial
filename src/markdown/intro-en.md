
**Welcome to the Online Tutorial of the Computer Graphics key course at the University of Freiburg!**

This website provides interactive coding exercises that allow you to apply what you have learned in the lecture to start generating your very own images using the GLSL shading language for your GPU, from the comfort of your web browser. 
- You can find toggles for your preferred language (english / deutsch) and light/dark mode in the bottom right corner
- You can optionally download this site as a PWA (Progressive Web App) and use it offline
- The contents of all code editors on this site are constantly backed up into your browser's local storage and synchronized across tabs, so you don't need to worry about losing your progress unless you delete your browser data. You can try this by typing something in the editor and then reloading the tab.
- Press the reset button to revert a code editor block to the initially given code. Note that common key combinations are available:
    - `CTRL+F` to search
    - `CTRL+Z` to undo
    - `CTRL+SHIFT+Z` to redo
    - `CTRL+/` to comment or uncomment the selected line(s)
- Have fun! These exercises are entirely voluntary

## An Introduction to GLSL

We will be using the OpenGL shading language (GLSL) to generate images by writing fragment shaders, which are a programmable part of the OpenGL rendering pipeline implemented by your graphics processor. All that matters to us in this context is that we get to write a function `void main` where:
-  we have access to a normalized 2D position on the image plane $[0;1]^2$ as input through the special variable `gl_FragCoord : vec2`
- we can write a 4D or RGBA colour in $[0;1]^4$ to a special output variable `gl_FragColor : vec4` 
- the function is executed once per fragment, which in our case corresponds to once per pixel (more on that in the lecture on rasterization)


