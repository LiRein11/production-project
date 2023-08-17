import { memo, useCallback } from 'react';

import { EButtonTheme, Button } from '../../deprecated/Button';
import { Icon as IconDeprecated } from '../../deprecated/Icon';
import { Icon } from '../Icon/Icon';

import IconCopy from '@/shared/assets/icons/copy-20-20.svg';
import IconCopyNew from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
                    <Icon clickable onClick={onCopy} Svg={IconCopyNew} className={cls.copyBtn} />
                    <code>{text}</code>
                </pre>
            }
            off={
                <pre className={classNames(cls.Code, {}, [className])}>
                    <Button onClick={onCopy} className={cls.copyBtn} theme={EButtonTheme.CLEAR}>
                        <IconDeprecated Svg={IconCopy} />
                    </Button>
                    <code>{text}</code>
                </pre>
            }
        />
    );
});
