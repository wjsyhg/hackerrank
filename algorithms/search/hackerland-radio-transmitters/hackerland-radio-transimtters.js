// https://www.hackerrank.com/challenges/hackerland-radio-transmitters/problem

function hackerlandRadioTransmitters(x, k) {
    // Write your code here
    x.sort((a, b) => a - b);
    let i = 0, n = x.length, transmitters = 0;
    
    while (i < n) {
        transmitters++;
        let house = x[i] + k;
        while (i < n && x[i] <= house) {
            i++;
        }
        let transmitter = x[--i];
        while (i < n && x[i] <= transmitter + k) {
            i++;
        }
    }
    return transmitters;
}