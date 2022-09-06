import Link from "next/link";
import React from "react";
class Header extends React.Component {

  render(){
    const { headerTEXT } = this.props;
    return(
      <Link href={"/"}>
      <div className="headerStyle">
        <h2 style={{ margin: "10px" }}>{headerTEXT}</h2>
      </div>
    </Link>
    )
  }


}

export default Header;