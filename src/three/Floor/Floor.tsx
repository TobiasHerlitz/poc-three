import { RepeatWrapping } from "three";
import woodTexture from '../../assets/wood_floor.jpg'
import { FLOOR_HEIGHT } from "../../consts/modeling";
import { useTexture } from "@react-three/drei";

interface FloorProps {
  width: number;
  depth: number;
}

export const Floor = ({ width, depth }: FloorProps) => {
  const colorMap = useTexture(woodTexture);

  colorMap.wrapS = RepeatWrapping;
  colorMap.wrapT = RepeatWrapping;
  colorMap.repeat.set(width, depth);

  return (
    <mesh>
      <meshStandardMaterial map={colorMap} />
      <boxGeometry args={[width, FLOOR_HEIGHT, depth]} />
    </mesh>
  )
}
