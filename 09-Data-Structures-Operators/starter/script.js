'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.trim().split('+')) {
  const [status, origin, destination, time] = flight.split(';');
  const output = `${status.startsWith('_Delayed') ? '🔴' : ''} ${status
    .replaceAll('_', ' ')
    .trim()} from ${origin.slice(0, 3).toUpperCase()} to ${destination
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(50);
  console.log(output);
}

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// for (const value in restaurant) {
//   console.log(value);
// }

// console.log(`+++++++++++++++++++++++++++++++++++++++++`);
