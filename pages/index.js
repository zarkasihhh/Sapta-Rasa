import Head from 'next/head';
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Sapta Rasa' />
      <Head>
        {/* Chatbot Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.difyChatbotConfig = {
                token: 'oKBcMpK5VVXhxEfo'
              };
            `,
          }}
        />
        <script
          src="https://udify.app/embed.min.js"
          id="oKBcMpK5VVXhxEfo"
          defer
        ></script>
        {/* Chatbot Styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #dify-chatbot-bubble-button {
                background-color: #EAB308 !important;
              }
              #dify-chatbot-bubble-window {
                width: 24rem !important;
                height: 40rem !important;
              }
            `,
          }}
        />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
