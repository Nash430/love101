import Link from "next/link";
import React from "react";
class Header extends React.Component {
  render() {
    const { headerCONTENT } = this.props;
    return (
        <div className="headerStyle">
          <div style={{ margin: "10px" }}>
            {headerCONTENT}
          </div>
        </div>
    );
  }
}

export default Header;
