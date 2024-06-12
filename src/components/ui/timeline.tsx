import { Experience } from '@/types/componentTypes'
import { Button } from './button'

export function Timeline({ experiences }: { experiences: Experience[] }) {
  console.log(experiences)
  return (
    <div className='relative max-w-[60%] mx-auto'>
      <div className='absolute left-1/2 w-1 bg-gray-300 h-full transform -translate-x-1/2'></div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`flex items-center mb-8 w-full ${
            index % 2 === 0 ? 'flex-row-reverse pr-96' : 'pl-96'
          }`}
        >
          <div className='w-1/2'></div>
          <div className='w-1/2 p-4 rounded-lg shadow-md bg-sky-200 hover:bg-sky-400'>
            <h2 className='text-xl font-bold'>{exp.position}</h2>
            <h3 className='text-lg text-gray-600'>{exp.company}</h3>
            <p className='text-gray-500'>{exp.date}</p>
            <p className='text-gray-700'>{exp.description}</p>
            {exp.url ? (
              <div className='flex justify-center pt-5'>
                <Button className='w-1/2'>
                  <a href={exp.url} target='_blank'>
                    Visit
                  </a>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  )
}
