export function fetchRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
