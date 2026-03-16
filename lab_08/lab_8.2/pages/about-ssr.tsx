import { GetServerSideProps } from "next";

export default function AboutSSR({ currentTime }: { currentTime: string }) {
  return (
    <main style={{ maxWidth: "800px", margin: "2rem auto" }}>
      <h1>About Page (SSR)</h1>
      <p>This page is server-side rendered on every request.</p>
      <p>Server Time: {currentTime}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { currentTime: new Date().toISOString() },
  };
};

