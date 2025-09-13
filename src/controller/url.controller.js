
import { createShortUrl } from "../service/url.service.js";
export const shortenUrl = async (req, res, next) => {
  try {
    const { longURL, expiry } = req.body;

    const record = await createShortUrl(longURL, expiry);

    return res.status(201).json({
      success: true,
      shortCode: record.shortCode,
      shortUrl: `${process.env.BASE_URL}/${record.shortCode}`,
      longURL: record.longURL,
      createdAt: record.createdAt,
      expiry: record.expiry,
    });
  } catch (err) {
    next(err);
  }
};
