function solution(bandage, health, attacks) {
  let currHealth = health;
  let currAttackTime = 0;

  for (let [attackTime, damage] of attacks) {
    let diffTime = attackTime - currAttackTime - 1;
    currHealth += diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];

    if (currHealth > health) currHealth = health;
    currHealth -= damage;
    if (currHealth <= 0) return -1;
    currAttackTime = attackTime;
  }

  return currHealth;
}