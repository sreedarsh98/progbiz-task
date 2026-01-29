import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>{children}</main>
      <Footer />
    </>
  );
}
