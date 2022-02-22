import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Model = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/final3dv3.gltf')
  
  
  useFrame(()=> {
    group.current.rotation.y += 0.005
  })
  
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.deskproject.geometry}
        material={materials['palette']}
        // rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}
      />
    </group>
  )
}

useGLTF.preload('/final3d.gltf')

export default Model