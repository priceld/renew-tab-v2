import styled from 'styled-components/macro';

const Wrapper = styled.div`
  height: 500px;
  width: 400px;
  margin: 0 auto;
  box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.75);
  background-color: white;

  border-radius: 16px;

  padding: 16px;

  /* This allows child content to also rounded corners */
  overflow: hidden;
`;

export const Card: React.FC<{}> = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};