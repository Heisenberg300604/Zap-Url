import { saveUrl } from "../repositories/url.repository.js";
import { generateShortCode } from "../utils/idGenerator.js";

export const createShortUrl = async (longURL, expiry = null) => {
  if (!longURL || typeof longURL !== "string") {
    throw new Error("Invalid URL");
  }

  // naive check
  try {
    new URL(longURL);
  } catch {
    throw new Error("Invalid URL format");
  }

  const shortCode = generateShortCode();
  const createdAt = new Date().toISOString();

  const record = await saveUrl({
    shortCode,
    longURL,
    createdAt,
    expiry,
  });

  return record;
};
