import { fireEvent, render, screen } from '@testing-library/react';
import { I18nextProvider, withTranslation } from 'react-i18next';

import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('testSidebar', () => {
        renderWithTranslation(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });
    test('testButtonToggle', () => {
        renderWithTranslation(<Sidebar />);

        const toggleBtn = screen.getByTestId('sidebar-btn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
    });
});
