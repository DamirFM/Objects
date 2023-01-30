// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import _ from 'lodash';
// BEGIN (write your solution here)
export default function copy(obj) {
  let current = {};
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (Object.hasOwn(obj, key)) {
      current[key] = obj[key];
    }
  }
  return current
}
// END