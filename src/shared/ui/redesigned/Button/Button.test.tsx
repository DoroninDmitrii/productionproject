import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('Test render', () => {
    // eslint-disable-next-line i18next/no-literal-string
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
        render(<Button variant='outline'>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
