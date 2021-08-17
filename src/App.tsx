import React from 'react';
import { Card } from './components/Card';
import styled, { ThemeProvider } from 'styled-components/macro';
import { FlashCardForm } from './components/FlashCardForm';
import { GlobalStyles } from './components/GlobalStyles';
import { FlashCard } from './components/FlashCard';

const theme = {
  primary: 'hsl(240deg 100% 60%)',
  primaryLight: 'hsl(235deg 100% 62%)',
  white: 'hsl(0deg 0% 100%)',
};


const Wrapper = styled.div`
  margin-top: 1.5rem;
`;

function App() {
  function onSubmitNewFlashCard(front: string, back: string) {

  }
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Card>
            <FlashCardForm></FlashCardForm>
            {/* <FlashCard></FlashCard> */}
          </Card>
        </Wrapper>
      </ThemeProvider>
      <GlobalStyles />
    </div>
  );
}

export default App;
