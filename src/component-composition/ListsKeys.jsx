import React from 'react'

const ListsKeys = () => {
    const numbers = [1, 3, 5, 6];
  return (
    <div>
    <ul>
        {numbers.map((num, index) => (
            <li key={index}>{num}</li>
        ))}
    </ul>



 
    </div>
  )
}

export default ListsKeys