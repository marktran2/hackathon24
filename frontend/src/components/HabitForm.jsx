import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function HabitForm() {
return (
  <form>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5">
          <div className="sm:col-span-1">
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
        </div>
    </div>
  </form>
)
}