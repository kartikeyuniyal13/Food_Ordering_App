import { useEffect, useState } from "react";


//Navigator.onLine does the job but ideally we’d like to constantly monitor the status of the network and we don’t want to check the value in a setInterval() periodically. Instead, we want to setup event listeners to execute functions only when the Internet connection changes.


/*function handleConnectionChange(event){
    if(event.type == "offline"){
        console.log("You lost connection.");
    }
    if(event.type == "online"){
        console.log("You are now back online.");
    }
    
    console.log(new Date(event.timeStamp));
}
window.addEventListener('online', handleConnectionChange);
window.addEventListener('offline', handleConnectionChange);*/
const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })

    }, [])

    return onlineStatus;
}
export default useOnlineStatus;