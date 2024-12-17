import { useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Custom shader material
const BackgroundMaterial = shaderMaterial(
  {
    iTime: 0,
    iResolution: new THREE.Vector2(),
  },
  /* glsl vertex */ `
    varying vec2 vUv; 
    void main()
    {
        vUv = uv;

        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0 );
        gl_Position = projectionMatrix * mvPosition;
    }
  `,
  /* glsl frag */ `
    uniform vec3      iResolution;           // viewport resolution (in pixels)
    uniform float     iTime;                 // shader playback time (in seconds)
    varying vec2 vUv; 

    void main(){
        vec2 uv = vUv;
        vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
        gl_FragColor = vec4(col * 0.25,1.0);
    }
  `
)

function Scene() {
  const size = useThree((s) => s.size)
  const viewport = useThree((s) => s.viewport)

  const backgroundMaterial = useMemo(() => {
    return new BackgroundMaterial()
  }, [])

  useFrame((state) => {
    backgroundMaterial.uniforms.iTime.value = state.clock.elapsedTime
  })

  const scale = Math.max(viewport.width, viewport.height) / 2

  return (
    <mesh scale={[scale, scale, 1]}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={backgroundMaterial}
        iResolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
      />
    </mesh>
  )
}

export default function Background() {
  return (
    <div className="-z-1 fixed top-0 left-0 w-full h-full">
      <Canvas
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.NoToneMapping
        }}>
        <Scene />
      </Canvas>
    </div>
  )
}
