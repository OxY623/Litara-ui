import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="bg-white w-full px-4 py-2 flex gap-x-2 h-16 fixed top-0 left-0 items-center shadow-2xl z-10">
      <img src={logo} alt='Logo "OranNote"' className="size-12 rounded-full" />
      <h1 className="m-0 p-0 inline font-bold">
        <span className="text-orange-600">Oran</span>Note
      </h1>
    </header>
  );
}

export { Header };
