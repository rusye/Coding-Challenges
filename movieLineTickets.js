//Problem
// There are n people standing in line to buy show tickets. Due to High Demand, The Venue sells tickets according to the following rules:
//  1. The person at the head of the line can by exactly one ticket and must exit the line
//  2. If a person needs to purchase additional tickets, they must re-enter the end of the line in wait to be sold the next ticket (assume exit and re-entry takes 0 seconds)
//  3. Each ticket sale dates exactly one second.
// We express the initial line of n people as an array, tickets = [ticket(0),ticket(1),...,ticket(n-1)] where each tickers,
// denotes the number of tickets that person i wishes to buy. If Jesse is located at postion p. How many seconds will it take for him to purchase the tickets.

//My Solution
let position = 2;
let currentDemand = [2, 6, 3, 4, 5];

function howLong(n, p) {
  let time = 0;
  let updatedDemand = [];

  for (let i = 0; i < n.length; i++) {
    updatedDemand.push({ [i]: n[i] });
  }

  let boughtAllTickets = false;

  while (!boughtAllTickets) {
    time++;

    let firstPerson = updatedDemand[0];
    let person = Number(Object.keys(firstPerson)[0]);
    let ticketsLeft = Object.values(firstPerson)[0] - 1;

    let lastPerson = new Object();
    lastPerson[person] = ticketsLeft;

    if (person === p && ticketsLeft === 0) {
      boughtAllTickets = true;
    } else if (ticketsLeft === 0) {
      updatedDemand.shift();
    } else {
      updatedDemand.shift();
      updatedDemand.push(lastPerson);
    }
  }

  console.log(`we are done ${time}`);
  return time;
}

howLong(currentDemand, position);
