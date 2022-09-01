import Link from "next/link";

const Header = () => {
  return (
    <Link href={"/"}>
      <div className="headerStyle">
        <h2 style={{margin:'10px' }}>我只是想抽牌</h2>
      </div>
    </Link>
  );
};

export default Header;
