import Link from 'next/link'

const FooterStyle = {
    backgroundColor: "bisque",
    height: "100%",
    display: "grid",
    alignItems: "center",
    boxShadow: "0px 3px 3px 5px #888888",
    zIndex: "9"
}

const Footer = () => {

    return (
        <div style={FooterStyle} >
           <h1>footer</h1>
        </div>
    )

}

export default Footer