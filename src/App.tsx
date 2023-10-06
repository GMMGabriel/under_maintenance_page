import { Gear } from '@phosphor-icons/react'

import './styles.scss'

function App() {
  const duration = '3s'

  return (
    <main>
      <div className="box">
        <h1>Em manutenção</h1>

        <div className="gears animate-type-2">
          <div className="g gear-1">
            <Gear size={68} weight='duotone' className='gear'>
              <animateTransform
                attributeName='transform'
                type='rotate'
                dur={duration}
                from='0 0 0'
                to='360 0 0'
                repeatCount='indefinite'
              />
            </Gear>
          </div>
          <div className="g gear-2">
            <Gear size={68} weight='duotone' className='gear'>
              <animateTransform
                attributeName='transform'
                type='rotate'
                dur={duration}
                from='0 0 0'
                to='-360 0 0'
                repeatCount='indefinite'
              />
            </Gear>
          </div>
          <div className="g gear-3">
            <Gear size={68} weight='duotone' className='gear'>
              <animateTransform
                attributeName='transform'
                type='rotate'
                dur={duration}
                from='0 0 0'
                to='360 0 0'
                repeatCount='indefinite'
              />
            </Gear>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
