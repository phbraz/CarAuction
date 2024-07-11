import { Auction } from "@/types";
import { getTokenWorkAround } from "@/app/actions/auctionActions";

const baseUrl = "http://localhost:6001/";

const getHeaders = async () => {
  const token = await getTokenWorkAround();
  const headers = {
    "content-type": "application/json",
  } as any;

  if (token) {
    headers.Authorization = `Bearer ${token.access_token}`;
  }

  return headers;
};

const handleResponse = async (response: Response) => {
  const text = await response.text();
  const data = text && JSON.parse(text);

  if (response.ok) {
    return data || response.statusText;
  } else {
    const error = {
      status: response.status,
      message: response.statusText,
    };
    return {
      error,
    };
  }
};

const get = async (url: string) => {
  const requestOptions = {
    method: "GET",
    headers: await getHeaders(),
  };

  const response = await fetch(`${baseUrl}${url}`, requestOptions);

  return await handleResponse(response);
};

const post = async (url: string, body: {}) => {
  const requestOptions = {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify(body),
  };

  const response = await fetch(`${baseUrl}${url}`, requestOptions);

  return await handleResponse(response);
};

const put = async (url: string, body: {}) => {
  const requestOptions = {
    method: "PUT",
    headers: await getHeaders(),
    body: JSON.stringify(body),
  };

  const response = await fetch(`${baseUrl}${url}`, requestOptions);

  return await handleResponse(response);
};

const del = async (url: string) => {
  const requestOptions = {
    method: "DELETE",
    headers: await getHeaders(),
  };

  const response = await fetch(`${baseUrl}${url}`, requestOptions);

  return await handleResponse(response);
};

const fetchWrapper = {
  get,
  post,
  put,
  del,
};

export default fetchWrapper;
