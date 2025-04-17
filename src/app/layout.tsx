import type {Metadata} from 'next';
import { Manrope } from 'next/font/google'; // Import Manrope
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster for feedback

// Configure Manrope font
const manrope = Manrope({
  subsets: ['latin', 'cyrillic'], // Add cyrillic for Russian text
  variable: '--font-manrope', // Define CSS variable
  display: 'swap', // Ensure text remains visible during font load
});

// Arial is a system font, no need to load via next/font
// We'll use it as the primary font to match Figma design

export const metadata: Metadata = {
  // Update title/description if desired
  title: 'SmartNation College Portal',
  description: 'Единый портал государственных услуг',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply Manrope font variable to body */}
      {/* Keep antialiased for better font rendering */}
      <body className={`${manrope.variable} font-arial antialiased`}> {/* Use font-arial to match Figma design */}
        {children}
        <Toaster /> {/* Add Toaster component here */}
      </body>
    </html>
  );
}
