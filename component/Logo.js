/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Logo = () => {
  return (
    <div className="logoFull">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="IMGbase">
          <img className="logo logo_bg" src="./images/logo_bg.webp" />
        </div>
        <div className="IMGbase">
          <img className="logo logo_ball" src="./images/logo_ball.webp" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
