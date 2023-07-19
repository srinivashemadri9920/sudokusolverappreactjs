const SudokuTable = ({matrixKeys, handleInputChange, responseFromSvc, submit, sudokuValue, isLoading, reset}) =>{
    return(
        <form onSubmit={submit}>
            <div id="sudokuContent " className="col l4 offset-l4 m6 offset-m3 s12">
            <div className="card brown lighten-2">
                <div className="card-content white-text">
                    <h4 className="center-align card-title">Sudoku 9 X 9</h4>
                    <h6 className="center-align">In every cell please enter numbers only ranging from 1 to 9</h6>
                    <hr></hr>

                        <table id="sudokuTable">
                            <thead>
                                <tr>
                                <th></th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                </tr>
                            </thead>
                            <tbody>
                            {matrixKeys.map((row, index1)=>(
                                <tr key={index1}>
                                    <th>{index1+1}</th>
                                    {
                                        row.map((val, index2)=>(
                                            <td key={val}>
                                                <input 
                                                    value={sudokuValue[index1][index2]}
                                                    onChange={(e)=>{handleInputChange(e,val)}} 
                                                    id="sudokuCustomInput"  
                                                    pattern="[1-9]"
                                                    type="text" />
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))}
                            </tbody>
                        </table>
                </div>
                <div className="card-action ">
                    {
                        responseFromSvc?.hasError && (
                            <div id="errorContent">
                                <h6 className="red-text text-darken-4 center-align"> <b>{responseFromSvc.errorMessage}</b> </h6>
                            </div>
                        )
                    }
                    <div id="footerControls" className="center-align">
                        {
                            !isLoading? (
                                <div>
                                    <button className="btn waves-effect waves-light brown darken-3" type="submit">Solve Sudoku  </button>
                                    <button className="btn waves-effect waves-light brown darken-3" type="button" onClick={reset}>Reset Sudoku  </button>
                                </div>
                                ): (
                                    <div className="preloader-wrapper small active">
                                        <div className="spinner-layer spinner-green-only">
                                        <div className="circle-clipper left">
                                            <div className="circle"></div>
                                        </div><div className="gap-patch">
                                            <div className="circle"></div>
                                        </div><div className="circle-clipper right">
                                            <div className="circle"></div>
                                        </div>
                                        </div>
                                    </div>
                                )
                        }
                        <p id="developerDetails" className="right-align grey-text text-lighten-2">Developed by - Srinivas Hemadri</p>
                    </div>
                    
                </div>
                </div>
            </div>
        </form>
    )
}

export default SudokuTable;