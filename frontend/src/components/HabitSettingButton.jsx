import { useState } from "react";
import HabitModal from "./Modals/HabitModal";

function HabitSettingButton() {
    const [habitModalOpen, setHabitModalOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setHabitModalOpen(true)}
                className={`px-4 py-1 mr-4 border border-black font-bold rounded-full text-black bg-white`}>
                {"Add Habit"}
            </button>
            <HabitModal
                open={habitModalOpen}
                onClose={() => setHabitModalOpen(false)}
            />
        </div>
    )
}

export default HabitSettingButton;