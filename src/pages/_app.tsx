import React from 'react'
import { AppProps } from 'next/app'
import RootLayout from '../layouts/root'
import '../styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={poppins.className}>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </div>
    )
}
