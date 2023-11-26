import axios from "axios";

export async function fetchData(url, method = "GET", body = null) {
  const options = {
    method,
    url,
    headers: {
      Accept: "application/json",
    },
    data: body,
  };

  if (method === "POST" || method === "PUT") {
    options.headers["Content-Type"] = "application/json";
  }

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error("Error in fetchData:", error);
  }
}
