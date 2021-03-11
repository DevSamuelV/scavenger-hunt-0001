import { Express } from "express";

export class Gift {
	constructor(express: Express) {
		express.get("/gift", (req, res) => {
			const key = req.params.key;

			if (key == null) {
			}
		});
	}
}
