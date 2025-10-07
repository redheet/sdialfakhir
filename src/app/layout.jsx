import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import LoadPhosphorIcons from "@/helper/LoadPhosphorIcons";

import "./font.css";
import "./globals.scss";

export const metadata = {
  title: "SD Islam Modern Al-Fakhir",
  description:
    "SD Islam yang mengusung konsep modern, mengadopsi model kelas dan program internasional, namun tetap mengutamakan pendidikan karakter, moral, akhlak dan nilai-nilai keislaman ",
  author: "Design by nozazi",
  keywords: [
    "SD Islam Modern Al-Fakhir",
    "Al-Fakhir",
    "SD Islam",
    "Sekolah Dasar",
  ],
  content: "67PRV7PTWE-aCpQSE5-XwU_pzoughUtziJ_doFhoGLM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <LoadPhosphorIcons />

        <RouteScrollToTop />
        {children}
      </body>
    </html>
  );
}
