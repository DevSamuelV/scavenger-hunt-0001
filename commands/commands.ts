import { Express } from "express";
import { Index } from ".";

export class Commands {
	constructor(express: Express) {
		new Index(express);
	}
}
