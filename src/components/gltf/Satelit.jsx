/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 Satelit.glb Satelit
*/
import { useFrame } from "@react-three/fiber"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Satelit(props) {
  const { nodes, materials } = useGLTF('/Sat.glb')
  const satelit = useRef()
  useFrame(() => {
    if (!satelit.current) {
        return;
    }
    satelit.current.rotation.y += 0.02;
    // satelit.current.rotation.x += 0.001;
    // baza.current.rotation.z += 0.009;
    // aripi.current.rotation.z += 0.009;

})
  return (
    <group scale={1.5} rotation={[-0.3,0,-0.1]} ref={satelit}{...props} dispose={null} >
      <group position={[0, -0.69, 0]} rotation={[-Math.PI / 2, 0, 0.1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Artemis_1.geometry} material={materials.Artemis_Material_002} />
          <mesh geometry={nodes.Artemis_2.geometry} material={materials.Artemis_Material_003} />
          <mesh geometry={nodes.Artemis_3.geometry} material={materials.Artemis_Material_004} />
          <mesh geometry={nodes.Artemis_4.geometry} material={materials.Artemis_Material_005} />
          <mesh geometry={nodes.Artemis_5.geometry} material={materials.Artemis_Material_006} />
          <mesh geometry={nodes.Artemis_6.geometry} material={materials.Artemis_Material_007} />
          <mesh geometry={nodes.Artemis_7.geometry} material={materials.Artemis_Material_008} />
          <mesh geometry={nodes.Artemis_8.geometry} material={materials.Artemis_Material_009} />
          <mesh geometry={nodes.Artemis_9.geometry} material={materials.Artemis_Material_010} />
          <mesh geometry={nodes.Artemis_10.geometry} material={materials.Artemis_Material_011} />
          <mesh geometry={nodes.Artemis_11.geometry} material={materials.Artemis_Material_016} />
          <mesh geometry={nodes.Artemis_12.geometry} material={materials.Material__118} />
          <mesh geometry={nodes.Artemis_13.geometry} material={materials._________003} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Sat.glb')
