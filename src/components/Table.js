import React from 'react'
import neeet from '../stores/vampirStore'
import "./Table.css"


const Table = ({data}) => {
    return(
      <table>
        <thead>
          <tr>
            <th><h3>Name</h3></th>
            <th><h3>Superpower</h3></th>
            <th><h3>Age</h3></th>
          </tr>
        </thead>
        <tbody>
        {data.map(i => {
          return(
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.superpower}</td>
              <td>{i.age}</td>

            </tr>


          );


        })}
        </tbody>
      </table>

    );

}

export default Table;