import Navbar from "@/app/components/Navbar/Navbar"; 
import Footer from "./components/shared/Footer";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import ContextProvider from "./ContextProvider";

export const metadata = {
  title: 'Book Store',
  description: 'This a book store application. You can order and manage your sales from here',
  icons: {
    icon: '/fav-icon.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <StoreProvider>
            <Navbar />
              <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
                {children}
              </main>
            <Footer />
          </StoreProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
