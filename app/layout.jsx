import { Inter } from "next/font/google";
import "./globals.css";


// components
import Header from "./components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nicolien Klein",
  description: "Van idee naar online, met Wordpress als stevige basis",
  icons: {
    icon: [
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' }
    ],
    manifest: '/site.webmanifest',
    maskIcon: { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1b0f1c' }
  },
  msapplication: {
    TileColor: '#603cba'
  },
  other: [
    { name: 'theme-color', content: '#fff1dd' }
  ]
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="relative">
          <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute">
          </div>
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
