import { clientConfig } from "@/clientConfig";
import type { CollectionConfig } from "payload/types";

export const media: CollectionConfig = {
	slug: "media",
	upload: {
		staticURL: "/media",
		staticDir: "media",
		adminThumbnail: ({ doc }) =>
			`${clientConfig.bucketEndpoint}/${doc.filename}`,
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
