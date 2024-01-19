function solution(participant, completion) {
    let names = new Map();

    for (let name of participant) {
        if (names.has(name)) {
            names.set(name, names.get(name) + 1);
        } else {
            names.set(name, 1);
        }
    }

    for (let name of completion) {
        names.set(name, names.get(name) - 1);
    }

    for (let [name, count] of names) {
        if (count > 0) {
            return name;
        }
    }
}