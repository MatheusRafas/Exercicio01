import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { BlogMenu } from './components/BlogMenu/BlogMenu';
import { ArticleList } from './components/ArticleList/ArticleList';

function App() {
  return (
    <>
      <Header/>
      <BlogMenu/>
      <ArticleList/>
    </>
  );
}

export default App;
