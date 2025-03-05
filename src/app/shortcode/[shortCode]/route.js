import clientPromise from "@/app/lib/mongodb";

export async function GET(req, { params }) {
	const { shortCode } = await params;
	const client = await clientPromise;
	const db = client.db("tinyknot");
	const collection = db.collection("url");

	// Find the original URL by shortCode
	const urlEntry = await collection.findOne({ shortCode });

	if (!urlEntry) {
		return new Response(JSON.stringify({ message: "Short URL not found." }), {
			status: 404,
		});
	}

	// Redirect to the original URL
	return Response.redirect(urlEntry.url);
}
