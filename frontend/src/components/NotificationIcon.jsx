import { AppContext } from "../contexts/AppContext";
import { useContext, useMemo } from "react";
import NewAchievmntMod from "./Modals/NewAchvmntModal";
import CouchPotatoImg from '../assets/potato.webp';
import BobaImg from '../assets/boba.jpeg'
import achievementsData from "../utils/achievements";

function NotificationIcon() {
    const { notiClick, setNotiClick, achieved, notification, setNotification } = useContext(AppContext);

    // hard coding notifications for now
    let notifs = [{name: "hi", quote: "nah id nah id", image: CouchPotatoImg}, {name: "Boba Breather", quote: "deez nuts", image: BobaImg}];
    console.log(achieved);

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
        console.log(achievement);

        // return (
            // <>
            //     {
            //         achievement && <>
            //         {notification ?
            //             <span className="material-symbols-outlined cursor-pointer"
            //                 onClick={() => setNotiClick(true)}
            //             >
            //             notifications_unread
            //         </span>
            //         : <span className="material-symbols-outlined cursor-pointer"
            //         onClick={() => setNotiClick(true)}
            //         >
            //             notifications_unread
            //         </span>}

                    
            //         <NewAchievmntMod
            //             open={notiClick}
            //             name={achievement.name}
            //             quote={achievement.quote}
            //             image={achievement.image}>
            //         </NewAchievmntMod>
            //     </>
            //     }
                return notification ?
    <>
        <span className="material-symbols-outlined cursor-pointer text-white"
        onClick={() => setNotiClick(true)}
    >
        notifications_unread
    </span>
        {achievement ? 
            <NewAchievmntMod
                open={notiClick}
                name={achievement.name}
                quote={achievement.quote}
                image={achievement.imageUrl}>
            </NewAchievmntMod>
            : 
            <NewAchievmntMod
                open={notiClick}
                name={notifs[1].name}
                quote={notifs[1].quote}
                image={notifs[1].image}>
            </NewAchievmntMod>
        }
        
    </>
    : <span className="material-symbols-outlined cursor-pointer"
        onClick={() => setNotification(true)}>
        notifications
    </span>;
            // </>
    }, [achieved, notiClick, notification]);

    return (
        <div>
            {notifications}
        </div>
    )
  }
  
  export default NotificationIcon;
  