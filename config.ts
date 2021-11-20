import { REACT_APP_BACKEND_BASE_URL } from '@env';

var BACKEND_BASE_URL=REACT_APP_BACKEND_BASE_URL
if (typeof BACKEND_BASE_URL === "undefined" || BACKEND_BASE_URL === null) {
  BACKEND_BASE_URL = "http://localhost:8080";
}

export { BACKEND_BASE_URL };

