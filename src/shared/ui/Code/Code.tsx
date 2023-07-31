import { memo, useCallback } from 'react';

import { Button, EButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';

import IconCopy from '@/shared/assets/icons/copy-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={EButtonTheme.CLEAR}>
                <Icon Svg={IconCopy} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
