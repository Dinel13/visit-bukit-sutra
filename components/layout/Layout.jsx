import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {

  return (
    <>
      <Header />
      <main className="text-sm" style={{ minHeight: "70vh" }}>
        {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
