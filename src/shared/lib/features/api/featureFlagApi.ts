/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { rtkApi } from '@/shared/api/rtkApi';
import { FeatureFlag } from '@/shared/types/featureFlag';

interface updateFeatureFlagsOptions {
  userId: string;
  features: Partial<FeatureFlag>;
}

const featureFlagsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateFeatureFlags: build.mutation<void, updateFeatureFlagsOptions>({
            query: ({ userId, features }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    features
                }
            }),
        }),
    }),
});

export const updateFeatureFlagMutation = featureFlagsApi.endpoints.updateFeatureFlags.initiate;
