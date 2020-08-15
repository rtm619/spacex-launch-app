export default (url = '', transformation = 'f_auto,dpr_auto') => {
  // If URL is null, send back empty string.
  if (!url) {
    return '';
  }
  const cdnUrl = process.env.REACT_APP_CDN_URL;
  const folderName = process.env.REACT_APP_CDN_FOLDER;
  let revisedUrl = url.replace('https://images2.imgbox.com', '');
  revisedUrl = `${cdnUrl}${transformation}/${folderName}${revisedUrl}`;
  return revisedUrl;
};
