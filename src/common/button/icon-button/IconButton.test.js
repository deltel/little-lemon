import { render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';

describe('IconButton', () => {
    test('renders image', () => {
        render(<IconButton>
            <img src="" alt="demo image" />
        </IconButton>);
        const imageAltText = screen.getByAltText(/demo image/i);
        expect(imageAltText).toBeInTheDocument();
    });
});