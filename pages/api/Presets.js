import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

const cors = initMiddleware(Cors());

export default async function handler(req, res) {
  await cors(req, res);

  res.status(200).setHeader("Content-Type", "text/xml");

  res.send(`<presets prid="0">
  <preset name="THE HOT 50" url="Load?name=THE HOT
  50&amp;service=Deezer&amp;id=707209595" id="4"/>
  <preset name="91.1 | JAZZ.FM91 (Jazz)"
  url="Play?url=TuneIn%3As31229%2Fhttp%3A%2F%2Fopml.radiotime.com%2FTune.ashx%3Fid%3Ds31
  229%26formats%3Dwma%2Cmp3%2Caac%2Cogg%2Chls%26partnerId%3D8OeGua6y%26serial%3DA
  4%3A13%3A4E%3A01%3ABD%3A50" id="7"/>
  </presets>`);
}
