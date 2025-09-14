import { getUrlByCode } from "../repositories/url.repository.js";

export const redirectToUrl = async (req, res, next) => {
  try {
    const { shortCode } = req.params;

    const record = await getUrlByCode(shortCode);

    if (!record) {
      return res.status(404).json({ success: false, message: "Short URL not found" });
    }

    // check expiry
    if (record.expiry && new Date(record.expiry) < new Date()) {
      return res.status(410).json({ success: false, message: "Short URL expired" });
    }

    return res.redirect(302, record.longURL);
  } catch (err) {
    next(err);
  }
};