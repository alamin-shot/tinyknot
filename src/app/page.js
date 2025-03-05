"use client";

import { useState } from "react";
import Link from "next/link";
export default function Home() {
	const [url, setUrl] = useState("");
	const [shortUrl, setShortUrl] = useState("");
	const [genarate, setgenarate] = useState(false);
	const [error, setError] = useState("");

	const isValidUrl = (string) => {
		try {
			new URL(string);
			return true;
		} catch (error) {
			return false;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!url || !isValidUrl(url)) {
			setError("Please enter a valid URL.");
			return;
		}
		try {
			const res = await fetch(`/api/generate`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ url: url }),
			});

			const data = await res.json();

			if (res.ok) {
				setShortUrl(data.shortUrl);
				setgenarate(true);
				setError("");
			} else {
				setError("Failed to generate the short URL. Please try again.");
			}
		} catch (error) {
			setError("An error occurred. Please try again later.");
		}
	};

	return (
		<>
			<div className="home">
				<div className="container ">
					<div className="heading">
						<h1>
							Slash through unwieldy URLs <br />
							<span className="text-[#ff722c]">
								into deadly, precise short links!
							</span>
						</h1>
						<p>
							Create, share, and track your links with advanced analytics.
							Perfect for social media, marketing campaigns, and more.
						</p>
					</div>
					<div className="short_form">
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								placeholder="Enter URL to shorten"
								value={url}
								onChange={(e) => setUrl(e.target.value)}
							/>
							<button type="submit">Shorten URL</button>
						</form>
						{error && <p className="err">{error}</p>}
						{genarate && shortUrl && (
							<div className="result">
								<h2>Your sliced url</h2>
								<Link href={shortUrl} target="_blank">
									{shortUrl}
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
