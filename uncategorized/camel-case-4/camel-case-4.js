// https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/problem

function processData(input) {
    const inputArr = input.split("\n");
    for (input of inputArr) {
        const arr = input.split(";");
        if (arr[0] === "S") {
            if (arr[1] === "M") {
                let res = "";
                for (let i = 0; i < arr[2].length; i++) {
                    if (arr[2].charAt(i) === "(") {
                        console.log(res);
                    }
                    
                    if (arr[2].charAt(i) === arr[2].charAt(i).toUpperCase()) {
                        res += " ";
                        res += arr[2].charAt(i).toLowerCase();
                    } else {
                        res += arr[2].charAt(i);
                    }            
                    
                }
            } else if (arr[1] === "V") {
                let res = "";
                for (let i = 0; i < arr[2].length; i++) {
                    if (arr[2].charAt(i) === arr[2].charAt(i).toUpperCase()) {
                        res += " ";
                        res += arr[2].charAt(i).toLowerCase(); 
                    } else {
                        res += arr[2].charAt(i);
                    }
                }
                
                console.log(res);
            } else {
                let res = "";
                for (let i = 0; i < arr[2].length; i++) {
                    if (arr[2].charAt(i) === arr[2].charAt(i).toUpperCase()) {
                        res += " ";
                        res += arr[2].charAt(i).toLowerCase(); 
                    } else {
                        res += arr[2].charAt(i);
                    }
                }
                console.log(res.trim());
            }
        } else {
            if (arr[1] === "M") {
                let res = "";
                for (let i = 0; i < arr[2].length; i++) {
                    if (arr[2].charAt(i) === " ") {
                        res += arr[2].charAt(i + 1).toUpperCase();
                        i += 1;
                    } else {
                        res += arr[2].charAt(i);
                    }
                }
                res += "()";
                console.log(res);
                
            } else if (arr[1] === "V") {
                let res = "";
                for (let i = 0; i < arr[2].length; i++) {
                    if (arr[2].charAt(i) === " ") {
                        res += arr[2].charAt(i + 1).toUpperCase();
                    } else {
                        res += arr[2].charAt(i);
                    }
                }
                console.log(res);
                
            } else {
                let res = "";
                for (let i = 0; i < arr[2].length; i++) {
                    if (arr[2].charAt(i) === " ") {
                        res += arr[2].charAt(i + 1).toUpperCase();
                        i += 1;
                    } else {
                        res += arr[2].charAt(i);
                    }
                }
                res = res.charAt(0).toUpperCase() + res.slice(1);
                console.log(res);
            }
        }
    }
    
} 