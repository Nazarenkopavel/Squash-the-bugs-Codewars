/*
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.

*/

function findLongest(str) (
    let a = str.split(" ").map(el => el.length).sort((a, b) => b - a);
    return a[0]
    )
    
    console.log(findLongest("The quick white fox jumped around the massive dog"));