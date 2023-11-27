import axios from "axios";

export const baseUrl = "http://377d-2a00-23c7-d001-d01-4f47-1f5c-9b05-fea.ngrok-free.app/api/"

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: { Accept: "application/vnd.github.v3+json" },
});

const getURL = async (endpointName) => {
  const url = `${baseUrl}${endpointName}`;
  try {
    const request = await apiClient.get(url);
    return request.data;
  } catch (error) {
    console.error(`An error occurred while fetching from ${url}:`, error);
    throw error;
  }
}

const patchURL = async (endpointName, requestObj) => {
  const url = `${baseUrl}${endpointName}`;
  try {
    const request = await apiClient.patch(url, requestObj);
    return request.data;
  } catch (error) {
    console.error(`An error occurred while patching to ${url}:`, error);
    throw error;
  }
}

const postURL = async (endpointName, requestObj) => {
  const url = `${baseUrl}${endpointName}`;
  try {
    const request = await apiClient.post(url, requestObj);
    return request.data;
  } catch (error) {
    console.error(`An error occurred while posting to ${url}:`, error);
    throw error;
  }
}

const deleteURL = async (endpointName, requestObj) => {
  const url = `${baseUrl}${endpointName}`;
  try {
    const request = await apiClient.post(url, requestObj);
    return request.data;
  } catch (error) {
    console.error(`An error occurred while posting to ${url}:`, error);
    throw error;
  }
}

export default { getURL, patchURL, postURL, deleteURL };
