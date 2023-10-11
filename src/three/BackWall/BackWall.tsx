import { useState } from "react";

interface BackWallProps {
  floorWidth: number;
  floorDepth: number;
}

const defaultColor = "#666366"
const hoverColor = "#ACED7E"

export const BackWall = ({ floorWidth, floorDepth }: BackWallProps) => {
  const [color, setColor] = useState(defaultColor);
  const height = 2;

  return (
    <mesh
      onPointerOver={() => setColor(hoverColor)}
      onPointerLeave={() => setColor(defaultColor)}
      position={[0, height/2, floorDepth/2]}
    >
      <meshBasicMaterial color={color} />
      <boxGeometry args={[floorWidth, height, 0.05]} />
    </mesh>
  )
}
