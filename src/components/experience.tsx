import { Timeline } from './ui/timeline'
import { experiences } from '@/constants/experiences'

export function Experience() {
  return (
    <div>
      <Timeline experiences={experiences}></Timeline>
    </div>
  )
}
