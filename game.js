//let health = 100;
let potatoPic = document.getElementById("potato-pic")
let healthElem = document.getElementById("health")
let hitsElem = document.getElementById("hits")
//let hits = 0
//let potatoName = "Pete"

let powerUps = {
  fire: { name: "fire", modifier: 2, description: "FLAME ON!" },
  extraCharge: { name: "extra_charge", modifier: 3, description: "CHARGED AND READY!" }
}
//let
//  let damage = 0
let totalModifier = 0

let potato = {
  name: "Pete",
  health: 100,
  hits: 0,
  items: [],
  image: {
    alive: "./potato.png",
    hurt: "./hurtato.png",
    injured: "./deadtato.png",
    dead: "./mashed.png"
  }
}
//let healthProg = document.getElementById("health-progress").style.width = potato.health.toString() + "%"

function giveFire() {
  potato.items.push(powerUps.fire)
  //  console.log(potato.items.length);
  addPower()
}

function giveCharge() {
  potato.items.push(powerUps.extraCharge)
  addPower()
}

function addPower() {
  //  console.log(potato.items.length);
  for (var i = 0; i < potato.items.length; i++) {

    totalModifier += potato.items[i].modifier
  } return totalModifier
}

function update() {
  healthElem.innerText = potato.health;
  if (potato.health <= 100 && potato.health > 75) {
    potatoPic.src = potato.image.alive;
  } else if (potato.health <= 75 && potato.health > 50) {
    potatoPic.src = potato.image.hurt;
  } else if (potato.health <= 50 && potato.health > 25) {
    potatoPic.src = potato.image.injured;
  } else if (potato.health <= 25) {
    potatoPic.src = potato.image.dead;
  }
  document.getElementById("health-progress").style.width = potato.health.toString() + "%"
}

function updateHits() {
  hitsElem.innerText = potato.hits
}

function slap() {
  potato.health--;
  potato.health -= totalModifier;
  potato.hits++;
  if (potato.health <= 0) {
    potato.health = 0
  }
  update();
  updateHits();
  //console.log(health)
}

function zap() {
  potato.health = potato.health - 10;
  potato.health -= totalModifier
  potato.hits++;
  if (potato.health <= 0) {
    potato.health = 0
  }
  update();
  updateHits();
  //console.log(health)
}

function mash() {
  potato.health = potato.health - 5;
  potato.health -= totalModifier
  potato.hits++;
  if (potato.health <= 0) {
    potato.health = 0
  }
  update();
  updateHits();
  //console.log(health)
}

function reset() {
  potato.health = 100;
  potato.hits = 0;
  potato.items = [];
  totalModifier = 0;
  update();
  updateHits()
}

update()
updateHits()

function popup() {
  $('#myModal').modal(options)
}