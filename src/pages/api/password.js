const PASSWORD = '2021Z';

export default function handler(req, res) {
  const { password } = req.body;
  if (password === PASSWORD) {
    res.status(200);
  } else {
    res.status(401);
  }
  res.end();
}
