import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, phone } = req.body;

  if (!email && !phone) {
    return res.status(400).json({ message: "Email or phone is required" });
  }

  // Generate a random OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Sign the OTP with JWT
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign({ otp, email, phone }, secret, { expiresIn: "5m" });
  res.status(200).json({ token, otp });
}
