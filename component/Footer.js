import Link from 'next/link'
import { BsFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLine} from "react-icons/ai";


const FooterStyle = {
    backgroundColor: "bisque",
    height: "100%",
    display: "grid",
    alignItems: "center",
    boxShadow: "0px 3px 3px 5px #888888",
    zIndex: "auto"
}

const Footer = () => {

    return (
     
           
        <div style={FooterStyle} >
           
           <div><BsFacebook className="dotIcon" />
        </div>
        
        </div>




    )

}

export default Footer