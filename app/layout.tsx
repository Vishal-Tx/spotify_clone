import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";
import { Supabaseprovider, UserProvider } from "@/providers";
import ModalProvider from "@/providers/ModalProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify 2",
  description: "Feel Music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Supabaseprovider>
          <UserProvider>
            <ModalProvider />
              <Sidebar>{children}</Sidebar>
          </UserProvider>
        </Supabaseprovider>
      </body>
    </html>
  );
}
