import axios from "axios";

export const getPid = (appName) => {
  return axios
    .get(`/api/powerconsumption/pid`, { params: { appName: appName } })
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Failed to get PID for ${appName}`, error);
      return -1;
    });
};

export const getPowerConsumption = (pid) => {
  return axios
    .get(`/api/powerconsumption/power-consumption/${pid}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Failed to get power consumption for PID ${pid}`, error);
      return -1;
    });
};

