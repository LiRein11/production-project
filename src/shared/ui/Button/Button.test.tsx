import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('testRenderButton', () => {
        render(<Button>TEST</Button>);

        expect(screen.getByText('TEST')).toBeInTheDocument();
        screen.debug();
    });
    test('testClassButton', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);

        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
