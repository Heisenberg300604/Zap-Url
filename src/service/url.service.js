import { saveUrl } from "../repositories/url.repository.js";
import { generateShortCode } from "../utils/idGenerator.js";
import { validateUrl } from "../utils/validator.js";

export const createShortUrl = async (longURL, expiry = null) => {
  if (!longURL || typeof longURL !== "string") {
    throw new Error("Invalid URL");
  }

  const normalizedUrl = validateUrl(longURL);

  const shortCode = generateShortCode();
  const createdAt = new Date().toISOString();

  const record = await saveUrl({
    shortCode,
    longURL: normalizedUrl,
    createdAt,
    expiry,
  });

  return record;
};
