import { CollectionConfig } from "payload/types";

export const projects: CollectionConfig = {
	slug: "projects",
	admin: {
		defaultColumns: ["title", "tags", "status"],
		useAsTitle: "title"
	},
	fields: [
		{
			name: "title",
			type: "text"
		},
		{
			name: "startDate",
			type: "date"
		},
		{
			name: "endDate",
			type: "date"
		},
		{
			name: "tags",
			type: "relationship",
			relationTo: "project tags",
			hasMany: true
		},
		{
			name: "showcase",
			type: "relationship",
			relationTo: "media",
			hasMany: false
		},
		{
			name: "description",
			type: "richText"
		},
		{
			name: "status",
			type: "select",
			options: [
				{
					value: "draft",
					label: "Draft"
				},
				{
					value: "published",
					label: "Published"
				}
			],
			defaultValue: "draft",
			admin: {
				position: "sidebar"
			}
		}
	]
};
