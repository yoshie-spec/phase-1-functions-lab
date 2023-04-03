// Code your solution in this file!
function distanceFromHqInBlocks(location){
    return Math.abs(location - 42)
}


function distanceFromHqInFeet(distance){
return (Math.abs(distanceFromHqInBlocks(distance) * 264)) 
}


function distanceTravelledInFeet(start, destination){
return (Math.abs(destination - start) * 264) 
}


function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination)<400){
        return 0
}       if ((2000 > distanceTravelledInFeet(start, destination)) && (distanceTravelledInFeet(start, destination) > 400)){
        return (distanceTravelledInFeet(start, destination) - 400) * .02
}       if ((2000 < distanceTravelledInFeet(start, destination)) && (distanceTravelledInFeet(start, destination)) < 2500) {
        return 25
}       else {
        return 'cannot travel that far'
}
}