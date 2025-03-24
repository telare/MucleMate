export async function setCookieAction({
  key,
  value,
}: {
  key: string;
  value: string;
}) {
  document.cookie = `${key}=${value}`;
}

export async function getCookieAction(key: string): Promise<string | null> {
  const cookie: string = document.cookie
    .split("; ")
    .filter((cookie) => cookie.match(key))
    .join("")
    .split("=")[1];
  if (cookie) return cookie;
  return null;
}
