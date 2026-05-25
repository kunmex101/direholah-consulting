export const metadata = {
  title: "Direholah Consulting",
  description: "Professional consulting and technology solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
