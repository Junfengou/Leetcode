const NumeralToNum = (txt) => {
    const RomanNum = {
        "I" : 1,
        "IV" : 4,
        "V" : 5,
        "IX" : 9,
        "X" : 10,
        "XL" : 40,
        "L" : 50,
        "XC" : 90,
        "C" : 100,
        "CD" : 400,
        "D" : 500,
        "CM" : 900,
        "M" : 1000,
    }
    let ans = 0;
    for(let i = 0; i < txt.length; i++) {
        if(RomanNum[txt[i] + txt[i+1]]){
            ans += RomanNum[txt[i] + txt[i+1]];
            i++;
        }
        else {
            ans += RomanNum[txt[i]];
        }
    }
    return ans;
}
console.log(NumeralToNum('XIII'));
