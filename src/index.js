// A THREE.js env is made up of 5 things
// - Renderer (what user sees)
// - Scene (the data)
// - Camera (the perspective)
// - Meshes (objects in the 3D world)
// - Lights

const THREE = require("three");

function createRenderer() {
  let renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor("#16161d");
  let output = document.querySelector("#output");
  output.appendChild(renderer.domElement);
  return renderer;
}

function createScene() {
  return new THREE.Scene();
}

function createCamera() {
  let camera = new THREE.PerspectiveCamera(
    45, //Field of View
    window.innerWidth / window.innerHeight, //Aspect Ratio
    0.1, //Near Value
    1000 //Far Value
  );
  camera.position.set(-30, 40, 30);
  camera.lookAt(0, 0, 0);
  return camera;
}

function createAxesHelper() {
  let axesHelper = new THREE.AxesHelper(40);
  return axesHelper;
}

function createCube() {
  //Geometry-skeleton of the obj
  let geometry = new THREE.BoxGeometry(4, 4, 4);
  //Material-color/how it interect with light
  let material = new THREE.MeshLambertMaterial({
    color: "pink",
  });
  //Mesh-combine material and geometry
  let mesh = new THREE.Mesh(geometry, material);
  //Return-then can add to scene
  return mesh;
}

function createSphere() {
  let geometry = new THREE.SphereGeometry(4, 30, 30);
  let material = new THREE.MeshLambertMaterial({
    color: "red",
  });
  let mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

function createLight() {
  let light = new THREE.PointLight("white", 1);
  return light;
}

function createLightHelper(light) {
  let helper = new THREE.PointLightHelper(light);
  return helper;
}

let renderer = createRenderer();
let scene = createScene();
let camera = createCamera();
let axesHelper = createAxesHelper();
let cube = createCube();
let sphere = createSphere();
let light = createLight();
let lightHelper = createLightHelper(light);

light.position.y = 10;
light.position.x = 10;
light.position.z = 10;
//cube.position.z = -10;
sphere.position.x = 15;

scene.add(axesHelper);
scene.add(cube, sphere, light, lightHelper);

renderer.render(scene, camera);

function animate() {
  //cube.rotation.y += 0.1;
  //light.position.x += 0.1;
  renderer.render(scene, camera);
  requestAnimationFrame(animate); //Can you call animate as soon as you can
}

animate();

// Extra
// *Aframe - VR/AR for THREE.js
// *Babylon.js - Games for THREE.js
