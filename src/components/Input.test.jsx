import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import Input from './Input'

describe('Input', () => {
  test('no label', () => {
    render(
      <Input
        value='test'
        onChange={() => {}}
      />
    );

    const element = screen.getByRole('group');
    expect(element.children.length).toEqual(1);
  });

  test('keypress handling', async () => {
    let inputValue = '';

    render(
      <Input
        label={'My Input'}
        value={inputValue}
        onChange={(e) => {
          inputValue = e.target.value;
        }}
      />
    );

    const parentElement = screen.getByRole('group');
    expect(parentElement.children.length).toEqual(2);

    const inputElement = screen.getByRole('textbox')
    inputElement.focus();
    await userEvent.type(inputElement, 'a');
    expect(inputValue).toEqual('a');
  });
})