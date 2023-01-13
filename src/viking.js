// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(vikingArmy = [], saxonArmy = []) {
        this.vikingArmy = vikingArmy
        this.saxonArmy = saxonArmy
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        let randomVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const battle = randomSax.receiveDamage(randomVik.strength)
        if (randomSax.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSax))
        }
        return battle
    }

    saxonAttack() {
        let randomVik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        const battle = randomVik.receiveDamage(randomSax.strength)
        if (randomVik.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomVik))
        }
        return battle
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

// BONUS - GENERIC ATTACK ITERATION


// genericAttack(attacker = []) {
//     let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
//     let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
//     let battle

//     if (attacker.includes(viking)) {
//         battle = saxon.receiveDamage(viking.strength)
//         if (saxon.health <= 0) {
//         this.saxonArmy.splice(this.saxonArmy.indexOf(saxon))
//         }
//     }
//     else {
//         battle = viking.receiveDamage(saxon.strength)
//         if (viking.health <= 0) {
//         this.vikingArmy.splice(this.vikingArmy.indexOf(viking))
//         }
//     }
//     return battle
// }