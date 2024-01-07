import {
  CameraControls,
  Environment,
  Float,
  MeshReflectorMaterial,
  RenderTexture,
  Text,
  useFont,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { Color } from "three";
import { degToRad, lerp } from "three/src/math/MathUtils";
import { Camping } from "./Camping";
import { currentPageAtom } from "./UI";

const bloomColor = new Color("#7b4ad4");
bloomColor.multiplyScalar(1.5);

export const Experience = () => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraStore = useRef();
  const textMaterial = useRef();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  useFrame((_, delta) => {
    textMaterial.current.opacity = lerp(
      textMaterial.current.opacity,
      currentPage === "home" || currentPage === "intro" ? 1 : 0,
      delta * 1.5
    );
  });

  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1.6;
    setTimeout(() => {
      setCurrentPage("home");
    }, 1200);
    fitCamera();
  };

  const fitCamera = async () => {
    if (currentPage === "store") {
      controls.current.smoothTime = 1.5;
      controls.current.fitToBox(meshFitCameraStore.current, true);
    } else {
      controls.current.smoothTime = 1.6;
      controls.current.fitToBox(meshFitCameraHome.current, true);
    }
  };

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentPage]);

  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={meshFitCameraHome} position-z={1.5} visible={false}>
        <boxGeometry args={[7.4, 2.1, 2]} />
        <meshBasicMaterial color="orange" transparent opacity={0.5} />
      </mesh>

      <Text
        font={"fonts/RubikGlitch-Regular.ttf"}
        position-x={-.6}
        position-y={-0.5}
        position-z={1}
        lineHeight={0.8}
        textAlign="center"
        rotation-y={degToRad(28)}
        anchorY={"bottom"}
      >
        KJ CARTER'S{"\n"}PORTFOLIO
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
          ref={textMaterial}
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#c9c7c7"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={4}>
              <Camping
                scale={10}
                rotation-y={-degToRad(180)}
                rotation-x={degToRad(50)}
                position-y={-0.5}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
      </Text>
      <Text
        font={"fonts/Tektur-VariableFont_wdth,wght.ttf"}
        scale={.19}
        position-x={.8}
        position-y={1.85}
        position-z={.08}
        lineHeight={-0.4}
        textAlign="center"
        rotation-y={degToRad(1)}
        anchorY={"bottom"}
      >
        
        

        EXPERIENCE
        
        
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
         
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#c9c7c7"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={4}>
              <Camping
                scale={0}
                rotation-y={-degToRad(180)}
                rotation-x={degToRad(50)}
                position-y={-0.5}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
        
      </Text>
      <Text
        font={"fonts/Tektur-VariableFont_wdth,wght.ttf"}
        scale={.07}
        position-x={.8}
        position-y={1.6}
        position-z={.10}
        lineHeight={-0.4}
        textAlign="center"
        rotation-y={degToRad(1)}
        anchorY={"bottom"}
      >
  Using SEO principles and maintable code to deliver the best experience for users and my employer  {"\n"} {"\n"}
                                          website for a growing publishing company based out of Utah{"\n"} {"\n"} 
      Created an engaging and responsive ecommerce{"\n"}{"\n"}
      
      {"\n"}
      
        
        
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
         
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#c9c7c7"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={4}>
              <Camping
                scale={0}
                rotation-y={-degToRad(180)}
                rotation-x={degToRad(50)}
                position-y={-0.5}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
        
      </Text>
      <Text
        font={"fonts/Tektur-VariableFont_wdth,wght.ttf"}
        scale={.09}
        position-x={.8}
        position-y={1.7}
        position-z={.10}
        lineHeight={-0.4}
        textAlign="center"
        rotation-y={degToRad(1)}
        anchorY={"bottom"}
      >
      Bjork Print as Front-End Developer | Sep 22 - current{"\n"}{"\n"}
      {"\n"}
      
        
        
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
         
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#c9c7c7"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={4}>
              <Camping
                scale={0}
                rotation-y={-degToRad(180)}
                rotation-x={degToRad(50)}
                position-y={-0.5}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
        
      </Text>
      <Text
        font={"fonts/Tektur-VariableFont_wdth,wght.ttf"}
        scale={.07}
        position-x={.9}
        position-y={1.25}
        position-z={.10}
        lineHeight={-0.4}
        textAlign="center"
        rotation-y={degToRad(1)}
        anchorY={"bottom"}
      >
  Used adobe software to create personal designs for each client  {"\n"} {"\n"}
                                          Collabrated with clients and marketing teams to bring the best results{"\n"} {"\n"} 
      Worked with a wide variety of companies and people{"\n"}{"\n"}
      
      {"\n"}
      
        
        
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
         
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#c9c7c7"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={4}>
              <Camping
                scale={0}
                rotation-y={-degToRad(180)}
                rotation-x={degToRad(50)}
                position-y={-0.5}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
        
      </Text>
      <Text
        font={"fonts/Tektur-VariableFont_wdth,wght.ttf"}
        scale={.1}
        position-x={.8}
        position-y={1.3}
        position-z={.10}
        lineHeight={-0.4}
        textAlign="center"
        rotation-y={degToRad(1)}
        anchorY={"bottom"}
      >
        

      Freelance as Full-Stack Developer | Three years {"\n"}
     
        
        
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
         
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#c9c7c7"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={4}>
              <Camping
                scale={0}
                rotation-y={-degToRad(180)}
                rotation-x={degToRad(50)}
                position-y={-0.5}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
        
      </Text>
      <Text
        font={"fonts/Tektur-VariableFont_wdth,wght.ttf"}
        scale={.07}
        position-x={.9}
        position-y={.54}
        position-z={.10}
        lineHeight={-0.4}
        textAlign="center"
        rotation-y={degToRad(1)}
        anchorY={"bottom"}
      >
        we raised over $35,000 for their facility{"\n"}{"\n"}
  We gave 35% of money made to the local womens crisis center {"\n"} {"\n"}
                            shirt designs to sale. I created a website and did marketing at school half-time shows{"\n"} {"\n"} 
      While in attending high school I took a graphic design class and began making .{"\n"}{"\n"}
      
      {"\n"}
      
        
        
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
         
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#c9c7c7"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={4}>
              <Camping
                scale={0}
                rotation-y={-degToRad(180)}
                rotation-x={degToRad(50)}
                position-y={-0.5}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
        
      </Text>

      <Text
        font={"fonts/Tektur-VariableFont_wdth,wght.ttf"}
        scale={.1}
        position-x={.8}
        position-y={.98}
        position-z={.10}
        lineHeight={-0.4}
        textAlign="center"
        rotation-y={degToRad(1)}
        anchorY={"bottom"}
      >
        
        {"\n"}{"\n"}

      YHA as Shift Lead | Two Years
      {"\n"}
      {"\n"}
        
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
         
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#c9c7c7"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={4}>
              <Camping
                scale={0}
                rotation-y={-degToRad(180)}
                rotation-x={degToRad(50)}
                position-y={-0.5}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
        
      </Text>

      <Text
        font={"fonts/Tektur-VariableFont_wdth,wght.ttf"}
        scale={.07}
        position-x={.9}
        position-y={.9}
        position-z={.10}
        lineHeight={-0.4}
        textAlign="center"
        rotation-y={degToRad(1)}
        anchorY={"bottom"}
      >
  Helped clients through emotianal and behavioural situtations  {"\n"} {"\n"}
                                          Filed written reports that the state reqiured on a daily basis{"\n"} {"\n"} 
      Manged up to fifteen clients and six staff.{"\n"}{"\n"}
      
      {"\n"}
      
        
        
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
         
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#c9c7c7"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={4}>
              <Camping
                scale={0}
                rotation-y={-degToRad(180)}
                rotation-x={degToRad(50)}
                position-y={-0.5}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
        
      </Text>

      <Text
        font={"fonts/Tektur-VariableFont_wdth,wght.ttf"}
        scale={.1}
        position-x={.8}
        position-y={.62}
        position-z={.10}
        lineHeight={-0.4}
        textAlign="center"
        rotation-y={degToRad(1)}
        anchorY={"bottom"}
      >
        
        {"\n"}{"\n"}

      Clothing Brand Owner | One Year
      {"\n"}
      {"\n"}
        
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
         
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#c9c7c7"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={4}>
              <Camping
                scale={0}
                rotation-y={-degToRad(180)}
                rotation-x={degToRad(50)}
                position-y={-0.5}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
        
      </Text>
      
      <group rotation-y={degToRad(160)} position-x={2.65} position-y={-.35}>
        <Camping scale={4} html />
        <mesh ref={meshFitCameraStore} visible={true}>
          <boxGeometry args={[-1, -5.5, -.12]} />
          <meshBasicMaterial color="red" transparent opacity={0.5} />
        </mesh>
      </group>
      <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={10}
          roughness={1}
          depthScale={1}
          opacity={0.5}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#1f1e1e"
          metalness={0.5}
        />
      </mesh>
      <Environment preset="sunset" />
    </>
  );
};

useFont.preload("fonts/RubikGlitch-Regular.ttf");
