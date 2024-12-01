import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/userHeader";
import Footer from "../components/footer";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - Loyaltyzx",
  description: "Best Customer Loyalty Management System",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-slate-50 dark:bg-bgSecondary`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
