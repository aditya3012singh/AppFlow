import './globals.css';

export const metadata = {
  title: 'App Flow',
  description: 'Design Android layouts visually and export Jetpack Compose code.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}