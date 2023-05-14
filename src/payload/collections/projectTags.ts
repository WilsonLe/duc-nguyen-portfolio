import { Axios } from "@/services/axios";
import dotenv from "dotenv";
import { CollectionConfig } from "payload/types";

dotenv.config();

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
	hooks: {
		afterChange: [
			async (args) => {
				await Axios.post("/api/revalidate", {
					token: process.env.REVALIDATION_TOKEN,
					paths: ["/works"]
				});
				return args.doc;
			}
		]
	},
	timestamps: false
};
