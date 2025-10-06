import axios from "axios";
class AxiosServices {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 1000,
    });
  }
  async getData(url) {
    try {
      const res = await this.axiosInstance.get(url);
      return res.data;
    } catch (error) {
      console.log(message);
    }
  }
}

export default AxiosServices;
