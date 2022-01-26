import axios, {Axios,AxiosRequestConfig, } from 'axios'
export class apiService {
    public baseUrl: string
    private customInstance:Axios
    private requestConfig: AxiosRequestConfig ={}
    

    constructor(){
        this.baseUrl = "https://fakestoreapi.com"
        this.customInstance = axios.create({
            baseURL:this.baseUrl,
            headers:{
                "Content-Type": "application/json"
            }
        })
    }
    async postRequest<input extends object, result = any>(url: string, data: input): Promise<result> {
        try{
            let result = await this.customInstance.post<result>(url, data, this.requestConfig)
            this.resetRequestConfig()
            return result.data;
        }catch (error:any){
            this.handleErrors(error)
        }
    }
    private handleErrors(error: any): never {
        console.log("error hapened", error);
        alert("An error happened " + error);
        this.resetRequestConfig()
        throw error;
    }
    resetRequestConfig() {
        this.requestConfig = {}
    }
    async getRequest<resT = any>(url: string): Promise<resT> {
        try {
            let result = await this.customInstance.get(url, this.requestConfig)
            this.resetRequestConfig()
            return result.data;
        } catch (error: any) {
            this.handleErrors(error)

        }
    }
    changeRequestHeader(header:Record<string,string| number| boolean>){
        if (this.requestConfig.headers) {
            this.requestConfig.headers = { ...this.requestConfig.headers, ...header }
        } else {
            this.requestConfig.headers = header
        }
    }
    changeBaseURL(url: string): this {
        this.requestConfig.baseURL = url;
        return this
    }



}