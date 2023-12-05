function solution(num_list) {
    let evenNums = num_list.filter((e, index) => index % 2 === 0).reduce((sum, value) => sum + value);
    let oddNums = num_list.filter((e, index) => index % 2 === 1).reduce((sum, value) => sum + value);;
    return evenNums > oddNums ? evenNums : oddNums;
}