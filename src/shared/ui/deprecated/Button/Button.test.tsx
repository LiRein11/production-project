import { render, screen } from '@testing-library/react';

import { Button, EButtonTheme } from './Button';

describe('Button', () => {
    test('testRenderButton', () => {
        render(<Button>TEST</Button>);

        expect(screen.getByText('TEST')).toBeInTheDocument();
        screen.debug();
    });
    test('testClassButton', () => {
        render(<Button theme={EButtonTheme.CLEAR}>TEST</Button>);

        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
