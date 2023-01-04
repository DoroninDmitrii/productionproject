import { Profile, ProfileSchema } from './model/types/profile'
import { profileAction, profileReducer } from './model/slice/profileSlice'
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage'
import { getProfileData } from './model/selectors/getProfileData/getProfileData'
import { getProfileError } from './model/selectors/getProfileError/getProfileError'
import { getProfileisLoading } from './model/selectors/getProfileisLoading/getProfileisLoading'
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm'

export { Profile, ProfileSchema }
export { profileAction, profileReducer }
export { fetchProfileData }
export { ProfilePage }

export {
  getProfileData,
  getProfileError,
  getProfileisLoading,
  getProfileReadonly,
  getProfileForm
}
