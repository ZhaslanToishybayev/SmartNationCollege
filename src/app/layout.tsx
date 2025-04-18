import type {Metadata} from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

// Providers
import { ThemeProvider } from '@/store/context/ThemeContext';
import { AuthProvider } from '@/store/context/AuthContext';

// Configure Manrope font
const manrope = Manrope({
  subsets: ['latin', 'cyrillic'], // Add cyrillic for Russian text
  variable: '--font-manrope', // Define CSS variable
  display: 'swap', // Ensure text remains visible during font load
});

// Arial is a system font, no need to load via next/font
// We'll use it as the primary font to match Figma design

export const metadata: Metadata = {
  title: 'SmartNation College Portal',
  description: 'Единый портал государственных услуг',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} font-arial antialiased`}>
        <ThemeProvider>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
