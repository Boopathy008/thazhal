/**
 * TerraDusk — Interactive 3-D Earth globe with dusk/dawn lighting.
 * Inspired by originkit.dev/components/terra-dusk
 * Built with @react-three/fiber + @react-three/drei + Three.js
 */

import { Suspense, useRef, useEffect, Component, type ReactNode } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

/* ── Texture CDN URLs ────────────────────────────────────────────── */
const EARTH_DAY   = 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
const EARTH_BUMP  = 'https://unpkg.com/three-globe/example/img/earth-topology.png'
const EARTH_WATER = 'https://unpkg.com/three-globe/example/img/earth-water.png'
const CLOUDS      = 'https://unpkg.com/three-globe/example/img/earth-clouds.png'

/* ── Atmosphere GLSL shaders ─────────────────────────────────────── */
const atmosphereVertex = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const atmosphereFragment = `
  varying vec3 vNormal;
  void main() {
    float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.5);
    gl_FragColor = vec4(0.35, 0.75, 0.45, 1.0) * intensity;
  }
`

/* ── Sun light that follows the cursor ───────────────────────────── */
function SunLight() {
  const ref   = useRef<THREE.DirectionalLight>(null)
  const { gl } = useThree()

  useEffect(() => {
    const canvas = gl.domElement
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = canvas.getBoundingClientRect()
      const nx = ((e.clientX - rect.left) / rect.width)  * 2 - 1
      const ny = -((e.clientY - rect.top)  / rect.height) * 2 + 1
      ref.current.position.set(nx * 7, ny * 5, 5)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [gl])

  return (
    <directionalLight
      ref={ref}
      color="#fff8e7"
      intensity={2.4}
      position={[4, 2, 5]}
    />
  )
}

/* ── Earth mesh (needs Suspense parent for useLoader) ────────────── */
function Earth() {
  const earthRef  = useRef<THREE.Mesh>(null)
  const cloudsRef = useRef<THREE.Mesh>(null)

  const [dayMap, bumpMap, waterMap, cloudsMap] = useLoader(THREE.TextureLoader, [
    EARTH_DAY, EARTH_BUMP, EARTH_WATER, CLOUDS,
  ])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (earthRef.current)  earthRef.current.rotation.y  = t * 0.055
    if (cloudsRef.current) cloudsRef.current.rotation.y = t * 0.068
  })

  return (
    <group>
      {/* Atmosphere glow */}
      <mesh scale={1.13}>
        <sphereGeometry args={[1, 32, 32]} />
        <shaderMaterial
          vertexShader={atmosphereVertex}
          fragmentShader={atmosphereFragment}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent
        />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef} scale={1.017}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={0.32}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Earth surface */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={dayMap}
          bumpMap={bumpMap}
          bumpScale={0.035}
          roughnessMap={waterMap}
          metalness={0.07}
          roughness={0.85}
        />
      </mesh>
    </group>
  )
}

/* ── Scene — everything inside <Canvas> ──────────────────────────── */
function Scene() {
  return (
    <>
      <Stars radius={180} depth={55} count={4500} factor={4} saturation={0} fade speed={0.6} />
      <ambientLight intensity={0.08} />
      <SunLight />
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={false}
        minPolarAngle={Math.PI * 0.2}
        maxPolarAngle={Math.PI * 0.8}
        enableDamping
        dampingFactor={0.07}
      />
    </>
  )
}

/* ── Error boundary — keeps a globe crash from killing the whole app */
interface EBState { error: boolean }
class GlobeErrorBoundary extends Component<{ children: ReactNode }, EBState> {
  state: EBState = { error: false }
  static getDerivedStateFromError() { return { error: true } }
  render() {
    if (this.state.error) return null   // silently hide globe on error
    return this.props.children
  }
}

/* ── Public export ───────────────────────────────────────────────── */
export default function TerraDusk({ className = '' }: { className?: string }) {
  return (
    <GlobeErrorBoundary>
      <Canvas
        className={className}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 2.7], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </GlobeErrorBoundary>
  )
}
