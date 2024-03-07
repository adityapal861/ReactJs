import React from 'react'
function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}

const Form = () => {
  return (
    <form>
        <input placeholder='write something'></input>
        <button onClick={handleFormSubmit}>Submit</button>
    </form>
  )
}

export default Form
 