export function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
}

export function getNextRoundRobin(total, current) {
    return ( current === total - 1 ? 0 : current + 1)
}

//console.log(getRandomNumber());
//console.log(getNextRoundRobin(10, 4));