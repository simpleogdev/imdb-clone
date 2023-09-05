import Main from "./(home)/Main";

export const revalidate = 3600 // revalidate at most every hour

export default function Home() {
  return (
    <main >
        <Main />
    </main>
  );
}
