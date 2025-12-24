import "./globals.css";

export const metadata = {
  title: "PrintWell",
  description: "Professional printing & branding services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
