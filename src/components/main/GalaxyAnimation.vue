<template>
    <div ref="galaxyContainer" className="background-container"/>
</template>

<script>
import * as THREE from 'three';

export default {
    name: "GalaxyAnimation",
    mounted() {
        // Set up the scene, camera, and renderer
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
        this.camera.position.set(0, 2000, 0);
        this.camera.rotation.set(-Math.PI / 4, 0, 0);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.$refs.galaxyContainer.appendChild(this.renderer.domElement);

        // Create a galaxy with stars initially arranged in a spiral pattern
        const numStars = 20000;
        const galaxyMaterial = new THREE.PointsMaterial({
            size: 2,
            blending: THREE.AdditiveBlending,
            transparent: true
        });

        const positions = [];
        const colors = [];
        for (let i = 0; i < numStars; i++) {
            // Determine the position of the stars at random angles and directions
            const phi = Math.random() * Math.PI * 2; // Angle between 0 and 2π
            const theta = Math.random() * Math.PI; // Angle between 0 and π

            // Calculate the coordinates on the surface of the sphere
            const radius = Math.random() * 1000; // The radius is up to 1000
            const x = radius * Math.sin(theta) * Math.cos(phi);
            const y = radius * Math.cos(theta);
            const z = radius * Math.sin(theta) * Math.sin(phi);

            positions.push(x, y, z);

            // Generate a random color by mixing yellow and blue
            const mixColor = new THREE.Color(0xffff00); // Yellow
            const blueColor = new THREE.Color(0x0000ff); // Blue
            const whiteColor = new THREE.Color(0xffffff); // White
            const color = new THREE.Color();

            // Select and mix three colors randomly
            const random = Math.random();
            if (random < 1 / 3) {
                color.copy(mixColor).lerp(blueColor, Math.random());
            } else if (random < 2 / 3) {
                color.copy(blueColor).lerp(whiteColor, Math.random());
            } else {
                color.copy(whiteColor).lerp(mixColor, Math.random());
            }
            colors.push(color.r, color.g, color.b);
        }

        const galaxyGeometry = new THREE.BufferGeometry();
        galaxyGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        galaxyGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        galaxyMaterial.vertexColors = true;

        const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
        this.scene.add(galaxy);

        // Start the animation loop
        this.animate();
    },
    methods: {
        animate() {
            requestAnimationFrame(this.animate);
            const galaxyGeometry = this.scene.children[0].geometry;

            // Move stars away from the center
            const positions = galaxyGeometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                const y = positions[i + 1];
                const z = positions[i + 2];
                const distance = Math.sqrt(x * x + z * z);
                const speed = 10;
                positions[i] = x + x / distance * speed;
                positions[i + 1] = y;
                positions[i + 2] = z + z / distance * speed;
            }
            galaxyGeometry.attributes.position.needsUpdate = true;

            this.renderer.render(this.scene, this.camera);
        }
    }
}
</script>

<style scoped>
@import "@/styles/main/galaxy.scss";
</style>
