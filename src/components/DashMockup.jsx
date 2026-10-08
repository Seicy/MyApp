import Pos from '../assets/Pos.png'

export default function DashMockup() {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden">
      <img
        src={Pos}
        alt="POS Mockup"
        className="h-auto w-full object-contain"
      />
    </div>
  )
}