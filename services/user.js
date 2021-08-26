import HttpService from "./httpService";
import Api from "./api.json";

export function registerUser(data) {
  return HttpService.post(Api.register, data);
}

export function loginUser(data) {
  return HttpService.post(Api.login, data);
}

export function logoutUser(data) {
  return HttpService.post(Api.logout, data);
}

export function forgetPass(data) {
  return HttpService.post(Api.forgetPass, data);
}

export function changePass(data) {
  return HttpService.post(Api.changePass, data);
}
