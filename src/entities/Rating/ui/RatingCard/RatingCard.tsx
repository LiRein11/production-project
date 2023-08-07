import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button, EButtonSize, EButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

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
            <Input
                data-testid="RatingCard.Input"
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Your feedback')}
            />
        </>
    );

    const isMobile = useDevice();

    return (
        <Card data-testid="RatingCard" className={classNames('', {}, [className])} max>
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
                            <Button
                                data-testid="RatingCard.Close"
                                onClick={cancelHandle}
                                theme={EButtonTheme.OUTLINE_RED}
                            >
                                {t('Close')}
                            </Button>
                            <Button data-testid="RatingCard.Send" onClick={acceptHandle}>
                                {t('Send')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            )}
        </Card>
    );
});
