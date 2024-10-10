import React, { useState } from 'react'
import Table from './Table';

const GenerateTable = () => {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.rows.value);
        setRows(e.target.rows.value);
        setCols(e.target.columns.value);
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor='rows'>Rows</label>
                    <input type='number' name='rows' id='rows'></input>
                </div>
                <div>
                    <label htmlFor='columns'>Columns</label>
                    <input type='number' name='columns' id='columns'></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
            {rows} {cols}
            <Table rows={rows} cols={cols}/>
        </div>
    )
}

export default GenerateTable
