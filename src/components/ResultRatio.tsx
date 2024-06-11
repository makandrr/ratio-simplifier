import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {simplifyRatioWithLoss} from '../utils/index';

const StyledResultRatio = styled.div`
  .label,
  .ratio {
    font-size: 2rem;
  }

  .ratio {
    color: var(--secondary-color);
    font-weight: 600;
  }

  .css {
    background-color: #111;
    padding: 0.4rem 0.7rem;
    font-size: 1.1rem;
    color: #5bc9e4;
    .accent {
      color: #9da9fc;
    }
    .grey {
      color: #708c98;
    }
  }
`;

function ResultRatio() {
  const width = useSelector((state: RootState) => state.ratio.width);
  const height = useSelector((state: RootState) => state.ratio.height);
  const loss = useSelector((state: RootState) => state.ratio.loss);

  const simplifiedRatio = simplifyRatioWithLoss([width, height], loss / 100);

  return (
    <StyledResultRatio>
      <label className="label">Result: </label>
      <output className="ratio">
        {simplifiedRatio[0]} : {simplifiedRatio[1]}
      </output>
      <div className="css">
        aspect-ratio<span className="grey">:</span>{' '}
        <span className="accent">{simplifiedRatio[0]}</span>{' '}
        <span className="grey">/</span>{' '}
        <span className="accent">{simplifiedRatio[1]}</span>
        <span className="grey">;</span>
      </div>
    </StyledResultRatio>
  );
}

export default ResultRatio;
