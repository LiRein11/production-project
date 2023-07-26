import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    beforeEach(() => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
    });
    test('test render', () => {
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        screen.debug();
    });

    test('increment', async () => {
        await userEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
        screen.debug();
    });

    test('decrement', async () => {
        await userEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');

        screen.debug();
    });
}); // Интеграционный тест (тестируется цельный компонент в связке со стейтом)
