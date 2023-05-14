import type { GlobalConfig } from "payload/types";

export const contact: GlobalConfig = {
	slug: "contact",
	fields: [
		{
			name: "header",
			type: "text",
			required: true
		},
		{
			name: "contacts",
			type: "array",
			fields: [
				{
					name: "iconLight",
					type: "relationship",
					relationTo: "media",
					required: true
				},
				{
					name: "iconDark",
					type: "relationship",
					relationTo: "media",
					required: true
				},
				{
					name: "backgroundColorLight",
					type: "text",
					required: true
				},
				{
					name: "backgroundColorDark",
					type: "text",
					required: true
				},
				{
					name: "header",
					type: "text",
					required: true
				},
				{
					name: "content",
					type: "richText",
					required: true
				}
			]
		}
	]
};
