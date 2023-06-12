import { RouteProps } from 'react-router-dom'
// eslint-disable-next-line plugin/layer-plugin
import { UserRole } from '@/entities/User'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}
