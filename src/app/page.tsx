import { Inter } from '@next/font/google'
import ModelViewer from '@/components/client/ModelViewer'

export default function Home() {
  return (
    <main>
      <ModelViewer modelPath={"images/AntiqueCamera.glb"} scale={2} position={[0,-10,0]}/>
    </main>
  )
}
