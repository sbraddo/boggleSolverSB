const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe('Boggle Solver tests suite:', () => {
  test('Normal input', () => {
      let grid = [['A', 'B', 'C', 'D'],
                    ['E', 'F', 'G', 'H'],
                    ['S', 'J', 'K', 'L'],
                    ['M', 'N', 'O', 'P']];
      let dictionary = ['ABCD', 'ABFG', 'PLHG', 'MOPEY'];
      let expected = ['ABCD', 'ABFG', 'PLHG'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Problem contraints, Qu', () => {
      let grid = [['A', 'B', 'C', 'D'],
                    ['E', 'F', 'G', 'H'],
                    ['QU', 'J', 'K', 'L'],
                    ['M', 'N', 'O', 'P']];
      let dictionary = ['ABCD', 'EFGH', 'PLHD', 'MOPEY', 'QUJK'];
      let expected = ['ABCD', 'PLHD', 'QUJK'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

  // describe('Normal input', () => {
  //   test("Normal 2 x 2 grid", () => {
  //     let grid = [["A", "B", "C"], ["D", "E", "F"]];
  //     let dict = ["ABC", "SENT", "MONL"];
  //     let expected = ["ABC"];
  //     let solutions = boggle_solver.findAllSolutions(grid, dict);
  //     lowercaseStringArray(expected);
  //     lowercaseStringArray(solutions);
  //     expect(solutions.sort()).toEqual(expected.sort());
  //   });
    
  // });

  
  // describe('Problem contraints', () => {
  //   // Cases such as Qu
  //   test('Normal input', () =>{
  //     let grid = [["A", "QU", "A"], ["ST", "I", "E"]];
  //     let dict = ["AQUA"];
  //     let solutions = boggle_solver.findAllSolutions(grid, dict);
  //     lowercaseStringArray(solutions);
  //     lowercaseStringArray(dict);
  //     expect(solutions.sort()).toEqual(dict.sort());
  //   });
    
  // });

  
  describe('Input edge cases', () => {

    // Example Test using Jess
    test('Dictionary is empty', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'B', 'C', 'D'],
                    ['E', 'F', 'G', 'H'],
                    ['I', 'J', 'K', 'L'],
                    ['M', 'N', 'O', 'P']];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Dictionary contains invalid input', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'B', 'C', 'D'],
                    ['E', 'F', 'G', 'H'],
                    ['S', 'J', 'K', 'L'],
                    ['M', 'N', 'O', 'P']];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Dictionary is not N x N', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'B', 'C', 'D'],
                    ['E', 'F', 'G', 'H'],
                    ['S', 'J', 'K', 'L'],
                    ['M', 'N', 'O']];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });
});
