import "@/css/component.css";
import "@/css/reset.css";
import "@/css/utility.css";
import Header from "@/components/header/Header"
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata = {
  title: "test meta",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div id="total-wrapper">
          <Header />
          <main>
            <div className="main-inner">
              <div className="flex-box gap-10 max-grid ml-auto mr-auto">  
                <Sidebar/>
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
