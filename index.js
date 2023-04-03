
function isPalindrome(word){
  //iterate from the beginning to the  middle
  for (let i = 0; i < word.length/2; i++){
    //let's check each letter from start and compare iw with one from the end
    const j = word.length -1 -i;
    //if letters don't match, we return false
    if (word[i] !==word[j]) return false;
  }
  return true;
  }

/* 
  Add your pseudocode here
  - We're going to iterate over the string and our iteration checks to see if the first letter matches the last one
  if letters dont match, return false,
  else,return true
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
