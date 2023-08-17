import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import {
    Button as ButtonDeprecated,
    EButtonSize,
    EButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { VStack, HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Your feedback')}
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Your feedback')}
                    />
                </>
            }
        />
    );

    const isMobile = useDevice();

    const content = (
        <>
            <VStack align="center" gap="8">
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text title={starsCount ? t('Thank you for rating') : title} />}
                    off={<TextDeprecated title={starsCount ? t('Thank you for rating') : title} />}
                />

                <StarRating selectedStars={rate} size={40} onSelect={onSelectStars} />
            </VStack>
            {isMobile ? (
                <Drawer isOpen={isOpenModal} onClose={cancelHandle} lazy>
                    <VStack gap="32">
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <Button onClick={cancelHandle} size="l" fullWidth>
                                    {t('Send')}
                                </Button>
                            }
                            off={
                                <ButtonDeprecated
                                    onClick={cancelHandle}
                                    size={EButtonSize.L}
                                    fullWidth
                                >
                                    {t('Send')}
                                </ButtonDeprecated>
                            }
                        />
                    </VStack>
                </Drawer>
            ) : (
                <Modal isOpen={isOpenModal} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <HStack max gap="16" justify="end">
                                    <Button data-testid="RatingCard.Close" onClick={cancelHandle}>
                                        {t('Close')}
                                    </Button>
                                    <Button data-testid="RatingCard.Send" onClick={acceptHandle}>
                                        {t('Send')}
                                    </Button>
                                </HStack>
                            }
                            off={
                                <HStack max gap="16" justify="end">
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Close"
                                        onClick={cancelHandle}
                                        theme={EButtonTheme.OUTLINE_RED}
                                    >
                                        {t('Close')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Send"
                                        onClick={acceptHandle}
                                    >
                                        {t('Send')}
                                    </ButtonDeprecated>
                                </HStack>
                            }
                        />
                    </VStack>
                </Modal>
            )}
        </>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card padding="24" max border="partial" data-testid="RatingCard">
                    {content}
                </Card>
            }
            off={
                <CardDeprecated
                    data-testid="RatingCard"
                    className={classNames('', {}, [className])}
                    max
                >
                    {content}
                </CardDeprecated>
            }
        />
    );
});
