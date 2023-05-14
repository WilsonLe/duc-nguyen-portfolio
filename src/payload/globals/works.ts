import type { GlobalConfig } from "payload/types";

export const works: GlobalConfig = {
	slug: "works",
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
			name: "header",
			type: "text",
			required: true
		},
		{
			name: "projects",
			type: "group",
			fields: [
				{
					name: "tag",
					type: "relationship",
					relationTo: "project tags",
					hasMany: true,
					required: true
				},
				{
					name: "header",
					type: "text",
					required: true
				},
				{
					name: "thumbnail",
					type: "relationship",
					relationTo: "media",
					required: true
				},
				{
					name: "banner",
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
					name: "content",
					type: "richText",
					required: true
				},
				{
					name: "metadata",
					type: "array",
					required: true,
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
							name: "content",
							type: "richText",
							required: true
						}
					]
				}
			]
		}
	]
};
