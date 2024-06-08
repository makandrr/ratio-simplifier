import Input from './Input';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../store';
import {setWidth, setHeight, setLoss} from '../store/ratioSlice';

const InputsStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Inputs() {
  const dispatch: AppDispatch = useDispatch();
  const width = useSelector((state: RootState) => state.ratio.width);
  const height = useSelector((state: RootState) => state.ratio.height);
  const loss = useSelector((state: RootState) => state.ratio.loss);

  return (
    <InputsStack>
      <div>
        <label htmlFor="width">Width:</label>
        <Input
          type="number"
          min={1}
          step={1}
          placeholder="16"
          id="width"
          value={width}
          onInput={e =>
            dispatch(setWidth(Number((e.target as HTMLInputElement).value)))
          }
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <Input
          type="number"
          min={1}
          step={1}
          placeholder="9"
          id="height"
          value={height}
          onInput={e =>
            dispatch(setHeight(Number((e.target as HTMLInputElement).value)))
          }
        />
      </div>
      <div>
        <label htmlFor="percentage">Loss percentage:</label>
        <Input
          type="number"
          min={0}
          max={100}
          step={1}
          placeholder="20"
          id="percentage"
          value={loss}
          onInput={e =>
            dispatch(setLoss(Number((e.target as HTMLInputElement).value)))
          }
        />
      </div>
    </InputsStack>
  );
}

export default Inputs;
