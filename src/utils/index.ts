function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export function simplifyRatioWithLoss(
  width: number,
  height: number,
  loss: number
): [number, number] {
  loss = Math.max(0, Math.min(1, loss));

  if (loss === 1) {
    return [1, 1];
  }

  const divisor = gcd(width, height);
  const simplifiedWidth = width / divisor;
  const simplifiedHeight = height / divisor;

  if (loss === 0) {
    return [simplifiedWidth, simplifiedHeight];
  }

  const widthLoss = simplifiedWidth * loss;
  const heightLoss = simplifiedHeight * loss;

  const newWidth = Math.round(simplifiedWidth - widthLoss);
  const newHeight = Math.round(simplifiedHeight - heightLoss);

  return [Math.max(1, newWidth), Math.max(1, newHeight)];
}
