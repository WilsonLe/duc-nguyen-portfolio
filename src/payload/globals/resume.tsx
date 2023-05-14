import type { GlobalConfig } from "payload/types";

export const resume: GlobalConfig = {
	slug: "resume",
	fields: [
		{
			name: "header",
			type: "text",
			required: true
		},
		{
			name: "sections",
			type: "array",
			required: true,
			fields: [
				{
					name: "header",
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
				},
				{
					name: "cards",
					type: "array",
					required: true,
					fields: [
						{
							name: "date",
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
						}
					]
				}
			]
		}
	]
};
