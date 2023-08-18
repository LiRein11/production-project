import { memo } from 'react';

import { ScrollToTopButton } from '@/features/scrollToTopButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useWindowHeight } from '@/shared/lib/hooks/useWindowHeight/useWindowHeight';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;
    const flag = useWindowHeight();
    console.log(flag);
    return (
        <VStack
            justify="center"
            align="center"
            max
            className={classNames(cls.ScrollToolbar, {}, [className])}
        >
            {flag && <ScrollToTopButton />}
        </VStack>
    );
});
