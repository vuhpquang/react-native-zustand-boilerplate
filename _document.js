//If you're using NextJS
// import { default as NativebaseDocument } from "@native-base/next-adapter/document";
// import fontsCSS from "@native-base/icons/FontsCSS"

// class Document extends NativebaseDocument {
//   //
// }

// async function getInitialProps({ renderPage }) {
//   const res = await NativebaseDocument.getInitialProps({ renderPage });
//   const styles = [
//     // eslint-disable-next-line react/jsx-key
//     <style dangerouslySetInnerHTML={{ __html: fontsCSS }} />,
//     ...res.styles
//   ];
//   return { ...res, styles: React.Children.toArray(styles) };
// }

// Document.getInitialProps = getInitialProps;

// export default Document;