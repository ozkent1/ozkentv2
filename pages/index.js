import dynamic from 'next/dynamic';
import Head from 'next/head';
const PDFViewer = dynamic(() => import('../components/pdf-viewer'), {
  ssr: false,
});

export default function PDF() {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/ozkent.png" />
    </Head>
      <PDFViewer />
    </>
  );
}
