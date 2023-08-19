import { Story } from '@storybook/react';

import { setFeatureFlags } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types/featureFlags';

export const FeaturesFlagsDecorator = (features: FeatureFlags) => (Story: Story) => {
    setFeatureFlags(features);
    return <Story />;
};
