import { ReactNode, memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/AppLogo';
import { Button, EButtonSize, EButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';

import cls from './Sidebar.module.scss';
import clsNew from './Sidebar.new.module.scss';

export interface SidebarProps {
    className?: string;
}

interface RedesignedSidebar {
    collapsed: boolean;
    className?: string;
}

interface DeprecatedSidebar {
    collapsed: boolean;
    onToggle: () => void;
    itemsList: ReactNode[];
    className?: string;
}

const RedesignedSidebar = memo((props: RedesignedSidebar) => {
    const { collapsed, className } = props;

    return (
        <section
            data-testid="sidebar"
            className={classNames(clsNew.SidebarRedesigned, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <AppLogo className={clsNew.appLogo} />
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
            on={<RedesignedSidebar className={className} collapsed={collapsed} />}
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
