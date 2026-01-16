
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// CONFIGURATION
// Create a file named .env.local with:
// GOOGLE_PLACES_API_KEY=your_key_here
// GOOGLE_PLACE_ID=your_place_id_here (Find via: https://developers.google.com/maps/documentation/places/web-service/place-id)

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
// If place_id is not provided, you can search by text search API first, but Place ID is better.
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

const OUTPUT_FILE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data/google-reviews.json');

if (!API_KEY) {
    console.error("❌ Error: GOOGLE_PLACES_API_KEY is not defined in environment variables.");
    process.exit(1);
}

if (!PLACE_ID) {
    console.error("❌ Error: GOOGLE_PLACE_ID is not defined. Please find your Place ID.");
    process.exit(1);
}

const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total,url&key=${API_KEY}`;

console.log("Fetching reviews from Google Places API...");

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            if (json.status !== 'OK') {
                console.error("❌ API Error:", json.status, json.error_message);
                return;
            }

            const result = json.result;

            const output = {
                rating: result.rating,
                user_ratings_total: result.user_ratings_total,
                place_id: PLACE_ID,
                url: result.url,
                reviews: result.reviews.map(r => ({
                    author_name: r.author_name,
                    rating: r.rating,
                    relative_time_description: r.relative_time_description,
                    text: r.text,
                    time: r.time
                }))
            };

            fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
            console.log(`✅ Success! Reviews saved to ${OUTPUT_FILE}`);
            console.log(`   Rating: ${output.rating} stars (${output.user_ratings_total} reviews)`);
            console.log(`   Fetched ${output.reviews.length} reviews.`);

        } catch (e) {
            console.error("❌ Failed to parse response:", e.message);
        }
    });

}).on('error', (e) => {
    console.error("❌ Request error:", e.message);
});
