declare const STORAGE_URL: string;

export const getRemoteFile = (path: string) => {
  const url = `${STORAGE_URL}/${path}`
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  return xhr.responseText;
}
