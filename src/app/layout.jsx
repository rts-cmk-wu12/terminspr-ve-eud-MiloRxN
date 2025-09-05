import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Landrup Dans",
    default: "Landrup Dans"
  },
  description: "Dette er en webapp for landrup dans, hvor brugere kan finde og tilmelde sig forskellige aktiviteter, som afvikles på skolen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
