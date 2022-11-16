import './styles/index.scss'

import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useState } from 'react'

const App = () => {
  const { theme } = useTheme()

  const [isOpen, setIsOpen] = useState(false)

  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback=''>
              <Navbar />
              <button onClick={() => setIsOpen(true)}>toggle</button>
              <Modal isOpen={isOpen} isClose={() => setIsOpen(false)}>
              ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.
              </Modal>
              <div className='content-page'>
                  <Sidebar/>
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  )
}

export default App
