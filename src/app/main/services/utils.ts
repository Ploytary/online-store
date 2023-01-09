export function roundByNumberMagnitude(value: number): number {
  if (value < 10) {
    return 10;
  }
  const exp = value.toExponential();
  const expAndMant = exp.split('e+');
  const result = Math.ceil(parseFloat(expAndMant[0])) * 10 ** +expAndMant[1];
  return result;
}
