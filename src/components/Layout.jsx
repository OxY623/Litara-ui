import { ArrowRight, Heart } from 'lucide-react';
import { useContext, useState } from 'react';
import { Outlet } from 'react-router';
import { ButtonShowDonationContext } from '../App';
import { Button } from './Button';
import DonationTon from './DonationTon';
import { Header } from './Header';
import { Navigation } from './Navigation';

function Layout() {
  const [expand, setExpand] = useState(false);
  const [showDonation, handleClickShowDonation] = useContext(
    ButtonShowDonationContext,
  );

  return (
    <div className="min-h-screen w-auto max-w-[1400px] mx-auto flex flex-col bg-gray-50 px-4">
      <Header />

      <div className="flex pt-16 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`lg:flex hidden shrink-0 transition-all overflow-hidden duration-300 h-auto flex-col border-r border-gray-200 bg-white p-4 ${
            expand ? 'w-[286px]' : 'w-[100px]'
          }`}
        >
          <Navigation statusSidebar={expand} />
          <Button
            variant="secondary"
            disabled={false}
            handleClick={() => setExpand((prev) => !prev)}
            name={''}
            icon={
              <ArrowRight
                className={`${expand ? 'rotate-180' : 'rotate-0'} transition-transform`}
              />
            }
          />
        </aside>

        {/* Mobile nav */}
        <div className="lg:hidden w-1/4 sm:w1/3 border-b border-gray-200 bg-white p-3 shrink-0">
          <Navigation />
        </div>

        {/* Main */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <Outlet />

          {showDonation && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 max-w-md w-full">
                <div className="text-center">
                  <Heart className="w-16 h-16 mx-auto text-red-600 mb-4" />
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    Support the Project
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    OranNote is a modern, minimalist platform designed to help
                    people think clearer, capture ideas faster, and stay
                    organized in a digital-first world. Your support helps us
                    improve the experience, ship new features, and keep the
                    platform accessible for everyone.
                  </p>

                  <div className="bg-gradient-to-r from-red-500 via-white to-green-500 p-1 rounded-lg mb-6">
                    <div className="bg-white rounded-lg p-6">
                      <p className="font-bold text-gray-900 mb-2">
                        Donation details:
                      </p>
                      <DonationTon />
                    </div>
                  </div>

                  <button
                    onClick={() => handleClickShowDonation(false)}
                    className="w-full bg-red-600 text-white font-bold px-6 py-3 rounded-lg border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Layout;
