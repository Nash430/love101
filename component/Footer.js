import Link from 'next/link'
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLine} from "react-icons/fa";


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
           
          <a href="https://www.facebook.com/whoyouare.divination"><BsFacebook className="footerIcon" /></a>
         <a href="https://www.instagram.com/whoyouare_divination/"> <AiOutlineInstagram className="footerIcon"/></a>
         <a href="https://line.me/R/ti/p/%40373nokcl">< FaLine className="footerIcon" /></a> 
         
        </div>




    )

}

export default Footer