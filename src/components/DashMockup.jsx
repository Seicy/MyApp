import Pos from '../assets/Pos.png'
import HP from '../assets/HP.png'
import IP from '../assets/IP.png'

export default function DashMockup({ device = 'pos' }) {
  const devices = {
    pos: Pos,
    ipad: IP,
    phone: HP,
  }

  const image = devices[device]

  return (
    <div className="flex w-full items-center justify-center overflow-hidden">
<img
  src={image}
  alt={`${device} Mockup`}
  className={`h-auto object-contain ${
    device === 'pos'
      ? 'w-full'
      : device === 'ipad'
        ? 'w-[600%]'
        : 'w-[40%]'
  }`}
/>
    </div>
  )
}