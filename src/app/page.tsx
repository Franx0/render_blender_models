import ModelViewer from '@/components/client/ModelViewer'

export default function Home() {
  return (
    <main className="flex flex-wrap grow">
      <div className="w-2/6 h-80">
        <ModelViewer modelPath={"images/AntiqueCamera.glb"} scale={1} position={[0,-5,0]}/>
      </div>

      <div className="w-2/6 h-80">
        <ModelViewer modelPath={"images/2CylinderEngine.glb"} scale={0.005} position={[0,0,0]}/>
      </div>

      <div className="w-2/6 h-80">
        <ModelViewer modelPath={"images/BoxAnimated.glb"} scale={3} position={[0,0,0]}/>
      </div>

      <div className="w-2/6 h-80">
        <ModelViewer modelPath={"images/MosquitoInAmber.glb"} scale={25} position={[0,0,0]}/>
      </div>

      <div className="w-2/6 h-80">
        <ModelViewer modelPath={"images/Avocado.glb"} scale={55} position={[0,0,0]}/>
      </div>

      <div className="w-2/6 h-80">
        <ModelViewer modelPath={"images/IridescenceLamp.glb"} scale={10} position={[0,-2.5,0]}/>
      </div>
    </main>
  )
}
