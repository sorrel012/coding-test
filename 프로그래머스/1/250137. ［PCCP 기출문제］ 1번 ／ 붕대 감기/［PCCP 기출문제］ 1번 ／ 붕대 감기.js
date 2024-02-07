function solution(bandage, health, attacks) {
    const lastAttack = +attacks[attacks.length-1][0];
    const attackTimes = attacks.map(v => +v[0]);
    const maxHealth = health;
    let continuous = 0;
    
    for(let i = 1; i <= lastAttack; i++) {
        if(health <= 0) return -1;
        
        let index = attackTimes.indexOf(i);
        
        if(index !== -1) {
            health -= attacks[index][1];
            continuous = 0;
        } else {
            continuous++;
            if(continuous === bandage[0]) {
                health += bandage[1] + bandage[2];
                continuous = 0;
            } else if(health < maxHealth) {
                health += bandage[1];
            }
            health = Math.min(health, maxHealth);
        }
    }
    
    return health <= 0 ? -1 : health ;
}