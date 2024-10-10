import React from 'react'

const UndoableCounterHistory = ({ history }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Operaion</th>
                    <th>Old counter</th>
                    <th>New counter</th>
                </tr>
            </thead>
            <tbody>
                {
                    history.map(({operation, old, new}) => {
                        return (
                            <tr>
                                <td>{operation}</td>
                                <td>{old}</td>
                                <td>{}new</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default UndoableCounterHistory
