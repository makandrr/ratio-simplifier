import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {simplifyRatioWithLoss} from '../utils/index';

const RectangleContainer = styled.div`
  width: 30rem;
  height: 30rem;
  position: relative;
`;

const Rectangle = styled.div`
  outline: 4px solid var(--primary-color);
  position: absolute;
  inset: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 5;
  transition: 150ms all;
`;

const PlaceholderRectangle = styled(Rectangle)`
  outline: 2px dashed var(--light-color);
  z-index: 0;
`;

type RectStyle = Partial<{
  left: string;
  right: string;
  top: string;
  bottom: string;
  height: string;
  transform: string;
  'aspect-ratio': string;
}>;

function ResultRectangle() {
  const width = useSelector((state: RootState) => state.ratio.width);
  const height = useSelector((state: RootState) => state.ratio.height);
  const loss = useSelector((state: RootState) => state.ratio.loss);

  const simplifiedRatio = simplifyRatioWithLoss([width, height], loss / 100);
  const rectStyle: RectStyle = {};
  if (simplifiedRatio[0] >= simplifiedRatio[1]) {
    rectStyle.left = '0';
    rectStyle.right = '0';
    rectStyle.transform = 'translateY(-50%)';
  } else {
    rectStyle.top = '0';
    rectStyle.bottom = '0';
    rectStyle.height = '100%';
    rectStyle.transform = 'translateX(-50%)';
  }

  return (
    <RectangleContainer
      role="img"
      aria-label={`A rectangle with width ${simplifiedRatio[0]} and height ${simplifiedRatio[1]}`}
    >
      {' '}
      <Rectangle
        style={{
          ...rectStyle,
          aspectRatio: `${simplifiedRatio[0]} / ${simplifiedRatio[1]}`,
        }}
        aria-hidden="true"
      ></Rectangle>
      <PlaceholderRectangle
        style={{...rectStyle, aspectRatio: `${width} / ${height}`}}
      ></PlaceholderRectangle>
    </RectangleContainer>
  );
}
export default ResultRectangle;
