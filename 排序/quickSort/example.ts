import { testArray } from "./__test__/data.js";

/**
 * 快速排序
 * @param {number[]} arr
 * @returns {number[]}
 */
const quickSort = <T = number>(arr: T[]): T[] => {
  // 递归结束的条件, 数组只有一个元素,也就不需要排序了, 一定要先写
  if (arr.length < 2) {
    return arr;
  }

  // 数组第0个元素作为target
  let target = arr[0];
  // 比target小的集合
  let left = [];
  // 比target大的集合
  let right = [];

  // target 不参与比较
  arr.slice(1, arr.length).forEach((item) => {
    if (item < target) {
      left.push(item);
    } else {
      right.push(item);
    }
  });
  // 在这里递归
  return [...quickSort(left), target, ...quickSort(right)];
};

const result = quickSort(testArray);

console.log(result);
