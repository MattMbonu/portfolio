export const getCookieFromReq = (req, cookie) => {
  const correctCookie = req.headers.cookie
    .split(";")
    .find(c => c.trim().startsWith(`${cookie}=`));

  if (!correctCookie) {
    return undefined;
  }
  return correctCookie.split("=")[1];
};
