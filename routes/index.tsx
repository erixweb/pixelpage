import { Head } from "$fresh/runtime.ts"
import Pixels from "../islands/Pixels.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="/styles/main.css" />
      </Head>
      <div>
        <Pixels />
      </div>
    </>
  );
}
