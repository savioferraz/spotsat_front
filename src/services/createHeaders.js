export function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("token"));
  const userid = JSON.parse(localStorage.getItem("userid"));
  const config = {
    headers: {
      userid: userid,
      Authorization: `Bearer ${auth}`,
    },
  };
  return config;
}
