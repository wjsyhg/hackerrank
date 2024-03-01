// https://www.hackerrank.com/challenges/big-sorting/problem

function bigSorting(unsorted) {
    const numArr = unsorted.map((num) => BigInt(num));
    numArr.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    return numArr.map((num) => num.toString());
}