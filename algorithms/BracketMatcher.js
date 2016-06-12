// Create a function to see if an input string has matching brackets
// ex. '{([])}' is TRUE, '{[()}]' is FALSE

var BracketMatcher = function (string){
  var choices = {'{':'}','[':']','(':')'};
  return Array.prototype.reduce.call(string, function(m,v){
    return choices[m[m.length-1]] === v ? m.pop() : m.push(v), m;
  },[]).length === 0;
};

var BracketMatcher = function(string) {
  var lefts = {
      '[': ']',
      '{': '}',
      '(': ')'
    },
    rights = {
      ']': '[',
      '}': '{',
      ')': '('
    },
    char, results = [];
  // say we have a string BracketMatcher =>'{[{}]}()' => true

  for (var i = 0; i < string.length; i++) {
    char = string[i];
    if (lefts[char]){
      results.push(char);
    } else if (rights[char]){
      if (results[results.length-1] !== rights[char]){
        return false;
      } else {
        results.pop();
      }
    }
  }
  retur