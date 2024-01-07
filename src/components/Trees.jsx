/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Trees.glb -o src/components/Trees.jsx -k -K -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Trees(props) {
  const { nodes, materials } = useGLTF('/models/Trees.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="NormalTree_1" position={[200.468, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh name="NormalTree_1_1" geometry={nodes.NormalTree_1_1.geometry} material={materials.NormalTree_Bark} />
            <mesh name="NormalTree_1_2" geometry={nodes.NormalTree_1_2.geometry} material={materials.NormalTree_Leaves} />
          </group>
          <group name="NormalTree_2" position={[205.39, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh name="NormalTree_2_1" geometry={nodes.NormalTree_2_1.geometry} material={materials.NormalTree_Bark} />
            <mesh name="NormalTree_2_2" geometry={nodes.NormalTree_2_2.geometry} material={materials.NormalTree_Leaves} />
          </group>
          <group name="NormalTree_3" position={[210.091, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh name="NormalTree_3_1" geometry={nodes.NormalTree_3_1.geometry} material={materials.NormalTree_Bark} />
            <mesh name="NormalTree_3_2" geometry={nodes.NormalTree_3_2.geometry} material={materials.NormalTree_Leaves} />
          </group>
          <group name="NormalTree_4" position={[216.945, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh name="NormalTree_4_1" geometry={nodes.NormalTree_4_1.geometry} material={materials.NormalTree_Bark} />
            <mesh name="NormalTree_4_2" geometry={nodes.NormalTree_4_2.geometry} material={materials.NormalTree_Leaves} />
          </group>
          <group name="NormalTree_5" position={[221.728, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh name="NormalTree_5_1" geometry={nodes.NormalTree_5_1.geometry} material={materials.NormalTree_Bark} />
            <mesh name="NormalTree_5_2" geometry={nodes.NormalTree_5_2.geometry} material={materials.NormalTree_Leaves} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Trees.glb')
