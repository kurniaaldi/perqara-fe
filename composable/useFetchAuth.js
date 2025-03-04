export const useFetchAuth = (url, opts) => {
  const config = useRuntimeConfig();
  const token = config.public.token;

  const headers = {
    ...(opts?.headers || {}),
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  return $fetch(url, { ...opts, headers });
};
