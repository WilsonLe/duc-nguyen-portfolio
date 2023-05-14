import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const Axios = axios.create({
	baseURL: process.env.BASE_URL ?? "https://duc-nguyen.vercel.app"
});
