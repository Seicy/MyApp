import Pos from '../assets/Pos.png'

export default function DeviceMockup() {
  return (
    <div className="flex h-[300px] w-full items-center justify-center sm:h-[360px] md:h-[440px] lg:h-[520px]">
      <div className="w-[420px]">
        <img
          src={Pos}
          alt="POS Mockup"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  )
}