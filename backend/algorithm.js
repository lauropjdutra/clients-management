const calculateDistance = (x1, y1, x2, y2) => {
  const deltaX = x2 - x1
  const deltaY = y2 - y1
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY)
}

const calculateNearestNeighbor = clients => {
  const unvisitedClients = [...clients]
  const route = []
  let currentClient = findClosestToOrigin(unvisitedClients)

  while (currentClient) {
    route.push(currentClient)
    unvisitedClients.splice(unvisitedClients.indexOf(currentClient), 1)
    currentClient = findClosestToCurrent(currentClient, unvisitedClients)
  }

  return route
}

const findClosestToOrigin = clients => {
  let closestClient = null
  let minDistance = Infinity

  clients.forEach(client => {
    const distance = calculateDistance(
      0,
      0,
      client.x_coordinate,
      client.y_coordinate
    )

    distance < minDistance &&
      ((minDistance = distance), (closestClient = client))
  })

  return closestClient
}

const findClosestToCurrent = (currentClient, unvisitedClients) => {
  let closestClient = null
  let minDistance = Infinity

  unvisitedClients.forEach(neighbor => {
    const distance = calculateDistance(
      currentClient.x_coordinate,
      currentClient.y_coordinate,
      neighbor.x_coordinate,
      neighbor.y_coordinate
    )

    distance < minDistance &&
      ((minDistance = distance), (closestClient = neighbor))
  })

  return closestClient
}

module.exports = {
  calculateNearestNeighbor,
}