const planets = {
  'Mercury' : 0.378,
  'Venus' :  0.907,
  'Mars' : 0.377,
  'Jupiter' : 2.36,
  'Saturn' : 0.916
}

const calculateWeight = (earthWeight, planet) => {
 
  if(!(planet in planets)) {
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }

  return planets[planet] * earthWeight;
}

console.log(calculateWeight(100, 'Jupiter'));
console.log(calculateWeight(100, 'Uranus'));