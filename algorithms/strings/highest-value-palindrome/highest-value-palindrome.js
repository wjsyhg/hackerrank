// https://www.hackerrank.com/challenges/richie-rich/problem

function highestValuePalindrome(s, n, k) {
    // Write your code here
    let arr = s.split('');
    let diff = 0;

    for (let i = 0; i < n / 2; i++) {
        if (arr[i] !== arr[n - i - 1]) {
            diff++;
        }
    }

    if (diff > k) {
        return -1;
    }

    for (let i = 0; i < n / 2; i++) {
        if (arr[i] !== arr[n - i - 1]) {
            if (k > diff) {
                if (arr[i] !== '9') {
                    arr[i] ='9';
                    k--;
                } 
                if (arr[n - i - 1] !== '9') {
                    arr[n - i - 1] = '9';
                    k--;
                } 
                
                diff--;

            } else {
                let temp = Math.max(parseInt(arr[i]), parseInt(arr[n - i - 1]));
                if (parseInt(arr[i]) !== temp) {
                    arr[i] = arr[n - i - 1];
                    k--;
                    diff--;
                } else {
                    arr[n - i - 1] = arr[i];
                    k--;
                    diff--;
                }
                
            }
        } else {
                if (k - diff >= 2 && arr[i] !== '9') {
                    arr[i] = '9';
                    arr[n - i - 1] = '9';
                    k -= 2;
                }
            }
        
        }
    if (k > 0 && n % 2 !== 0) {
        arr[(n - 1) / 2] = '9';
    }

    return arr.join("");
}