import { memo, useState } from 'react';
import StarIcon from '@/shared/assets/icons/star-20-20.svg';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
    className?: string;
    size?: number;
    selectedStars?: number;
    onSelect?: (starsCount: number) => void;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, size = 30, selectedStars = 0, onSelect } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    const mods: Mods = {
        [cls.selected]: isSelected,
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars?.map((starNumber) => (
                <Icon className={classNames(cls.starIcon, mods, [currentStarsCount >= starNumber ? cls.hovered : cls.normal])} Svg={StarIcon} key={starNumber} width={size} height={size} onMouseEnter={onHover(starNumber)} onMouseLeave={onLeave} onClick={onClick(starNumber)} />
            ))}
        </div>
    );
});
