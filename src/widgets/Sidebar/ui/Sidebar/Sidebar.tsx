import { ReactNode, memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, EButtonTheme, EButtonSize } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';

import cls from './Sidebar.module.scss';
import clsNew from './Sidebar.new.module.scss';

export interface SidebarProps {
    className?: string;
}

interface RedesignedSidebar {
    collapsed: boolean;
    className?: string;
    onToggle: () => void;
    itemsList: ReactNode[];
}

interface DeprecatedSidebar {
    collapsed: boolean;
    onToggle: () => void;
    itemsList: ReactNode[];
    className?: string;
}

const RedesignedSidebar = memo((props: RedesignedSidebar) => {
    const { collapsed, onToggle, itemsList, className } = props;

    return (
        <section
            data-testid="sidebar"
            className={classNames(clsNew.SidebarRedesigned, { [clsNew.collapsed]: collapsed }, [
                className,
            ])}
        >
            <AppLogo size={collapsed ? 30 : 50} className={clsNew.appLogo} />
            <Icon
                Svg={ArrowIcon}
                data-testid="sidebar-btn"
                onClick={onToggle}
                className={clsNew.collapseBtn}
                clickable
            />
            <VStack role="navigation" gap="8" className={clsNew.items}>
                {itemsList}
            </VStack>
            <div className={clsNew.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={clsNew.lang} short={collapsed} />
            </div>
        </section>
    );
});

const DeprecatedSidebar = memo((props: DeprecatedSidebar) => {
    const { collapsed, onToggle, itemsList, className } = props;

    return (
        <section
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-btn"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={EButtonTheme.BACKGROUND_INVERTED}
                square
                size={EButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </section>
    );
});

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const sidebarItemsList = useSelector(getSidebarItems);

    const itemsList = useMemo(() => {
        return sidebarItemsList.map((item) => (
            <SidebarItem collapsed={collapsed} item={item} key={item.path} />
        ));
    }, [collapsed, sidebarItemsList]);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <RedesignedSidebar
                    className={className}
                    collapsed={collapsed}
                    onToggle={onToggle}
                    itemsList={itemsList}
                />
            }
            off={
                <DeprecatedSidebar
                    collapsed={collapsed}
                    onToggle={onToggle}
                    itemsList={itemsList}
                    className={className}
                />
            }
        />
    );
});
