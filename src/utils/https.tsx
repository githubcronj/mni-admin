import axios from "axios";

const handleError = (error: any) => {
  let err = {
    status: 500,
    message: "Something went wrong, Please try again",
  };
  if (error.response) {
    err = {
      status: error.response.status,
      message:
        error.response.data.message || "Something went wrong, Please try again",
    };
    if (err.status === 401) {
      localStorage.clear();
    }
  }
  return Promise.reject(err);
};

export const apiAuth = axios.create({
  baseURL: "https://makenewindia.com/api/",
});

export const apiClient = axios.create({
  baseURL: "https://makenewindia.com/api/",
});

apiAuth.interceptors.response.use((res) => res, handleError);

// https://makenewindia.com/api/
