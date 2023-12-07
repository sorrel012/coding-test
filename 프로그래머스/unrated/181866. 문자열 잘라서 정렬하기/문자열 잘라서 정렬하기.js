function solution(myString) {
    return myString.split('x').filter(el => el !== 'x' && el !== '').sort();
}