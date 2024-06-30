import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "../assets/logo.png";
import { classNames } from "../utils/cssHelpers";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import InfoModal from "./Modals/InfoModal";
import NotificationIcon from "./NotificationIcon";

const Navbar = () => {
  const { currency, calculateCurrency } = useContext(AppContext);
  const [currencyInfoModalOpen, setCurrencyInfoModalOpen] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigation = [
    { name: "Dashboard", path: "/", current: pathname === "/" },
    {
      name: "Achievements",
      path: "/achievements",
      current: pathname === "/achievements",
    },
  ];

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 w-screen">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img className="h-8 w-auto" src={Logo} alt="Your Company" />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <p
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "text-xl select-none cursor-pointer rounded-md px-3 py-2 font-medium"
                          )}
                          onClick={() => navigate(item.path)}
                        >
                          {item.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="w-24 rounded-md px-3 py-2 font-medium text-xl"
                    onClick={() => setCurrencyInfoModalOpen(true)}
                  >
                    {`🍂 ${calculateCurrency()}`}
                  </button>
                </div>
                <div className="pl-4 flex sm:static">
                      <NotificationIcon/>
                </div>
              </div>
            </div>
            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
      <InfoModal
        open={currencyInfoModalOpen}
        onClose={() => setCurrencyInfoModalOpen(false)}
        title="Our habit currency system"
      >
        <p className="text-lg text-gray-800">
          🍂s can be unlocked by meeting unhealthy milestones! By failing to
          complete your daily tasks you can work towards completing an
          achievement, which will reward you with 🍂!
        </p>
        <br />
        <p className="text-lg text-gray-800">
          The more you complete your daily goals, the less 🍂 you will have! If
          you keep it up, any existing 🍂s you have may eventually begin to fade
          as well...
        </p>
        <br />
        <p className="text-lg text-gray-800">
          So whatever your goals are, best of luck in being the <s>un</s>
          healthiest you can be!
        </p>
      </InfoModal>
    </>
  );
};

export default Navbar;
