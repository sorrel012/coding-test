function solution(arr) {
    let len = arr.length;

    if (!isSqure(len)) {
        let power = 1;
        while (Math.pow(2, power) < len) {
            power++;
        }

        let zerosToAdd = Math.pow(2, power) - len;
        arr = arr.concat(new Array(zerosToAdd).fill(0));
    }

    return arr;
}

function isSqure(num) {
    return (num !== 0) && ((num & (num - 1)) === 0);
}

