import { memo, Suspense, useMemo } from 'react'
import { getUserAuthData } from 'entities/User'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import PageLoader from 'widgets/PageLoader/PageLoader'

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(router => {
      if (router.authOnly && !isAuth) {
        return false
      }
      return true
    })
  }, [isAuth])

  return (
      <Routes>
          {routes.map(({ path, element }) => (
              <Route
              key={path}
              path={path}
              element={(
                  <Suspense fallback={<PageLoader />}>
                      <div className='page-wrapper'>
                          {element}
                      </div>
                  </Suspense>
              )}
          />
          ))}
      </Routes>
  )
}

export default memo(AppRouter)
