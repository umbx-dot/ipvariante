export default function handler(req, res) {
  const ips = ['127.0.0.1'];
  const ip = ips[Math.floor(Math.random() * ips.length)];
  res.status(200).send(ip);
}
