import clientPromise from "@/app/lib/mongodb";

export async function POST(req, res) {
	const body = await req.json();
	const client = await clientPromise;
	const db = client.db("tinyknot");
	const collection = db.collection("url");

	const shortCode = Math.random().toString(36).substring(2, 15);

	const result = await collection.insertOne({
		url: body.url,
		shortCode: shortCode,
	});

	return new Response(
		JSON.stringify({
			message: "URL stored",
			shortUrl: `http://localhost:3000/shortcode/${shortCode}`,
		}),
		{ status: 200 }
	);
}
