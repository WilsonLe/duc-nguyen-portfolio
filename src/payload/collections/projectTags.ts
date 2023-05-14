import { CollectionConfig } from "payload/types";

export const projectTags: CollectionConfig = {
	slug: "project tags",
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
