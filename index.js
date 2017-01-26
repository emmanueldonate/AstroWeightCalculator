function clickHandler() {

  var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];

  var myWeightvalue = document.getElementById("myWeight").value
  var selectPlanetvalue = document.getElementById("selectPlanet").value


  var indexplanet = planets.findIndex(x => x.planet === selectPlanetvalue);
  var answer = myWeightvalue * planets[indexplanet].gravity;
  result = "If you were on " + selectPlanetvalue + ", you would weigh " + answer + "lbs!";
  document.getElementById("answerField").innerHTML= result;

  console.log(myWeightvalue);
  console.log(selectPlanetvalue);
  console.log(indexplanet);
  console.log(answer);
  console.log(result);
}
