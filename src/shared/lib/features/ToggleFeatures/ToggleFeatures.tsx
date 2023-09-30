import { FeatureFlag } from "@/shared/types/featureFlag";
import { ReactElement } from "react";
import { getFeatureFlag } from "../setGetFeatures";

interface ToggleFeaturesProps {
  feature: keyof FeatureFlag;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { on, off, feature } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
}
