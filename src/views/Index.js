import React from 'react'
import { Table } from 'reactstrap'

const Index = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Time Slots</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>9:00 AM</td>
                </tr>
                <tr>
                    <td>10:00 AM</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Index