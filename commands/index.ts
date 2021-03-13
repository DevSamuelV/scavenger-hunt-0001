import { Express } from "express";

export class Index {
	private clue =
		"go back trace your steps but stop before you reach the end but don't for get the route";

	constructor(express: Express) {
		express.get("", (req, res) => {
			const key = req.query.key;

			if (key == null) {
				return res.send({
					key: false,
					message:
						"to proceed add the key to the url like this https://pollifly.com?key=password",
					clue: this.clue,
				});
			}

			if (key == "DVOO BLF WVXLWVW RG XLMTIZTGH ERHRG")
				return res.send({
					key: true,
					message:
						"good job you finished the puzzle it was not ment to be hard",
				});
			else
				return res.send({
					key: false,
					message: "your getting closer",
					clue: this.clue,
				});
		});
	}
}
