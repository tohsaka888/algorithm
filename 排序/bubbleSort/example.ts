import { testArray } from "./__test__/data.js";

/**
 * 冒泡排序
 * @param {number[]} arr
 * @returns {number[]}
 */
const bubbleSort = <T = number>(arr: T[]): T[] => {
  for (let i = 0; i < arr.length; i++) {
    // 判断是否数组为已经排序好的标志
    let flag = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 当前元素比下一个大, 向上冒泡
      if (arr[j] > arr[j + 1]) {
        // 解构赋值
        // 详情可见: https://zh.javascript.info/destructuring-assignment
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        // 没有进入这个if说明相邻数大小没有问题, 如果遍历到数组结尾还是没有进if, 说明数组不需要排序
        flag = false;
      }
    }
    // flag 为true说明数组已经是排好序的, 这也是为什么理想情况下时间复杂度为O(n)
    // tips: 只经历了一次for循环
    if (flag) {
      break;
    }
  }
  return arr;
};

const result = bubbleSort(testArray);

console.log(result);
