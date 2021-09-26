import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Fetch({
  url,
  renderSuccess,
  renderError = error => (<pre>{JSON.stringify(error, null, 2)}</pre>),
  loadingFallback = <p>Loading...</p>
}) {
  const { data, error, loading } = useFetch(url);
  if (loading) {
    return loadingFallback;
  } else if (error) {
    return renderError(error);
  } else {
    return renderSuccess(data);
  }
}
