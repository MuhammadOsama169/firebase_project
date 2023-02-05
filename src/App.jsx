import { useState } from 'react'
import PostsList from './features/posts/PostsList'
import AddPostsForms from './features/posts/AddPostsForms'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <AddPostsForms/>
      <PostsList/>
    </main>
  )
}

export default App
