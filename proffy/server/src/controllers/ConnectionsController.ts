import { Request, Response, response } from "express";
import db from "../database/connection";

export default class ConnectionsOptions {
	async index(request: Request, response: Response) {
		const totalConneections = await db('connections').count('* as total');

		const { total } = totalConneections[0];

		return response.json({ total });
	}

	async create(request: Request, response: Response) {
		const { user_id } = request.body;

		await db('connections').insert({
			user_id
		})

		return response.status(201).send()
	}
}