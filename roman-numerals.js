/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // make a key value pair object
    // translate it from roman to integrar 
    // return an integer? 
    const vals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };

    const spread = s.split('')

    let count = 0;
    for (let i = 0; i < spread.length; i++) {
        if (vals[spread[i]] < vals[spread[i + 1]]) {
           
            count -= vals[spread[i]]
        } else {
            count += vals[spread[i]]
        }
        // if first is smaller than second substract val
        // if first is larger than second, add first val

    }
    return count;
};