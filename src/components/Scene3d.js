import Model from './Model'
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// const deg2rad = degrees => degrees * (Math.PI/180);

const Scene3d = () => {
    return (
        <Canvas orthographic camera={{zoom: 50, position: [0,35,100]}}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.3}/>
                <pointLight color={'#FFE7C7'} position={[0, 6, -4]} />
                <OrbitControls/>
                <Model/>
            </Suspense>
        </Canvas>
    )
}

export default Scene3d