// https://www.hackerrank.com/challenges/countingsort4/problem

function countSort(arr) {
    // Write your code here
    const n = arr.length;
    for (let i = 0; i < n / 2; i++) {
        arr[i][1] = '-';
    }
    
    const orderedArr = Array(100).fill(null).map(() => []);
    for (let i = 0; i < n; i++) {
        const [x, y] = arr[i];
        orderedArr[parseInt(x)].push(y);
    }
    
    let res = '';
    for (let i = 0; i < 100; i++) {
        for (let x of orderedArr[i]) {
            res += x + " ";
        }
    }
    
    console.log(res);
}