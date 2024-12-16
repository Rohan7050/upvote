import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ArticleList from './pages/ArticleList/ArticleList.component';
import LayoutContainer from './components/LayoutContainer/LayoutContainer.component';
// import ArticleDetails from './pages/ArticleDetails/ArticleDetails.component';
import { data } from './data';
import { setInitialState } from './feature/articleSlice';
import store from './app/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutContainer/>,
    children: [
      {
        index: true,
        element: <ArticleList/>,
      }
    ]
  }
])

function App() {
  store.dispatch(setInitialState(data));
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
