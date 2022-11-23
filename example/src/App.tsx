import React from 'react'

import { ExampleComponent, Oliver } from '@olivercera/react-oliver-lib'
import '@olivercera/react-oliver-lib/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <Oliver name="Maria" />
    </div>
  )
}

export default App
