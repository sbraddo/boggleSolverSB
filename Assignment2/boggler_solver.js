// /**
//  * Given a Boggle board and a dictionary, returns a list of available words in
//  * the dictionary present inside of the Boggle board.
//  * @param {string[][]} grid - The Boggle game board.
//  * @param {string[]} dictionary - The list of available words.
//  * @returns {string[]} solutions - Possible solutions to the Boggle board.
//  */
//  exports.findAllSolutions = function(grid, dictionary) {
//   let solutions = [];
// // check that grids are valid (empty input & nxn grid)
//   if (grid == null || dictionary == null)
//     return solutions;
  
//   let X = grid.length;
//   for (let i = 0; i < X; i++){
//     if (grid[i].length != X){
//       return solutions;
//     }
//   }
// //  return solutions;

// // convert grid and dictionary to same case 
//   convertCaseToLower(grid, dictionary);

// // check for invalid inputs (S & Q) within the grid 
//   if (!isGridValid(grid)){
//     return solutions;
//   }  

// // data structures 
//   let solutionSet = new Set();
//   let hash = createHashMap(dictionary);

//   for(let y = 0; y < X; y++){
//     for(let x = 0; x < X; x++){
//       let word = "";
//       let visited = new Array(X).fill(false).map(()=> new Array(X).fill(false));
//       findWords(word, x, y, grid, visited, hash, solutionSet);
//     }
//   }
//   // make solution set an array 
//   solutions = Array.from(solutionSet);

//   return solutions;
// }

// // convert to lower case 
// convertCaseToLower = function(grid, dict){
//   for(let i = 0; i < grid.length; i++){
//     for(let j = 0; j < grid[i].length; j++){
//       grid[i][j] = grid[i][j].toLowerCase(); 
//     }
//   }
//   for(let i = 0; i < dict.length; i++){
//     dict[i] = dict[i].toLowerCase();
//   }
// }

// // check for invalid inputs (S & Q)
// isGridValid = function(grid){
//   regex = /(st|qu)|[a-prt-z]/ ;
//   for(let i = 0; i < grid.length; i++){
//     for(let j = 0; j < grid[i].length; j++){
//       console.log(grid[i][j].match(regex));
//       if(!grid[i][j].match(regex)){
//         return false;
//       }
//     }
//   }
//   return true;
// }

// //
// findWords = function(word, y, x, grid, visited, hash, solutionSet){
//   let adjMatrix = [[-1,-1], [-1,0] , 
//   [-1,1] , [0,1] , 
//   [1,1] , [1,0] , 
//   [1,-1] , [0,-1]];

//   if (y < 0 || x < 0 || y >= grid.length || x >= grid.length || visited[y][x] == true){
//     return;
//   }
//   word += grid[y][x];

//   if(isPrefix(word,hash)){
//     visited[y][x] = true;

//     if(isWord(word, hash)){
//       if(word.length >= 3){
//         solutionSet.add(word);
//       }
//     }
//     for(let i = 0; i < 8; i++){
//       findWords(word, y + adjMatrix[i][0], x + adjMatrix[i][1], grid, visited, hash, solutionSet);
//     }
//   }
//   visited[y][x] = false;
// }

// isPrefix = function(word, hash){
//   return hash[word] != undefined;
// }

// createHashMap = function(dictionary){
//   var dict = {};
//   for(let i = 0; i < dictionary.length; i++){
//     dict[dictionary[i]] = 1;
//     let wordlength = dictionary[i].length;
//     var str = dictionary[i];
//     for(let j = wordlength; wordlength > 1; wordlength--){
//       str = str.substr(0,wordlength-1);
//       if(str in dict){
//         if(str == 1){
//           dict[str] = 1;
//         }
//       }
//       else{
//         dict[str] = 0;
//       }
//     }
//   }
//   return dict;
// }

// isWord = function(word,hash){
//   return hash[word] != undefined;
// }

// const grid = [['T', 'W', 'Y', 'R'],
//               ['E', 'N', 'P', 'H'],
//               ['G', 'Z', 'Qu', 'R'],
//               ['O', 'N', 'T', 'A']];
// const dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
//                     'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
//                     'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar'];

// console.log(exports.findAllSolutions(grid, dictionary));

/**
 * Name: Sara Braddock
 * Credit to: softnami.com "Trie Tree with JavaScript" (2020)
 * Credit to: GeeksforGeeks.com "Boggle (Find all possible words in a board
 * of characters) | Set 1" (2020)
 *
 * Given a Boggle board and a dictionary, returns a list of available words in
 * the dictionary present inside of the Boggle board.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @returns {string[]} solutions - Possible solutions to the Boggle board.
 */
// Collaborated with Deontae Smith, Doron Smith, Yasmin Senior, Chad Toomer, and Shane Oliver

exports.findAllSolutions = function(grid, dictionary) {
  let solutions = [];

  if (grid == null || dictionary == null) {
    return solutions;
  }


  const N = grid.length;
  for (let i=0; i < N; i++) {
    if (grid[i].length != N) {
      return solutions;
    }
  }

  lowercaseFunctionHelp(grid, dictionary);

  const hash = newHash(dictionary);
  const solutionSet = new Set();

  for (let yCoor = 0; yCoor < N; yCoor++) {
    for (xCoor = 0; xCoor < N; xCoor++) {
      const word = '';
      const visited = new Array(N).fill(false).map(() =>
        new Array(N).fill(false));
      findWords(word, yCoor, xCoor, grid, visited, hash, solutionSet);
    }
  }

  solutions = Array.from(solutionSet);
  return solutions;
};

lowercaseFunctionHelp = function(grid, dict) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = grid[i][j].toLowerCase();
    }
  }

  for (let i = 0; i < dict.length; i++) {
    dict[i] = dict[i].toLowerCase();
  }
};

findWords = function(word, yCoor, xCoor, grid, visited, hash, solutionSet) {
  const neighborCoor = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];

  if (
    yCoor < 0 ||
    xCoor < 0 ||
    yCoor >= grid.length ||
    xCoor >= grid.length ||
    visited[yCoor][xCoor] == true
  ) {
    return;
  }

  word += grid[yCoor][xCoor];

  if (hash[word] != undefined) {
    visited[yCoor][xCoor] = true;

    if (hash[word] == 1) {
      if (word.length >= 3) solutionSet.add(word);
    }

    for (let i = 0; i < 8; i++) {
      findWords(word, yCoor + neighborCoor[i][0], xCoor + neighborCoor[i][1],
          grid, visited, hash, solutionSet);
    }
  }
  visited[yCoor][xCoor] = false;
};


newHash = function(dictionary) {
  const dict = {};
  for (let i = 0; i < dictionary.length; i++) {
    dict[dictionary[i]] = 1;
    let wordlength = dictionary[i].length;
    let str = dictionary[i];

    for (wordlength; wordlength > 1; wordlength--) {
      str = str.substr(0, wordlength - 1);

      if (str in dict) {
        if (str == 1) {
          dict[str] = 1;
        }
      } else {
        dict[str] = 0;
      }
    }
  }
  return dict;
};

const grid = [['T', 'W', 'Y', 'R'],
  ['E', 'N', 'P', 'H'],
  ['G', 'Z', 'Qu', 'R'],
  ['St', 'N', 'T', 'A']];
const dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
  'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
  'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar'];

console.log(exports.findAllSolutions(grid, dictionary));
