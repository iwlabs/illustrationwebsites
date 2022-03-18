import Header from "./header";


export default function Layout({ children }) {
  return (
    <>
    <div className="relative">
    <Header/>
      <main>{children}</main>
    </div>
      
    </>
  )
}