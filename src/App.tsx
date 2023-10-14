// import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Expert from './pages/expert/Expert';
import Home from './pages/home/Home';
import './styles/global.scss';

function App() {
  const LayoutMain = () => {
    return (
      <div className="main">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const LayoutLogin = () => {
    return <div className="main">Login</div>;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutMain />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'expert',
          element: <Expert />,
        },
        {
          path: 'aboutExpert',
          element: <Expert />,
        },
        {
          path: 'aboutUs',
          element: <Expert />,
        },
        {
          path: 'blog',
          element: <Expert />,
        },
        {
          path: 'blogMore',
          element: <Expert />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
