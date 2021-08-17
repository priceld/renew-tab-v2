import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { getCardData } from '../data/cards';
import { InlineCode } from './InlineCode';

export interface FlashCardProps {
  cardKey?: string;
}

export const FlashCard: React.FC<FlashCardProps> = ({ cardKey }) => {
  const [step, setStep] = useState(0);
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    async function loadData() {
      try {
        const cardData = await getCardData();
        setCardData(cardData);
      } catch {
        // Do nothing.
      }
    }
    loadData();
  }, []);

  // const sampleFrontText = 'blahblahblah';
  return (
    <p>{cardData}</p>
  );
};
