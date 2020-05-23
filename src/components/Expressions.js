import React from 'react'

const Expressions = () => {
  const name = 'Bob Cobb';
  const age = 23;
  const loading = false;
  const showName = false;

  const myInfo = () => {
    return 'information';
  }

  return (
    <div>
      <p>
        {name}, my age is {age + 1}
      </p>
      <p>
        {`I want some... ${myInfo()}, please.`}
      </p>
      {loading ? <h4>Loading...</h4> : <p>All finished</p>}
      <h3>
        {showName && `my name is ${name}.`}
      </h3>
    </div>
  )
}

export default Expressions
