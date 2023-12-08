function computeClosestToZero(ts: number[]): number {
  if (ts.length === 0) {
    return 0;
  }

  let closest = ts[0];

  for (let i = 1; i < ts.length; i++) {
    if (Math.abs(ts[i]) < Math.abs(closest) || (Math.abs(ts[i]) === Math.abs(closest) && ts[i] > 0)) {
      closest = ts[i];
    }
  }

  return closest;
}
