import { FeatureFlag } from '@/shared/types/featureFlag';

let featureFlag: FeatureFlag;

export function setFeatureFlags(newFeatureFlags?: FeatureFlag) {
  if (newFeatureFlags) {
      featureFlag = newFeatureFlags;
  }
}

export function getFeatureFlag(flag: keyof FeatureFlag) {
  return featureFlag[flag];
}
