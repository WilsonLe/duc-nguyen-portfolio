import { NextApiHandler } from "next";
import { z } from "zod";
const handler: NextApiHandler = async (req, res) => {
	const body = z
		.object({ token: z.string(), paths: z.array(z.string()) })
		.parse(req.body);
	const revalidationToken = z.string().parse(process.env.REVALIDATION_TOKEN);
	if (body.token !== revalidationToken) {
		return res.status(401).json({ message: "Invalid token" });
	}
	try {
		// this should be the actual path not a rewritten path
		// e.g. for "/blog/[slug]" this should be "/blog/post-1"
		await Promise.all(body.paths.map((path) => res.revalidate(path)));
		return res.json({ revalidated: true });
	} catch (err) {
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		return res.status(500).send("Error revalidating");
	}
};

export default handler;
