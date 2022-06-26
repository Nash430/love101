import Link from 'next/link'

const headerStyle = {
    backgroundColor: "bisque",
    height: "100%",
    display: "grid",
    alignItems: "center",
    boxShadow: "0px 3px 3px #888888",
    zIndex: "auto",
    FontSize: "80%"
}

const Header = () => {

    return (
        
        <div style={headerStyle}>
            <title>我只是想抽牌</title>
           <Link href={"/"} ><h2 style={{ color: "#d19a20" }}>我只是想抽牌</h2></Link>
        </div>
    )

}

export default Header