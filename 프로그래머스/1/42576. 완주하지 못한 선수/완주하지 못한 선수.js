function solution(participant, completion) {
    let names = new Map();

    for (let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        names.set(a, (names.get(a) || 0) + 1);
        names.set(b, (names.get(b) || 0) - 1);
    }

    for (let [name, count] of names) {
        if (count > 0) {
            return name;
        }
    }
}