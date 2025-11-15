export default function handler(req, res) {
  const ports = ['9998'];
  const port = ports[Math.floor(Math.random() * ports.length)];
  res.status(200).send(port);
}
