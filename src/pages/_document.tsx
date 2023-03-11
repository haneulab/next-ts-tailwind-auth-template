import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* 
                        ------------------------------
                        | GOOGLE FONT API SCRIP TAGS |
                        ------------------------------
                    */}
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Inter:wght@200;300;400;500;600;700&family=Nanum+Brush+Script&family=Nanum+Myeongjo:wght@400;700&family=Nunito:wght@300;400;500;700&family=Sono:wght@200;300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="w-full relative font-para[en]-nunito">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
