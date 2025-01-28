import title from "next/font/local";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";



export const metadata = {
  title: "Apollo",
  description: "Apollo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={"font-title"}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
