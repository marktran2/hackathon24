import { AppContext } from "../contexts/AppContext";
import { useContext, useMemo } from "react";
import NewAchievmntMod from "./Modals/NewAchvmntModal";
import CouchPotatoImg from '../assets/potato.webp';
import BobaImg from '../assets/boba.jpeg'
import achievementsData from "../utils/achievements";

function NotificationIcon() {
    const { notiClick, setNotiClick, achieved } = useContext(AppContext);

    // hard coding notifications for now
    let notifs = [{name: "hi", quote: "nah id nah id", image: CouchPotatoImg}, {name: "Boba Breather", quote: "deez nuts", image: BobaImg}];

    const findAchievement = (name) => {
        for (const [category, list] of Object.entries(achievementsData)) {
            for (const element of list) {
                if (element.name === name) {
                    return element;
                }
            }
        }

        console.log("CODE SHOULDNT ARRIVE HERE");
        return null;
    }

    const notifications = useMemo(() => {
        const achievement = findAchievement(achieved[achieved.length - 1]);

        return (
            <>
                {
                    achievement && <>
                    <span className="material-symbols-outlined cursor-pointer"
                    onClick={() => setNotiClick(true)}
                    >
                        notifications_unread
                    </span>
                    <NewAchievmntMod
                        open={notiClick}
                        name={achievement.name}
                        quote={achievement.quote}
                        image={achievement.image}>
                    </NewAchievmntMod>
                </>
                }
            </>
        );
    }, [achieved]);

    return (
        <div>
            {notifications}
        </div>
    )
  }
  
  export default NotificationIcon;
  