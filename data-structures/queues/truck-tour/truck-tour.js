// https://www.hackerrank.com/challenges/truck-tour/problem

function truckTour(petrolpumps) {
    const arr = [];

    for (let i = 0; i < petrolpumps.length; i++) {
        arr.push(petrolpumps[i][0] - petrolpumps[i][1]);
    }

    let total = 0;
    let start = 0;
    while (start < arr.length) {
        let i = start;
        while (total >= 0 && i < arr.length) {
            total += arr[i];
            i++;
        }

        if (total >= 0 && i === arr.length) {
            let j = 0;
            while (j < start && total >= 0) {
                total += arr[j];
                j++;
            }

            if (total >= 0 && j === start) {
                return start;
            } else {
                start++;
                total = 0;
            }
        } else {
            start++;
            total = 0;
        }
    }

    return -1;
    
}

