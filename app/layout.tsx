import type { Metadata } from "next";
import { Outfit as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Provider from "@/provider/sessionProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// ******** you can change this metadata information with yours
export const metadata: Metadata = {
  title: "soulscribe", // your title
  description:
    "No Junk is your go-to platform for discovering and sharing the most valuable content from across all social media. We've built a community where only the best and most interesting posts make the cut. Say goodbye to clutter and endless scrolling; at No Junk, it's all quality, all the time.", // your description

  // ********** you can find the favicons in /public folder
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      {/* You can use inter.className if you want Default Next Starter Like font */}
      <body
        className={cn(
          "min-h-screen bg-black selection:bg-neutral-800 text-neutral-500 font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider> {children}</Provider>
      </body>
    </html>
  );
}
