function findByName(people, name) {
  return people.find(person => person.name === name);
}

module.exports = findByName;