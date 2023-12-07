import Rive from '@rive-app/react-canvas'
import { useRive } from '@rive-app/react-canvas'

export function Skate() {
  const skateRiv = '/images/frog_flies3.riv'

  const { rive, RiveComponent } = useRive({
    src: skateRiv,
    stateMachines: 'State Machine 1',
    autoplay: true,
  })
  //]

  return (
    <div
      className="
    flex h-full w-full items-start justify-start"
    >
      <RiveComponent onMouseEnter={() => rive && rive.play()} />
    </div>
  )
}
