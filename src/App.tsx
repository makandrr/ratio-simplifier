import Inputs from './components/Inputs';
import ResultRatio from './components/ResultRatio';
import ResultRectangle from './components/ResultRectangle';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  align-content: center;
  flex: 1 1 0;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
  .rect-result {
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 1rem;
  }
`;

function App() {
  return (
    <StyledApp>
      <div className="left">
        <Inputs />
        <ResultRatio />
      </div>
      <div className="rect-result">
        <ResultRectangle />
      </div>
    </StyledApp>
  );
}

export default App;
