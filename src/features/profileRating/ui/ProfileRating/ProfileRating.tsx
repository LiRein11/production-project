import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: authData?.id ?? '',
    });

    const [rateProfileMutation] = useRateProfile();

    const handleRateProfile = useCallback(
        (starsCount: number, feedback?: string) => {
            rateProfileMutation({
                profileId,
                userId: authData?.id ?? '',
                rate: starsCount,
                feedback,
            });
        },
        [profileId, authData?.id, rateProfileMutation],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateProfile(starsCount, feedback);
        },
        [handleRateProfile],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateProfile(starsCount);
        },
        [handleRateProfile],
    );

    if (isLoading) {
        return <Skeleton height={120} width="100%" />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={classNames('', {}, [className])}
            title={t('Rate the profile')}
            feedbackTitle={t('Leave a review')}
            hasFeedback
        />
    );
});
