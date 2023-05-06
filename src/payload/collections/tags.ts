import { CollectionConfig } from "payload/types";

export const tags: CollectionConfig = {
	slug: "tags",
	admin: {
		useAsTitle: "name"
	},
	access: {
		read: () => true
	},
	fields: [
		{
			name: "name",
			type: "text"
		}
	],
	timestamps: false
};
