import Header from './Header'
import Footer from './Footer'
const FullStyle = {
    height: "100vh",
    fontFamily: "sans-serif",
    textAlign: "center",
    width: "100%",
    display: "grid",
    gridTemplateRows: "10% 80% 10%",
    gridTemplateColumns: "100%",
    alignItems: "center",
    backgroundColor: "#ffffff",
    overflow:"hidden"
}

const Layout = (props) => {

    return (
        <div style={FullStyle}>
            <Header />
            {props.children}
            <Footer />
        </div>
    )

}

export default Layout