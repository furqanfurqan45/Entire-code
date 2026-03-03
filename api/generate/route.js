import clientPromise from "@/lib/mongodb";
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");
  const client = await clientPromise;
  const collection = client.db("soundpulse").collection("sellingitems");
  const items = await collection.find({ category: q }).toArray();
  if(items.length===0){
    return Response.json({error:"no item found"})
  }
  return Response.json(items);
}