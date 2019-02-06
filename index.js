// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = {...obj };

  newDriver[key] = value;
  return newDriver;
}
