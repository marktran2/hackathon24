import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import ocarinaSfx from "../../utils/audio";
import { getAISarcasm } from "../../services/openAIService";

export default function SimpleBackdrop({ open, onClose, name, image }) {
  const { notiClick, setNotiClick } = useContext(AppContext);
  const [sfxOn, setSfxOn] = useState(true);
  const [sarcasm, setSarcasm] = useState("");

  ocarinaSfx.addEventListener("timeupdate", () => {
    if (ocarinaSfx.currentTime >= 8) {
      setSfxOn(false);
      setTimeout(() => {
        ocarinaSfx.pause();
        ocarinaSfx.currentTime = 0;
      }, 1400);
    }
  });

  useEffect(() => {
    const getSarcasm = async () => {
      const quote = await getAISarcasm(name);
      setSarcasm(quote.content);
    };
    getSarcasm();
  }, [name]);

  if (open) {
    ocarinaSfx.play();
  }

  return (
    <Dialog
      className="relative z-10"
      open={notiClick}
      onClose={() => {
        setSfxOn(true);
        ocarinaSfx.pause();
        ocarinaSfx.currentTime = 0;
        onClose;
        setNotiClick(false);
      }}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Transition show={notiClick} appear={true}>
            <DialogPanel
              transition
              className="transition duration-[8000ms] ease-in data-[closed]:opacity-0 border-black border relative transform overflow-hidden rounded-lg bg-white sm:w-full sm:max-w-3xl"
            >
              <div className="mt-3 pt-10 text-center sm:ml-4 sm:mt-0 sm:text-left flex justify-center items-center py-5">
                <DialogTitle
                  as="h1"
                  transition
                  className={`${
                    sfxOn ? "hidden" : "fixed"
                  } text-4xl font-semibold leading-6 text-gray-900`}
                >
                  🏆 New Achievement Unlocked! 🏆
                </DialogTitle>
              </div>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col justify-center items-center">
                <img
                  className="block mx-auto h-60"
                  src={image}
                  alt="Achievement Symbol"
                />
                <div className="mt-3 pt-6 text-center sm:ml-4 sm:mt-0 sm:text-left flex justify-center items-center py-5">
                  <DialogTitle
                    as="h1"
                    className={`${
                      sfxOn ? "hidden" : "fixed"
                    } text-2xl font-semibold leading-6 text-gray-900`}
                  >
                    ✨💫 {name} 💫✨
                  </DialogTitle>
                </div>
                <div
                  className={`${
                    sfxOn ? "hidden" : "relative"
                  } ml-4 text-xl italic text-gray-900`}
                >
                  {sarcasm}
                </div>
              </div>
            </DialogPanel>
          </Transition>
        </div>
      </div>
    </Dialog>
  );
}
