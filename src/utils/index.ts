export function simplifyRatioWithLoss(width: number = 1, height: number = 1, loss: number = 0): [number, number] {
  console.log(width, height, loss)
  if (loss < 0 || loss > 1) {
    throw new Error("Loss must be between 0 and 1");
  }
  if (width <= 0) width++
  if (height <= 0) height++

  function sternBrocotApproximations(n: number, d: number): [number, number][] {
    const approximations: [number, number][] = [];
    let left = [0, 1], right = [1, 0];

    for (; ;) {
      const mediant = [left[0] + right[0], left[1] + right[1]];
      if (mediant[1] > d) break;

      approximations.push([mediant[0], mediant[1]]);

      if (n * mediant[1] > d * mediant[0]) {
        left = mediant;
      } else {
        right = mediant;
      }
    }

    return approximations;
  }

  function gcd(a: number, b: number): number {
    if (!b) return a;
    return gcd(b, a % b);
  }

  const divisor = gcd(width, height);
  width = width / divisor;
  height = height / divisor;

  const approximations = sternBrocotApproximations(width, height);

  const index = Math.round((1 - loss) * (approximations.length - 1));
  const [simplifiedWidth, simplifiedHeight] = approximations[index];

  return [simplifiedWidth, simplifiedHeight];
}