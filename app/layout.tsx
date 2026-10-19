export const metadata = {
  title: 'ALKINDUS OS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>{children}</main>
      </body>
    </html>
  );
}
