import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('test render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        screen.debug();
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        // const dec = expect(screen.getByTestId('decrement'));
        userEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');

        screen.debug();
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');

        screen.debug();
    });
}); // Интеграционный тест (тестируется цельный компонент в связке со стейтом)
