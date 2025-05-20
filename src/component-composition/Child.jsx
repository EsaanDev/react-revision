import React from 'react'

const Child = ({onUpdateMessage}) => {

    const handleClick = () => {
        onUpdateMessage("Update from Child 🚀");
    }

  return (
    <div>
        <button className='bg-blue-400 p-4 rounded mb-3' onClick={handleClick}>update parent Msg</button>
    </div>
  )
}

export default Child