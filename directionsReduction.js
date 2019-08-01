//Problem
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed the desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]

//My Solution
function dirReduc(arr){
  let obj = {}
  for(let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1
  }
  
  function compare(first, second) {
    if(obj[second]) {
        if(obj[first] >= obj[second] && (obj[first] - obj[second]) !== 0) {
          for(let i = 0; i < obj[first] - obj[second]; i++) newDir.push(first)
        }
      } 
      else {
        for(let i = 0; i < obj[first]; i++) newDir.push(first)
      }
  }
  
  let newDir = []
  for(let dir in obj) {
    if(dir === "NORTH") {
      compare(dir, "SOUTH")
    }
    if(dir === "EAST") {
      compare(dir, "WEST")
    }
    if(dir === "SOUTH") {
      compare(dir, "NORTH")
    }
    if(dir === "WEST") {
      compare(dir, "EAST")
    }
  }
  
  console.log(newDir)
  return newDir
}