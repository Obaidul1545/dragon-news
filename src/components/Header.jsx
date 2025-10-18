import { format } from 'date-fns';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-5">
      <img src={logo} alt="" className="w-120" />
      <p className="text-accent">Journalism Without Fear or Favour</p>

      <p className="text-accent font-semibold">
        <span>{format(new Date(), 'eeee, MMMM MM, yyyy')}</span>
      </p>
    </div>
  );
};

export default Header;
