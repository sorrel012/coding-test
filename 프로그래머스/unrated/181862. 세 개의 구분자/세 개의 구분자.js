function solution(myStr) {
    const separators = ['a', 'b', 'c'];
    const answer = separators.reduce((acc, sep) => {
        return acc.flatMap(str => str.split(sep));
    }, [myStr]).filter(str => str.length > 0);

    return answer.length > 0 ? answer : ['EMPTY'];
}
