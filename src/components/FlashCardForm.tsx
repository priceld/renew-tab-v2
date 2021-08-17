import styled from 'styled-components/macro';
import { CardData } from '../data/cards';

const PrimaryButton = styled.button`
  border: none;
  border-radius: 4px;
  /* font-size: var(--font-size);
  padding: var(--padding); */
  padding: 8px 16px;
  font-size: 16px;

  background: ${p => p.theme.primary};
  color: ${p => p.theme.white};

  &:hover {
    background-color: ${p => p.theme.primaryLight};
  }

  &:focus {
    outline-color: ${p => p.theme.primary};
    outline-offset: 3px;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0; // stick to the bottom
  right: 0;
  left: 0;
  padding: 20px;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
`;

const Form = styled.form`
  position: relative;
  min-height: 100%;
  padding: 24px;
`;

const Input = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;

  border-color: gainsboro;
  border-radius: 4px;
`;

interface FlashCardFormElements extends HTMLFormControlsCollection {
  front: HTMLTextAreaElement;
  back: HTMLTextAreaElement;
}
interface FlashCardFormElement extends HTMLFormElement {
  readonly elements: FlashCardFormElements
}

export interface FlashCardFormProps {
  onSubmitFlashCard: (card: CardData) => void;
}

export const FlashCardForm: React.FC<FlashCardFormProps> = ({ onSubmitFlashCard }) => {
  // TODO: make this component support editing a flashcard.


  function handleSubmit(event: React.FormEvent<FlashCardFormElement>) {
    event.preventDefault();
    const cardData: CardData = {
      frontRaw: event.currentTarget.elements.front.value,
      backRaw: event.currentTarget.elements.back.value,
      deck: 'default',
      hits: 0,
      misses: 0,
      views: 0,
      bucket: 0,
      labels: [],
    };
    
    onSubmitFlashCard(cardData);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="front">Front</Label>
      <Input id="front"></Input>
      <Label htmlFor="back">Back</Label>
      <Input id="back"></Input>
      <Footer>
        <PrimaryButton type="submit">Save</PrimaryButton>
      </Footer>
    </Form>
  );  
};