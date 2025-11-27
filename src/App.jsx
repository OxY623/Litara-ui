import { createContext, useState } from 'react';
import './App.css';
import Pages from './pages';

const ButtonShowDonationContext = createContext([true, () => {}]);

function App() {
  const [showDonation, setShowDonation] = useState(true);

  const handleClickShowDonation = (value) => {
    setShowDonation(value);
  };
  return (
    <ButtonShowDonationContext.Provider
      value={[showDonation, handleClickShowDonation]}
    >
      <Pages />
    </ButtonShowDonationContext.Provider>
  );
}

export default App;
export { ButtonShowDonationContext };
