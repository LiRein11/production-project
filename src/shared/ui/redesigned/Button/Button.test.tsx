import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
    test('testRenderButton', () => {
        render(<Button>TEST</Button>);

        expect(screen.getByText('TEST')).toBeInTheDocument();
        screen.debug();
    });
    test('testClassButton', () => {
        render(<Button variant="clear">TEST</Button>);

        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
