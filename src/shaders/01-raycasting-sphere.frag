struct Ray{
    vec3 o;
    vec3 d;
};

bool intersects_sphere(Ray ray, float radius){
    float A = dot(ray.d, ray.d);
    float B = 2.0*dot(ray.d, ray.o);
    float C = dot(ray.o, ray.o) - radius;
    return B*B - 4.*A*C < 0.;
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    st = 2.*(st - 0.5);
    
    vec3 camera_origin = vec3(0., 0., -10.);
    vec3 view_direction = normalize(vec3(0., 0., 1.));
    float image_plane_distance = 1.0;
    vec3 ray_direction = normalize(
        (view_direction*image_plane_distance + vec3(st.x, st.y, 0.)) - camera_origin);
    
    Ray ray = Ray(camera_origin, ray_direction);
    
    vec3 color = intersects_sphere(ray, 0.1) ?  vec3(0.) : vec3(1.);

    gl_FragColor = vec4(color,1.0);
}
