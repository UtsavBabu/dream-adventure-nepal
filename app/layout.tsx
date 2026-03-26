import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "Dream Adventure Nepal",
  description: "Authentic trekking experiences in Nepal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}