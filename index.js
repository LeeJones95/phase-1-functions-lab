function distanceFromHqInBlocks(newLocation) {
    const hqLocation = 42
    if (newLocation > hqLocation) {
       const distance = newLocation - hqLocation
       return distance
    }
    else if (newLocation < hqLocation) {
       const distance = hqLocation - newLocation
       return distance
    } else {
        return 0
    }
}

function distanceFromHqInFeet(newLocation) {
   const distance = distanceFromHqInBlocks(newLocation)
   return distance * 264
}

function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination-start) * 264
    return distance
}
function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start,destination)
    if (feet == 264) {
        return 0
    } else if (feet > 2000 && feet < 2500) {
        return 25
    }
    else if (feet > 2500) {
        return "cannot travel that far"
    }
    const totalFeet = (feet - 400) * .02
   return totalFeet
}

console.log(calculatesFarePrice(34,24))