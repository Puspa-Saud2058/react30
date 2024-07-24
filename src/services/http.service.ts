import axiosInstance from "../config/axios.config";
abstract class HttpService {
  private headers = {};
  private params={};
  private getHeaders = (config: any) => {
    //auth,
    if(config.auth){
      //headers
      //TODO:
      this.headers={
        ...this.headers,
        "Authorization":"Bearer"
      }
    }
    //content type
    if (config && (config.file || config.files)) {
      this.headers = {
        ...this.headers,
        "Content-Type": "multipart/form-data",
      }
    }
    //query string
    if(config && config.auth){
      this.params={
        ...this.params,
        ...config.params
      }
    }
  };
  postRequest = async (url: string,data: any = {},config: any = null): Promise<any> => {
    try {
      this.getHeaders(config);
      const response = await axiosInstance.post(url, data, {
        headers: {...this.headers },   
        params:{...this.params}     
      });
      console.log(response)
    } catch (exception) {
      console.error("PostRequestException:", exception);
      throw exception;
    }
  };
  getRequest = async (url: string, config: any = null) => {
    try{
     this.getHeaders(config);
     const response=await axiosInstance.get(url,{
      headers:{...this.headers},
      params:{...this.params}
     })
     return response
    }catch(exception){
      console.log("GetRequestException",exception)
      throw exception
    }
  };
  putRequest = async (url: string, data: any = {}, config: any = null) => {};
  patchRequest = async (url: string, data: any = {}, config: any = null) => {};
  deleteRequest = async (url: string, config: any = null) => {};
}

export default HttpService;
