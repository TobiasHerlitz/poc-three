import { Canvas } from '@react-three/fiber'

import './Scene.css'
import { CameraControls } from '@react-three/drei'
import { Floor } from '../Floor';
import { BackWall } from '../BackWall';

// import { useLoader } from '@react-three/fiber'

// @ts-ignore
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';

interface SceneProps {
  showThingy: boolean;
  floorDimensions: {
    width: number,
    depth: number
  }
}

export const Scene = ({ showThingy, floorDimensions }: SceneProps) => {
  const { width, depth } = floorDimensions;

  // const bicycle = useLoader(OBJLoader, '../../../public/swapfiets.obj');

  return (
    <div className="canvasWrapper">
      <Canvas shadows camera={{ position: [1.8, 2.2, -4] }}>
        <ambientLight intensity={0.2} />
        <directionalLight />
        <color attach="background" args={['#f0f0f0']} />
        <Floor width={width} depth={depth} />
        <BackWall floorWidth={width} floorDepth={depth} />
        {/*<primitive object={bicycle} position={[1.5, 0.1, -1.0]}/>*/}
        {showThingy && (
          <mesh position={[0, 0.55, 0]}>
            <meshNormalMaterial />
            <torusKnotGeometry args={[0.3, 0.1, 128, 32]} />
          </mesh>
        )}
        <CameraControls makeDefault />
      </Canvas>
    </div>
  )
}
