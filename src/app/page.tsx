import { db } from "@/lib/db";

export default async function Home() {
  await db.set("hello", "hello");
  return (
    <main className="">
      <h1 className="text-red-400">hello world</h1>
    </main>
  );
}

//time -> 46:42
