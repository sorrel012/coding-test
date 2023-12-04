function solution(my_string) {
    my_string = my_string.trim().split(' ');
    const filtered = my_string.filter((value, index, my_string) => {
        return value !== '';
    });
    return filtered;
}