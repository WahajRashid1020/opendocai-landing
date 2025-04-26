import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import "../css/styles.css";
import PopupWidget from "../components/popupWidget";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />

      <Component {...pageProps} />
      <Footer />
      <PopupWidget />
    </ThemeProvider>
  );
}

export default MyApp;
