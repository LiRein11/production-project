import { EditableProfileCard } from 'features/editableProfileCard';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { Page } from 'widgets/Page/ui/Page/Page';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

const ProfilePage = memo(() => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    if (!id) {
        return <Text text={t('Profile not found')} />;
    }

    return (
        <Page>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
});

export default ProfilePage;
