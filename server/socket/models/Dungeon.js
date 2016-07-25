'use strict';

function Dungeon(name, id, owner) {
  this.name = name;
  this.id = id;
  this.owner = owner;
  this.people = [];
  this.peopleLimit = 4;
  this.status = "available";
  this.private = false;

};

Dungeon.prototype.addPerson = function(personID) {
  if (this.status === "available") {
    this.people.push(personID);
  }
};

Dungeon.prototype.removePerson = function(person) {
  var personIndex = -1;
  for(var i = 0; i < this.people.length; i++){
    if(this.people[i].id === person.id){
      personIndex = i;
      break;
    }
  }
  this.people.splice(personIndex,1);
};

Dungeon.prototype.getPerson = function(personID) {
  var person = null;
  for(var i = 0; i < this.people.length; i++) {
    if(this.people[i].id == personID) {
      person = this.people[i];
      break;
    }
  }
  return person;
};

Dungeon.prototype.getNumberOfPersonsInDungeon = function() {
    return this.people.length;
};

Dungeon.prototype.getOwner = function() {
  return this.owner;
}

Dungeon.prototype.isAvailable = function() {
  return this.available === "available";
};

Dungeon.prototype.isPrivate = function() {
  return this.private;
};

module.exports = Dungeon;
