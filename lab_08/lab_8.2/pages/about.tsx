import { GetStaticProps } from "next";

export default function About({ currentTime }: { currentTime: string }) {
  return (
    <main style={{ maxWidth: "800px", margin: "2rem auto" }}>
      <h1>About Page (SSG)</h1>
      <p>This page is statically generated at build time.</p>
      <p>Build Time: {currentTime}</p>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { currentTime: new Date().toISOString() },
  };
};

