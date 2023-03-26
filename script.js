function threeSum(S, target) {
// write your code here
  const n = S.length;
  S.sort((a, b) => a - b);
  let diff = Infinity;
  let closestSum = 0;
  for (let i = 0; i < n - 2; i++) {
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      const tripletSum = S[i] + S[j] + S[k];
      const currentDiff = Math.abs(tripletSum - target);
      if (currentDiff < diff) {
        diff = currentDiff;
        closestSum = tripletSum;
      }
      if (tripletSum < target) {
        j++;
      } else if (tripletSum > target) {
        k--;
      } else {
        return tripletSum;
      }
    }
  }
  return closestSum;
}

module.exports = threeSum;
