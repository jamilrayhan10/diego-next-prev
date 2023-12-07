import "../styles/index.scss";
// import ThemeProvider from "@/components/provider/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=DM+Sans:wght@400;500;700&display=swap"
        />
      </head>
      <body suppressHydrationWarning={true} className="scroll-smooth">
        {/* <ThemeProvider>{children}</ThemeProvider> */}
        {children}
      </body>
    </html>
  );
}
