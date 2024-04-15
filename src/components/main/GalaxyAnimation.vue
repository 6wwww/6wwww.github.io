<template>
    <div ref="container" class="background-container"/>
</template>

<script>
import * as THREE from 'three';

export default {
    name: "GalaxyAnimation",
    mounted() {
        // todo create function and separate
        // todo upgrade galaxy.scss
        /** Set up Three.js scene */
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.container.appendChild(renderer.domElement);

        /** Create galaxy.scss */
        const galaxyGeometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        const color = new THREE.Color();

        const numStars = 1000;
        for (let i = 0; i < numStars; i++) {
            const x = Math.random() * 1000 - 500;
            const y = Math.random() * 1000 - 500;
            const z = Math.random() * 1000 - 500;
            positions.push(x, y, z);

            /** Add random color for each star */
            color.setRGB(Math.random(), Math.random(), Math.random());
            colors.push(color.r, color.g, color.b);
        }

        galaxyGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        galaxyGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const galaxyMaterial = new THREE.PointsMaterial({
            vertexColors: true,
            size: 1,
            transparent: true,
            blending: THREE.AdditiveBlending,
        });

        const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
        scene.add(galaxy);

        /** Position camera */
        camera.position.z = 100;

        /** Animate the galaxy.scss */
        const animate = () => {
            requestAnimationFrame(animate);
            galaxy.rotation.x += 0.001;
            galaxy.rotation.y += 0.001;
            renderer.render(scene, camera);
        };
        animate();
    }
}
</script>

<style scoped>
@import "@/styles/main/galaxy.scss";
</style>