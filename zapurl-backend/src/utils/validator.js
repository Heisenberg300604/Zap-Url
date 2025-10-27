export function validateUrl(input) {
  let url;

  // Check it parses as a URL
  try {
    url = new URL(input);
  } catch {
    throw new Error("Invalid URL format");
  }

  // Allow only http/https
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only HTTP/HTTPS URLs are allowed");
  }

  // block localhost / private IPs
  const hostname = url.hostname;
  if (
    hostname === "localhost" ||
    hostname.startsWith("127.") ||
    hostname.endsWith(".local")
  ) {
    throw new Error("Private/internal URLs are not allowed");
  }

  // max length
  if (input.length > 2048) {
    throw new Error("URL too long");
  }

  // blacklist
  const blocked = ["phishing.com", "malware.site"];
  if (blocked.includes(hostname)) {
    throw new Error("This domain is not allowed");
  }

  // Return normalized URL (helps avoid duplicates with trailing slashes, etc.)
  return url.toString();
}