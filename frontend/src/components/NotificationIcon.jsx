import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";

function NotificationIcon() {

    const { notification, setNotification } = useContext(AppContext);

    return notification ? 
    <span className="material-symbols-outlined cursor-pointer"
    onClick={()=>setNotification(false)}
    >
        notifications_unread
    </span>
    : <span className="material-symbols-outlined cursor-pointer">
        notifications
    </span>;
  }
  
  export default NotificationIcon;
  