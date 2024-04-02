import React from 'react';
import Hero from './Hero';
import Model from '../component/Model';
import FootFormAni from '../FootFormAni.json';
import { Canvas, useFrame } from '@react-three/fiber';
import { Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { getProject, val } from '@theatre/core';
import { SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';

const Experience = () => {

    const sheet = getProject('product Animation', { state: FootFormAni }).sheet('Scene');

    return (
        <>
            <Canvas shadows gl={{ physicallyCorrectLights: true, preserveDrawingBuffer: true }}>
                <ScrollControls pages={3}>
                    <SheetProvider sheet={sheet}>
                        <Scene />
                    </SheetProvider>
                    <Scroll html>
                        <Hero />
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </>
    );
}

export default Experience;




const Scene = () => {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    useFrame(() => {
        const sequenceLength = val(sheet.sequence.pointer.length);
        sheet.sequence.position = scroll.offset * sequenceLength;
    });

    return (
        <>
            <PerspectiveCamera theatreKey='Camera' makeDefault position={[1, 1, 1]} fov={90} near={0.1} far={70} />
            <color attach='background' args={['#fff']} />
            <ambientLight intensity={2} />
            <directionalLight position={[1, 1, 1]} intensity={3} />
            <pointLight intensity={4} position={[2, 1, 1]} distance={40} />
            <spotLight intensity={4} position={[-3, -3, -1]} distance={100} />
            <spotLight intensity={4} position={[-3.7, -3, 1]} distance={100} />
            <Model />
        </>
    );
}
