import { setFeatureFlags } from '@/shared/lib/features';
import { FeatureFlag } from '@/shared/types/featureFlag';
import { Story } from '@storybook/react';

export const FeaturesFlagDecorator = (features: FeatureFlag) => (StoryComponent: Story) => {
    setFeatureFlags(features)
    return (
        <StoryComponent />
    )
};
