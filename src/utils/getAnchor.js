function getAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9- ]/g, '')
    .replace(/[ ]/g, '-');
}

export default getAnchor;
