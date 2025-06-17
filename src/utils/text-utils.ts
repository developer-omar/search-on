const preproccessText = (text: string) => {
  let newText = text.trim()
    .replace(/\s+/g, " ");
  newText = encodeURIComponent(newText)
    .replace(/%20/g, "+");
  return newText;
};

export { preproccessText }
