/* eslint-disable i18next/no-literal-string */
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
              You want to write maintainable tests for your React components. As a part of this goal, you want your tests to avoid including implementation details of your components and rather focus on making your tests give you the confidence for which they are intended. As part of this, you want your testbase to be maintainable in the long run so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down.
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
