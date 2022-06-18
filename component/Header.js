import Link from 'next/link'

const headerStyle = {
    backgroundColor: "bisque",
    height: "100%",
    display: "grid",
    alignItems: "center",
    boxShadow: "0px 3px 3px #888888",
    zIndex: "9",
    FontSize: "80%"
}

const Header = () => {

    return (
        
        <div style={headerStyle}>
            <title>我只是想抽牌</title>
           <Link href={"/"} ><h1>我只是想抽牌</h1></Link>
        </div>
    )

}

export default Header