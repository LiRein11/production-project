import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwither } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <button data-testid="sidebar-btn" onClick={onToggle}>
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwither />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
