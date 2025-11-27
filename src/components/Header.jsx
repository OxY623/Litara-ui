import { Heart } from 'lucide-react';
import { useContext } from 'react';
import { ButtonShowDonationContext } from '../App';
import logo from '../assets/logo.png';

function Header() {
  const [_, handleClickShowDonation] = useContext(ButtonShowDonationContext);
  return (
    <header className="bg-white w-full px-7 py-2 flex  h-16 fixed top-0 left-0 items-center shadow-2xl z-10 justify-between">
      <div className="flex gap-x-2 items-center">
        <img
          src={logo}
          alt='Logo "OranNote"'
          className="size-12 rounded-full"
        />
        <h1 className="m-0 p-0 inline font-bold">
          <span className="text-orange-600">Oran</span>Note
        </h1>
      </div>

      <button
        onClick={() => handleClickShowDonation(true)}
        className="flex items-center gap-2 bg-orange-600 text-white font-bold px-4 py-2 rounded-lg border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
      >
        <Heart className="w-4 h-4" />
        <span className="hidden sm:inline">Support</span>
      </button>
    </header>
  );
}

export { Header };
