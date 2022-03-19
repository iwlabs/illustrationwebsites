import Footer from "./footer";
import Header from "./header";


export default function Layout({ children }) {
  return (
    <>
    <div className="relative">
    <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
      
    </>
  )
}