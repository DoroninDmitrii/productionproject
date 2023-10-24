import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage';
import { FeatureFlag } from '@/shared/types/featureFlag';

const defaultFeatures: FeatureFlag = {
    isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new'
}

let featureFlag: FeatureFlag = {
    ...defaultFeatures,
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlag) {
    if (newFeatureFlags) {
        featureFlag = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlag) {
    return featureFlag?.[flag];
}

export function getAllFeatureFlag() {
    return featureFlag;
}
