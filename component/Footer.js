/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Footer = () => {
  return (
    <div className="FooterStyle">
      <div className="iconImg">
        <Link href='https://www.youtube.com/channel/UCqoThkmy2Jc0UwdZYklDVFw'><img src="./images/icon_YT.webp" /></Link>
        <Link href='https://open.firstory.me/user/whoyouaredivination/platforms'><img src="./images/icon_podcast.webp" /></Link>
        <Link href='https://www.instagram.com/whoyouare_divination/'><img src="./images/icon_IG.webp" /></Link>
        <Link href='https://www.facebook.com/whoyouare.divination'><img src="./images/icon_facebook.webp" /></Link>
        <Link href='https://line.me/R/ti/p/%40373nokcl'><img src="./images/icon_line.webp" /></Link>
      </div>
    </div>
  );
};

export default Footer;
