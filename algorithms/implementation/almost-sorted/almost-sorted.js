// https://www.hackerrank.com/challenges/almost-sorted/problem

function almostSorted(arr) {
    // Write your code here
    if (isSorted(arr)) {
        console.log("yes");
    } else {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let l = i;
                let r = i + 1;
                while (arr[i] > arr[i + 1]) {
                    i++;
                }
                r = i;
                if (r - l === 1) {
                    const copiedArr = [...arr];
                    let temp = copiedArr[l];
                    copiedArr[l] = copiedArr[r];
                    copiedArr[r] = temp;
                    if (isSorted(copiedArr)) {
                        console.log("yes");
                        console.log("swap " + String(l + 1) + " " + String(r + 1));
                        return;
                    } else {
                        while (arr[i] <= arr[i + 1] && i < arr.length - 1) {
                            i++;
                        }
                        if (i === arr.length - 1) {
                            console.log("no");
                            return;
                        } else {
                            r = i + 1;
                        
                            const copiedArr2 = [...arr];
                            let temp2 = copiedArr2[l];
                            copiedArr2[l] = copiedArr2[r];
                            copiedArr2[r] = temp;
                            if (isSorted(copiedArr2)) {
                                console.log("yes");
                                console.log("swap " + String(l + 1) + " " + String(r + 1));
                                return;
                            } else {
                                console.log("no");
                                return;
                            }
                          
                        }
                        
                    }
                } else {
                    if (arr[l] <= arr[r + 1] && arr[r] >= arr[l - 1]) {
                        const slicedArr = arr.slice(0, l).concat(arr.slice(r + 1));
                        if (isSorted(slicedArr)) {
                            console.log("yes");
                            console.log("reverse " + String(l + 1) + " " + String(r + 1));
                            return;
                        } else {
                            console.log("no");
                            return;
                        }
                    } else {
                        console.log("no");
                        return;
                    }
                }
            }
        }
    }
    
    function isSorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }
}

