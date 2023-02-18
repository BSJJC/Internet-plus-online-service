function addPrefix(string: string | number): string {
  if (string >= 0 && string <= 9) {
    string = "0" + string;
  }
  return string.toString();
};

export default addPrefix;