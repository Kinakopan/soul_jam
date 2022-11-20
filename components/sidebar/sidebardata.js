import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons/faMessage'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser'

export const SideBarData = [
    {
    title:"My Feed",
    icon: <FontAwesomeIcon icon={faMessage}/>,
    link:"/",
    },
    {
    title:"Profile",
    icon: <FontAwesomeIcon icon={faUser}/>,
    link:"/profile",
    }
];