import Document, { Html, Head, Main, NextScript } from 'next/document'
import styled from "styled-components";

const Body = styled.body`
  margin: 0;
  padding: 0;
`;

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <Body>
                <Main />
                <NextScript />
                </Body>
            </Html>
        )
    }
}

export default MyDocument
