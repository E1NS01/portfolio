import { Experience } from '@/types/componentTypes'

export function Timeline({ experiences }: { experiences: Experience[] }) {
  console.log(experiences)
  return (
    <div className='relative max-w-2xl mx-auto'>
      <div className='absolute left-1/2 w-px bg-gray-300 h-full transform -translate-x-1/2'></div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`flex items-center mb-8 w-full ${
            index % 2 === 0 ? 'flex-row-reverse' : ''
          }`}
        >
          <div className='w-1/2'></div>
          <div className='w-1/2 p-4 bg-white rounded-lg shadow-md'>
            <h2 className='text-xl font-bold'>{exp.position}</h2>
            <h3 className='text-lg text-gray-600'>{exp.company}</h3>
            <p className='text-gray-500'>{exp.date}</p>
            <p className='text-gray-700'>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
