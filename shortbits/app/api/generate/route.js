import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("shortbits");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return NextResponse.json({ success: false, error: true, message: "URL already exists" });
    }

 
    const result = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return NextResponse.json({ success: true, error: false, message: "Finished", data: result });
  } catch (error) {

    console.error("Error in POST handler:", error);
    return NextResponse.json({ success: false, error: true, message: "Internal server error" }, { status: 500 });
  }
}
