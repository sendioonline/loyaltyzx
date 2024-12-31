import jwt from "jsonwebtoken";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { token, otp } = req.body;

  if (!token || !otp) {
    return res.status(400).json({ message: "Token and OTP are required" });
  }

  const secret = process.env.JWT_SECRET;

  try {
    // Verify the token
    const decoded = jwt.verify(token, secret);

    // Check if OTP matches
    if (decoded.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // OTP is valid
    res.status(200).json({ message: "OTP verified successfully!" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }
}
