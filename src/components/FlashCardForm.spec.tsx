import React from 'react';
import { render, screen } from '@testing-library/react';
import { FlashCardForm, FlashCardFormProps } from './FlashCardForm';

function doRender(props: FlashCardFormProps) {
  render(<FlashCardForm {...props} />);
}

describe('FlashCardForm', () => {
  it('should render successfully', () => {
    doRender({
      onSubmitFlashCard: jest.fn(),
    });
  });

  describe('when creating a new flash card', () => {
    describe('the initial render', () => {
      beforeEach(() => {
        doRender({
          onSubmitFlashCard: jest.fn(),
        });
      });

      it('should render an empty form', () => {
        const input = screen.getByLabelText('Front')
        expect((input as HTMLTextAreaElement).value).toBe('');
      });
    });

    describe('when submitting the form', () => {

    });
  });

  describe('when editing an existing flash card', () => {
    describe('the initial render', () => {

    });

    describe('when submitting the form', () => {

    });
  });
});