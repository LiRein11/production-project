import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('widgets/Sidebar', () => {
    test('testSidebar', () => {
        componentRender(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });
    test('testButtonToggle', () => {
        componentRender(<Sidebar />);

        const toggleBtn = screen.getByTestId('sidebar-btn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
    });
});
