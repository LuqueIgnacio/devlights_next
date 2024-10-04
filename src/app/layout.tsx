import Footer from "@/components/Footer";
import Header from "@/components/Header"; 
import { CartContextProvider } from "@/providers/CartContextProvider";
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col gap-4">
        <CartContextProvider>
          <Header/>
          {children}
        </CartContextProvider>
        <Footer/>
      </body>
    </html>
  );
}
