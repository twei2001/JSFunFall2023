import { getAnswer } from "../getAnswer.js";

const isEvenOrOddStr = getAnswer(
  "../exercises/15-more-control-flow/01-ternary-operator.js"
);

const errorMessageStr = getAnswer(
  "../exercises/15-more-control-flow/02-short-circuiting.js"
);

export const isEvenOrOdd = eval(`(num) => {
  ${isEvenOrOddStr}
  return isEvenOrOdd;
}`);

export const getErrorMessage = eval(`(error) => {
  ${errorMessageStr}
  return errorMessage;
}`);
