function solution(my_string, overwrite_string, s) {
    let arr = [...my_string];
    return [...arr.slice(0, s), ...[...overwrite_string], ... arr.slice(overwrite_string.length + s)].join('');
}