import { SVGProps, VFC } from 'react';

import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/burger.svg';
import GridIconDeprecated from '@/shared/assets/icons/grid-24-24.svg';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import GridIcon from '@/shared/assets/icons/tile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated, EButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleViewSelector.module.scss';

export interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

interface ViewType {
    view: ArticleView;
    icon: VFC<SVGProps<SVGSVGElement>>;
    'data-testid'?: string;
}

const viewTypes: ViewType[] = [
    {
        view: 'grid',
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => GridIcon,
            off: () => GridIconDeprecated,
        }),
        'data-testid': 'ArticleViewSelectorGrid',
    },
    {
        view: 'list',
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
        'data-testid': 'ArticleViewSelectorList',
    },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    border="round"
                    className={classNames(cls.ArticleViewSelectorRedesigned, {}, [className])}
                >
                    <HStack gap="8">
                        {viewTypes.map((viewType) => (
                            <Icon
                                onClick={onClick(viewType.view)}
                                clickable
                                Svg={viewType.icon}
                                className={classNames(
                                    '',
                                    { [cls.notSelected]: viewType.view !== view },
                                    [],
                                )}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            data-testid={viewType['data-testid']}
                            key={viewType.view}
                            theme={EButtonTheme.CLEAR}
                            onClick={onClick(viewType.view)}
                        >
                            <IconDeprecated
                                width={24}
                                height={24}
                                Svg={viewType.icon}
                                className={classNames(
                                    '',
                                    { [cls.notSelected]: viewType.view !== view },
                                    [],
                                )}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
};
