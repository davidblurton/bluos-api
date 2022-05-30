import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

const cors = initMiddleware(Cors());

export default async function handler(req, res) {
  await cors(req, res);

  res.status(200).setHeader("Content-Type", "text/xml");
  res.send("<state>stop</state>");
}
