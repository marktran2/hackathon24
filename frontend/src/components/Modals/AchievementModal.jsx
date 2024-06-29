import { useState, useContext } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { AppContext } from '../../contexts/AppContext';
import achievementsData from '../../utils/achievements';

const AchievementModal = ({
  name, image, quote, open, onClose
}) => {
  return (
    <Dialog className="relative z-10" open={open} onClose={onClose}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="border-black border relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex justify-center items-center py-5">
              <DialogTitle as="h1" className="text-base font-semibold leading-6 text-gray-900">
                {name}
              </DialogTitle>
            </div>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex justify-center items-center">
              <img className="block mx-auto h-24 sm:mx-0 sm:shrink-0" src={image} alt="Achievement Symbol" />
              <div className="ml-4">{quote}</div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="bg-gray-800 mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-600 sm:mt-0 sm:w-auto"
                onClick={onClose}
                data-autofocus
                disabled
              >
                Unlocked!
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default AchievementModal;