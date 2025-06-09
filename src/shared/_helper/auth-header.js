import { localService } from "../_session/local";

export async function authHeader() {
	const token = await localService.get("token");	
	
			return { Authorization: "Bearer " + token };
}