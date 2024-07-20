import axios from "axios";
import axiosInstance from "../config/axios.config";

abstract class HttpService {
  private headers = {};
  private getHeaders = (config: any) => {
    //auth,
    //content type
    if (config && (config.file || config.files)) {
      this.headers = {
        ...this.headers,
        "Content-Type": "multipart/form-data",
      };
    }
    //query string
  };
  postRequest = async (
    url: string,
    data: any = {},
    config: any = null
  ): Promise<any> => {
    try {
      this.getHeaders(config);
      const response = await axiosInstance.post(url, data, {
        headers: {
            ...this.headers
        },
        
      });
      console.log(response)
    } catch (exception) {
      console.error("PostRequestException:", exception);
      throw exception;
    }
  };
  getRequest = async (url: string, config: any = null) => {};
  putRequest = async (url: string, data: any = {}, config: any = null) => {};
  patchRequest = async (url: string, data: any = {}, config: any = null) => {};
  deleteRequest = async (url: string, config: any = null) => {};
}

export default HttpService;
