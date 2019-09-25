import axios from "axios";
import { error_message } from "./toastify";
import {URL, SECRET_KEY} from './baseUrl'
import {refreshToken} from '../redux/actions/authAction'
import {isEmpty} from 'utils'

const appHeaderProperties = { "secret-key":SECRET_KEY };
let contentType = {"Content-Type" : "application/json",'X-Requested-With': 'XMLHttpRequest'}

const defaultHeader=(val)=>{
	if( val['Content-Type'] !== undefined){
		return val
 }else{
	 return {...val,...contentType}
 }
}

export const apiCall = ({ method, url, data = "" }) => async (dispatch) => {

	let head = !isEmpty(data.headers) ? defaultHeader(data.headers) :contentType
	try {
		const response = await axios({
			method: method,
			url: URL + url,
			data: data.data || "",
			headers: { ...head, ...appHeaderProperties } || "",
			params: data.params || "",
			timeout: data.timeout || 0,
			// withCredentials: true
		});
		return response;
	} catch (error) {
		if (error.response) {
			const { data } = error.response; 
			if (error.response.status !== 400) {
				if (data.status) {
					error_message(data.detail);
				} else {
					if(data.code === 'token_not_valid' || data.status === 401){
						let getToken =localStorage.getItem('refresh')
						let token = JSON.parse(getToken)
						error_message('Sesi telah berakhir, mohon refresh halaman ini atau login kembali')
						// refreshToken(token)
					}else{
						error_message("Maaf sedang terjadi masalah dengan server kami. Mohon tunggu beberapa menit lagi 🙏")
					}
				}
				return data;
			}
			return data;
		} else {
			error_message("Maaf sedang terjadi masalah dengan server kami. Mohon tunggu beberapa menit lagi 🙏");
		}
		return null;
	}
};
