import { EditableProfileCard } from 'features/editableProfileCard';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { Page } from 'widgets/Page/ui/Page/Page';
import { useParams } from 'react-router-dom';

const ProfilePage = memo(() => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
});

export default ProfilePage;
