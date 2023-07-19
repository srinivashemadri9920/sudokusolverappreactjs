// import { useState } from "react";
// import Sudoku9 from "../components/Sudoku9";

// const SudokuUtil = ()=>{

//     let matrix = [];

//     function isSafe(row, col, num){

//         for(let i=0;i<9;i++){
//             if(num === matrix[i][col])
//                 return false;
//         }
//         for(let i=0;i<9;i++){
//             if(num === matrix[row][i])
//                 return false;
//         }

//         let xrow = row - row%3;
//         let xcol = col - col%3;

//         for(let i=0;i<3;i++){
//             for(let j=0;j<3;j++){
//                 if(num === matrix[i+ xrow][j+xcol])
//                     return false;
//             }
//         }
//         return true;
//     }


//     function doSudoku(row, col){

//         if(row === 8 && col === 9)
//             return true;

//         if(col > 8){
//             row = row + 1;
//             col = 0;
//         }

//         if(matrix[row][col] > 0)
//             return doSudoku(row, col+1);

//         for(let i=1;i<=9;i++){
//             if(isSafe(row, col, i)){
//                 matrix[row][col] = i;
//                 if(doSudoku(row, col+1))
//                     return true;
//             }
//             matrix[row][col] = 0;
//         }
//         return false;
//     }


//     const solveSudoku = (sudokuMatrix) =>{

//         matrix = sudokuMatrix;

//         let isPuzzleSolvable  = doSudoku(0,0);

//         if(isPuzzleSolvable){
//             return matrix;
//         }
//         else{
//             return sudokuMatrix;
//         }

//     }

//     return(
//         <div>
//             <Sudoku9 solveSudoku = {solveSudoku}/>
//         </div>
//     )

// }

// export default SudokuUtil