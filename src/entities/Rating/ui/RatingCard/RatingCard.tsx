import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, EButtonSize, EButtonTheme } from '@/shared/ui/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    feedbackTitle?: string;
    title?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { className, feedbackTitle, title, onCancel, onAccept, hasFeedback, rate = 0 } = props;
    const { t } = useTranslation();

    const [feedback, setFeedback] = useState('');
    const [starsCount, setStarsCount] = useState(rate);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const cancelHandle = () => {
        onCancel?.(starsCount);
        setIsOpenModal(false);
    };

    const acceptHandle = () => {
        onAccept?.(starsCount, feedback);
        setIsOpenModal(false);
    };

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsOpenModal(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept, setStarsCount],
    );

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input value={feedback} onChange={setFeedback} placeholder={t('Your feedback')} />
        </>
    );

    const isMobile = useDevice();

    return (
        <Card className={classNames('', {}, [className])} max>
            <VStack align="center" gap="8">
                <Text title={starsCount ? t('Thank you for rating') : title} />
                <StarRating selectedStars={rate} size={40} onSelect={onSelectStars} />
            </VStack>
            {isMobile ? (
                <Drawer isOpen={isOpenModal} onClose={cancelHandle} lazy>
                    <VStack gap="32">
                        {modalContent}
                        <Button onClick={cancelHandle} size={EButtonSize.L} fullWidth>
                            {t('Send')}
                        </Button>
                    </VStack>
                </Drawer>
            ) : (
                <Modal isOpen={isOpenModal} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button onClick={cancelHandle} theme={EButtonTheme.OUTLINE_RED}>
                                {t('Close')}
                            </Button>
                            <Button onClick={acceptHandle}>{t('Send')}</Button>
                        </HStack>
                    </VStack>
                </Modal>
            )}
        </Card>
    );
});
