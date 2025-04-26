import './globals.css';

export const metadata = {
  title: 'QuickPoll',
  description: 'Create and vote on polls instantly!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
