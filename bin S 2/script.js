let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(array.length);

let bin = function (numbs, target) {
    let left = 0;
    let right = numbs.length - 1;
    let mid = Math.round(numbs.length / 2)

    while (left <= right) {

        if (target == mid) {
            return mid;
        } else if (target < mid) {
            right = mid - 1;
            mid = Math.round((right - left) / 2) + left;

        } else {
            left = mid + 1;
            mid = Math.round((right - left) / 2) + left;
        }


    }
    return -1;


}

console.log(bin(array, 13));