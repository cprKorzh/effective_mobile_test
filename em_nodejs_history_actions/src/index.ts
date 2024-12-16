import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config({ path: './.env' });

const app = express();
const port = process.env.LOCAL_PORT;

app.get('/', (req: Request, res: Response) => {
	res.send('Hello, World in dev mode!');
});

app.listen(port, () => {
	console.log(`Server starting on ${port} port`);
});