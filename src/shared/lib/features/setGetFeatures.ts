import { FeatureFlag } from '@/shared/types/featureFlag';

let featureFlag: FeatureFlag = {};
console.log(featureFlag, 'feg')

export function setFeatureFlags(newFeatureFlags?: FeatureFlag) {
    if (newFeatureFlags) {
        featureFlag = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlag) {
    return featureFlag?.[flag];
}
