const principalFeatures = [
  'Vite',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'clsx'
]

const devFeatures = ['ESLint', 'Prettier', 'Husky', 'lint-staged']

const Item = ({ children }: { children: React.ReactNode }) => (
  <p className='mb-2 flex items-center text-gray-600'>
    <span className='mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gray-400 text-white'>
      <svg
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2.5'
        className='h-3 w-3'
        viewBox='0 0 24 24'
      >
        <path d='M20 6L9 17l-5-5' />
      </svg>
    </span>
    {children}
  </p>
)

export const App = () => (
  <section className='body-font overflow-hidden text-gray-600'>
    <div className='mx-auto max-w-4xl px-5 py-24'>
      <div className='mb-16 flex w-full flex-col text-center'>
        <h1 className='title-font mb-2 bg-gradient-to-r from-cyan-600 to-purple-500 bg-clip-text text-4xl font-medium text-transparent sm:text-4xl'>
          React Template
        </h1>
        <p className='mx-auto text-base leading-relaxed text-gray-500 lg:w-2/3'>
          This template provides a minimal setup to get React working in Vite
        </p>
      </div>

      <div className='flex flex-wrap'>
        <div className='w-full p-4 sm:w-6/12'>
          <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6 shadow-2xl'>
            <h1 className='mb-4 border-b border-gray-200 pb-4 text-3xl leading-none text-gray-700'>
              Principal Features
            </h1>
            {principalFeatures.map(feature => (
              <Item key={feature}>{feature}</Item>
            ))}
          </div>
        </div>

        <div className='w-full p-4 sm:w-6/12'>
          <div className='relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-300 p-6 shadow-2xl'>
            <h1 className='mb-4 border-b border-gray-200 pb-4 text-3xl leading-none text-gray-700'>
              <span>Additional Features</span>
            </h1>
            {devFeatures.map(feature => (
              <Item key={feature}>{feature}</Item>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)
