console.log(THREE);

function main() {
    /* Create and attach the renderer to the canvas */
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ canvas });

    /* Set up the camera */
    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    /* Create the THREE Scene */
    const scene = new THREE.Scene();

    /* Create the box geometry */
    const bW = 1;
    const bH = 1;
    const bD = 1;
    const geometry = new THREE.BoxGeometry(bW, bH, bD);

    /* Create the material for the cube. Color: Teal */
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });

    /* Setup the cube using material and geometry */
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    /* Setup a light to illuminate the cube*/

    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }

    function render(time) {
        time *= 0.001;

        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

main();
