import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";
import NewAchievmntMod from "./Modals/NewAchvmntModal";
import CouchPotatoImg from '../assets/potato.webp';
import BobaImg from '../assets/boba.jpeg'

function NotificationIcon() {

    const { notification, setNotification, notiClick, setNotiClick} = useContext(AppContext);


    // hard coding notifications for now
    let notifs = [{name: "hi", quote: "nah id nah id", image: CouchPotatoImg}, {name: "Boba Breather", quote: "deez nuts", image: BobaImg}];


    return notification ? 
    <>
    <span className="material-symbols-outlined cursor-pointer"
    onClick={()=>setNotiClick(true)}
    >
        notifications_unread
    </span>
    <NewAchievmntMod
    open={notiClick}
    name={notifs[1].name}
    quote={notifs[1].quote}
    image={notifs[1].image}>
    </NewAchievmntMod>
    </> 
    : <span className="material-symbols-outlined cursor-pointer"
    onClick={setNotification(true)}>
        notifications
    </span>;
  }
  
  export default NotificationIcon;
  