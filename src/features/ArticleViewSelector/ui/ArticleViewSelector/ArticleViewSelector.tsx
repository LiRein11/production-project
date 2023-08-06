import { SVGProps, VFC } from 'react';

import { ArticleView } from '@/entities/Article';
import GridIcon from '@/shared/assets/icons/grid-24-24.svg';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

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
        icon: GridIcon,
        'data-testid': 'ArticleViewSelectorGrid',
    },
    {
        view: 'list',
        icon: ListIcon,
        'data-testid': 'ArticleViewSelectorList',
    },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button data-testid={viewType['data-testid']} key={viewType.view} theme={EButtonTheme.CLEAR} onClick={onClick(viewType.view)}>
                    <Icon Svg={viewType.icon} className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])} />
                </Button>
            ))}
        </div>
    );
};
