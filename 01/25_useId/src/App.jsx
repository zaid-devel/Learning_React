import React from 'react'
import UniqueID from './Components/UniqueID'

const App = () => {
  return (
    <div>
      <UniqueID />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat necessitatibus explicabo laborum deleniti cum cupiditate, dolorum eveniet numquam debitis ducimus!</p>
      <UniqueID />
    </div>
  )
}

export default App

/*
Key Points:

Multiple Instances of UniqueID:
In the App component, two instances of the UniqueID component are rendered.
Since useId generates a unique ID for each component instance, the two UniqueID components will each receive different IDs. This ensures that the generated IDs for the email and password fields are unique for each instance.

No ID Conflicts:
Without useId, if you manually set the same IDs (e.g., id="email"), there would be conflicts between the two UniqueID components, as both would try to use the same id values for their input elements.
However, useId resolves this issue by generating distinct IDs for each component instance. This prevents the collision of IDs when there are multiple instances of UniqueID.
*/