function solution(str_list) {
    const idx1 = str_list.indexOf('l');
    const idx2 = str_list.indexOf('r');

    if (idx1 === -1 && idx2 === -1) {
        return [];
    } else if (idx1 !== -1 && (idx2 === -1 || idx1 < idx2)) {
        return str_list.slice(0, idx1);
    } else {
        return str_list.slice(idx2 + 1);
    }
}
