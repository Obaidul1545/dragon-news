import { Outlet } from 'react-router';
import Header from '../components/Header';
import LetestNews from '../components/LetestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/AsideLayout/LeftAside';
import RightAside from '../components/AsideLayout/RightAside';

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="container mx-auto px-2">
          <LetestNews></LetestNews>
        </section>
        <nav className="container mx-auto px-2 my-4">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="container mx-auto px-2 my-4 grid grid-cols-12 gap-6">
        <aside className="col-span-3 sticky top-2 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky top-2 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
