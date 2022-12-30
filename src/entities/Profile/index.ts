import { Profile, ProfileSchema } from './model/types/profile'
import { profileAction, profileReducer } from './model/slice/profileSlice'
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'

export { Profile, ProfileSchema }
export { profileAction, profileReducer }
export { fetchProfileData }
