import { CollectionConfig } from "payload/types";

export const users: CollectionConfig = {
	slug: "users",
	auth: true,
	admin: {
		useAsTitle: "email"
	},
	access: {
		read: () => true
	},
	fields: [
		// Email added by default
		{
			name: "name",
			type: "text"
		}
	]
};
