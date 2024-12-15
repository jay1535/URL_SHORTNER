import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const { shorturl } = params; 

  const client = await clientPromise;
  const db = client.db("shortbits");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl: shorturl });
  if (doc) {
    redirect(doc.url); 
    return; 
  }

  const host = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";
  redirect(host);
  return; 
}
