// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength
  }
  
  receiveDamage(damage) {
    this.health -= damage;
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` :  `${this.name} has died in act of combat`
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` :  `A Saxon has died in combat`
  }
}

// War
class War { 
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  
  vikingAttack() {
  const attackedSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
  const attackingViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

  attackedSaxon.receiveDamage(attackingViking.strength)
   
    if (attackedSaxon.health <= 0) {
      this.saxonArmy.splice(attackedSaxon, 1)
    }
  }
  
  saxonAttack() {

  const attackedViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
  const attackingSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

  attackedViking.receiveDamage(attackingSaxon.strength)
  
  
    if (attackedViking.health <= 0) {
    this.vikingArmy.splice(attackedViking, 1)
    }
  }
  
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}