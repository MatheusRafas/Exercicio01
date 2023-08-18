import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { BlogMenu } from './components/BlogMenu/BlogMenu';
import { ArticleList } from './components/ArticleList/ArticleList';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Header/>
      <BlogMenu/>
      <div className='container'>
        <ArticleList/>
        <Sidebar/>
      </div>
  
    </>
  );
}

export default App;
