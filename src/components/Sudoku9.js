import axios from "axios";
import { useEffect, useState } from "react";
import '../components/Sudoku9.css';
import SudokuTable from "./SudokuTable";


const Sudoku9 = (props)=>{

    const [matrixKeys, setMatrixKeys] = useState([])
    const [sudokuValue, setSudokuValue] = useState([])

    const [responseFromSvc, setResponseFromSvc] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const isLocal = false;

    const fetchMatrix = () =>{
        setIsLoading(true);

        const payLoad= {
                'unsolvedMatrix': sudokuValue
            }

            let url = 'https://sudoku-solver-app-rewt.onrender.com/solveSudoku';

            if(isLocal){
                url = 'http://localhost:8080/solveSudoku';
            }
            
    
            axios.post(url,payLoad).then((response)=>{
                if(response?.data?.hasError === false){
                    setSudokuValue(response.data.solvedMatrix);
                    setResponseFromSvc(response.data);
                }
                else{
                    throw new Error("Some exception occured")
                }
            }).catch((error)=>{
                setResponseFromSvc(error?.response?.data);
            }).finally(()=>{
                
                setIsLoading(false);
            })

    
    }

    const initSudokuValue = () =>{
        let initSudokuValue = []
        for(let i =0;i<9;i++){
            let initSudokuRow = []
            for(let j=0;j<9;j++){
                initSudokuRow.push('')
            }
            initSudokuValue.push(initSudokuRow);
        }
        setSudokuValue(initSudokuValue);
    }

    useEffect(()=>{

        let initMatrixKeys = []
        for(let i=1;i<=9;i++){
            let initMatrixKeysRow = []            
            for(let j =1 ; j<=9;j++){
                initMatrixKeysRow.push( i.toString() + j.toString());
            }
            initMatrixKeys.push(initMatrixKeysRow);
        }
        initSudokuValue();
        setMatrixKeys(initMatrixKeys);

    },[])

    const handleInputChange = (e, rowcol) =>{

        let row = rowcol.substring(0,1);
        let col = rowcol.substring(1);

        let newSudokuValue = [...sudokuValue];
        newSudokuValue[row-1][col-1] = e.target.value;

        setSudokuValue(newSudokuValue);
    }

    const submit = (e) => {
        e.preventDefault();
        fetchMatrix();
    }

    const reset = () =>{
        initSudokuValue();
        setResponseFromSvc(null);
    }


    return(
        <div className="row">
            <SudokuTable reset={reset} isLoading={isLoading} matrixKeys= {matrixKeys} sudokuValue = {sudokuValue} handleInputChange = {handleInputChange} responseFromSvc = {responseFromSvc} submit = {submit}/>
        </div>
        
    )
}

export default Sudoku9;