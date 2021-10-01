
var BACKEND_BASE_URL=process.env.REACT_APP_BACKEND_BASE_URL
if (typeof BACKEND_BASE_URL === "undefined") {
  BACKEND_BASE_URL = "http://localhost:8080";
}

export { BACKEND_BASE_URL };

