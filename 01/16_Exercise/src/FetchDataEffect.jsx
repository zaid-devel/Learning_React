import React from 'react'
import { useState, useEffect } from 'react'

const FetchDataEffect = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getdata() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      // if (data && data.length) setData(data) // or
      setData(data)
    }
  getdata() // function call
  })
  return (
    <div>
      <h1>First Post Title:</h1>
      {data.length > 0 ? <h2>{data[0].title}</h2> : <p>Loading...</p>}
    </div>
  )
}

export default FetchDataEffect

/*
Why Use data.length > 0 ? <h2>{data[0].title}</h2> : <p>Loading...</p> Instead of Just <h2>{data[0].title}</h2>?


Before Data is Fetched:

When the component is first rendered, data is an empty array ([]).
If we tried to display <h2>{data[0].title}</h2>, it would cause an error because data[0] doesn't exist yet (since data is empty at first). Accessing data[0] would lead to an undefined value, and trying to access .title on undefined would result in an error.


Conditional Rendering:

{data.length > 0 ? <h2>{data[0].title}</h2> : <p>Loading...</p>} ensures:
If data.length > 0 (i.e., if data has been fetched and is available), display the title of the first post (data[0].title).
Otherwise, display the "Loading..." message while waiting for the data to arrive.


Why We Don't Use Only <h2>{data[0].title}</h2>:

Error Handling: If you used just <h2>{data[0].title}</h2>, it would throw an error on the first render because data[0] is undefined before the data has been fetched. React tries to render data[0], but since data is initially empty, data[0] doesn't exist yet, and you get an error when trying to access title on undefined.

*/