import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';

export interface BugButtonProps {
    className?: string;
}

// Компонент для тестирования ErrorBoundary
export const BugButton = ({ className }: BugButtonProps) => {
    const [stateBug, setStateBug] = useState(false);
    const createBug = () => {
        setStateBug(!stateBug);
    };

    useEffect(() => {
        if (stateBug) {
            throw new Error();
        }
    }, [stateBug]);

    return (
        <button
            className={classNames('', {}, [className])}
            onClick={() => createBug()}
        >
            Create bug
        </button>
    );
};
