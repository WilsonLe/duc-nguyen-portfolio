import type { CollectionConfig } from "payload/types";

import dotenv from "dotenv";

dotenv.config();

export const media: CollectionConfig = {
	slug: "media",
	access: {
		read: () => true
	},
	upload: {
		staticURL: "/media",
		staticDir: "media",
		adminThumbnail: ({ doc }) => (typeof doc.url === "string" ? doc.url : ""),
		disableLocalStorage: true
	},
	fields: [
		{
			name: "alt",
			label: "Alt Text",
			localized: true,
			type: "text",
			required: true
		}
	]
};
