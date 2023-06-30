import { classNames } from 'shared/lib/classNames/classNames';
import GridIcon from 'shared/assets/icons/grid-24-24.svg';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { SVGProps, VFC } from 'react';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/types/article';

export interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

interface ViewType {
    view: ArticleView;
    icon: VFC<SVGProps<SVGSVGElement>>;
}

const viewTypes: ViewType[] = [
    {
        view: 'grid',
        icon: GridIcon,
    },
    {
        view: 'list',
        icon: ListIcon,
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
                <Button key={viewType.view} theme={EButtonTheme.CLEAR} onClick={onClick(viewType.view)}>
                    <Icon Svg={viewType.icon} className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])} />
                </Button>
            ))}
        </div>
    );
};
