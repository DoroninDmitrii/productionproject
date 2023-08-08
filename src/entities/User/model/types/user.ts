import { FeatureFlag } from '@/shared/types/featureFlag';
import { UserRole } from '../const/userConst';
export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlag;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
