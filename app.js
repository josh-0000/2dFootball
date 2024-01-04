// Importing modules (skip if you included Matter.js via CDN)
const Matter = require('matter-js');

// Create an engine
var engine = Matter.Engine.create();

// Create a renderer
var render = Matter.Render.create({
    element: document.body,
    engine: engine
});

// Create two boxes and a ground
var boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
var boxB = Matter.Bodies.rectangle(450, 50, 80, 80);
var ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// Add all of the bodies to the world
Matter.World.add(engine.world, [boxA, boxB, ground]);

// Run the engine
Matter.Engine.run(engine);

// Run the renderer
Matter.Render.run(render);
