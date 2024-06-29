import { useState, useContext } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { AppContext } from '../../contexts/AppContext';
import achievementsData from '../../utils/achievements';

export default function Example({ open, onClose }) {
  const [inputValue, setInputValue] = useState('');
  const { addHabit } = useContext(AppContext);

  const [category, setCategory] = useState('diet');  
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddGoal = () => {
    if (inputValue.trim() !== '') {
      var object = JSON.parse(localStorage.getItem('habits'));
      length = 0
      if (object != null) {
        length = object.length
      }

      const newHabit = {
        id: length,
        displayString: inputValue,
        streak: 2,
        category: category,
        completed: 'attempting'
      }

      addHabit(newHabit);
      setInputValue('');
      onClose();
    }
  }

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
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    Add Habit
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Adding a habit is cool, so make sure to make it realistic!
                    </p>

                    <form>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5">
                        <div className="sm:col-span-1">
                          <div className="mt-2">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              onChange = {(e) => setInputValue(e.target.value)}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Select below */}
                      <div className="flex flex-col">
                        <label htmlFor="example-select" className="text-sm font-medium text-gray-700">Select Category</label>
                        <select
                          id="select-achievement"
                          name="select-achievement"
                          value={category}
                          onChange={handleChange}
                          className="block w-full mt-1 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          {Object.keys(achievementsData).map((category, index) => (
                              <option key={index} value={`${category}`}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                              </option>
                            ))}
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                onClick={handleAddGoal}
              >
                Add Goal
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
                data-autofocus
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}