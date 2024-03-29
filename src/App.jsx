import PostsList from './features/posts/PostsList'
import AddPostsForms from './features/posts/AddPostsForms'
import SinglePostPage from './features/posts/SinglePostPage'
import EditPostForm from './features/posts/EditPostForm'
import Layout from './components/Layout'
import { Routes,Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostsForms />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App
