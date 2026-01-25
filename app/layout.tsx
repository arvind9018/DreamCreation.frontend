import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-base text-textMain min-h-screen flex flex-col">
        
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}
