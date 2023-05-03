import Image from "next/image";
import { Inter } from "next/font/google";

// eslint-disable-next-line
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen container">
      <p>Hello world!</p>
    </main>
  );
}
