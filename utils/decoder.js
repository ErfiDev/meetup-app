import jwt from "jsonwebtoken";

export default function Decoder(token) {
  const decode = jwt.decode(token, { complete: true });
  if (!decode) {
    return null;
  }

  return decode;
}
