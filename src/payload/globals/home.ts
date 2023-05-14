import type { GlobalConfig } from "payload/types";

export const home: GlobalConfig = {
	slug: "home",
	access: {
		read: () => true
	},
	fields: [
		{
			name: "page title",
			type: "text",
			required: true
		},
		{
			name: "about",
			type: "group",
			fields: [
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
		},
		{
			name: "skills",
			type: "group",
			fields: [
				{
					name: "header",
					type: "text",
					required: true
				},
				{
					name: "skills",
					type: "array",
					required: true,
					fields: [
						{
							name: "header",
							type: "text",
							required: true
						},
						{
							name: "content",
							type: "richText",
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
						}
					]
				}
			]
		}
	]
};
