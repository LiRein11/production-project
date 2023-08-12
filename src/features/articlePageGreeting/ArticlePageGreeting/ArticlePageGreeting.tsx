import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation('articles');
    const { isArticlesPageWasOpened } = useJsonSettings();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const isMobile = useDevice();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const onClose = () => setIsOpen(false);

    const textContent = <Text title={t('Greeting')} text={t('ViewArticles')} />;

    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} onClose={onClose} lazy>
                {textContent}
            </Drawer>
        );
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy>
            {textContent}
        </Modal>
    );
});
