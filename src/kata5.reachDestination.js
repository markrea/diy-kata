const reachDestination = (distance, speed) => {
    journeyTime = speed / distance;
// double journeyTime, round to next whole number then halve 
    const rounded = Math.ceil(journeyTime * 2) / 2; 
    return ("I should be there in " + rounded + " hours.")
};

module.exports = reachDestination;
