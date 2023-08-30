import { FeatureFlag } from "@/shared/types/featureFlag";
import { getFeatureFlag } from "./setGetFeatures";

interface ToggleFeaturesOptions<T> {
  name: keyof FeatureFlag;
  on: () => T;
  off: () => T;
}

export function toogleFeatures<T>({ name, off, on }: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlag(name)) {
        return on();
    }
    return off()
}
