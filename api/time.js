export default function handler(req, res) {
  const now = new Date().toISOString();
  res.status(200).json({ dateTime: now, timeZone: "UTC" });
}
