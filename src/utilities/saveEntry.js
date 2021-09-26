import { BACKEND_BASE_URL } from "../config";

export default function saveEntry(entry,
    onSuccess = entry => {}, onFailed = error => {}) {
  const url = BACKEND_BASE_URL + '/' + entry.userId + '/entry';
  fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  })
  .then(res => res.json())
  .then(res => onSuccess(res))
  .catch(error => onFailed(error));
}