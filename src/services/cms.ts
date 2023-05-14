import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const CMS = axios.create({
	baseURL: process.env.PAYLOAD_URL ?? "https://duc-nguyen.vercel.app"
});
