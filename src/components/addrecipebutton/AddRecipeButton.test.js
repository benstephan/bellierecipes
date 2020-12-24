import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AddRecipeButton from './AddRecipeButton';

test('AddRecipe component fires url change when clicked', () => {
    const { container } = render(<AddRecipeButton />);
    const aBtn = container.querySelector('.add-recipe-button a');
    expect(aBtn).toHaveAttribute('href', '/add-recipe');    
});