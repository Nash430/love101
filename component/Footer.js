
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'



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
           
            <div className='allfooter'>
                <a href="https://www.facebook.com/whoyouare.divination" ><img className="facebook" src="./images/icon-fb.png"></img></a>
                <a href="https://www.instagram.com/whoyouare_divination/"><img className="instagram" src="./images/icon-ig.png"></img></a>
                <a href="https://www.youtube.com/channel/UCqoThkmy2Jc0UwdZYklDVFw"><img className="youtube" src="./images/icon-yt.png"></img></a>
          </div>
         
        </div>

 


    )

}

export default Footer