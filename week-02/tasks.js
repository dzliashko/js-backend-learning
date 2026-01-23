const users = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 30 },
  { name: 'Dave', age: 15 },
]

function filterAdults(users) {
  if (!Array.isArray(users)) {
    return null
  }
  return users.filter((user) => user.age >= 18)
}

function getNames(users) {
  if (!Array.isArray(users)) {
    return null
  }
  return users.map((user) => user.name)
}

function averageAge(users) {
  if (!Array.isArray(users) && users.length === 0) {
    return null
  }
  const totalAges = users.reduce((acc, user) => acc + user.age, 0)
  return totalAges / users.length
}

export { users, filterAdults, getNames, averageAge }
