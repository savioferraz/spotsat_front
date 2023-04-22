export function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  return config;
}
