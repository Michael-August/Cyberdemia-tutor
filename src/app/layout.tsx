import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

import { RootLayoutInner } from '@/components/custom-hooks/useInnerLayout';

import { LayoutProvider } from '../../context/LayoutContext';
import QueryClientProvider from '../../utils/ReactQueryProvider';

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Cyberdemia',
  description: 'Cyberdemia',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <QueryClientProvider>
          <LayoutProvider>
            <ToastContainer
              position="top-center"
              autoClose={4000}
              hideProgressBar
              closeOnClick
              pauseOnHover
            />
            <RootLayoutInner>{children}</RootLayoutInner>
          </LayoutProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
