import type { GlobalConfig } from "payload/types";

export const sidebar: GlobalConfig = {
	slug: "sidebar",
	fields: [
		{
			name: "avatar",
			type: "relationship",
			relationTo: "media",
			hasMany: false,
			required: true
		},
		{
			name: "header1",
			type: "text",
			required: true
		},
		{
			name: "header2",
			type: "text",
			required: true
		},
		{
			name: "social",
			type: "array",
			fields: [
				{
					name: "link",
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
		},
		{
			name: "personalInfo",
			type: "array",
			fields: [
				{
					name: "name",
					type: "text",
					required: true
				},
				{
					name: "name",
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
		},
		{
			name: "resume",
			type: "group",
			fields: [
				{
					name: "url",
					type: "text",
					required: true
				},
				{
					name: "text",
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
};
