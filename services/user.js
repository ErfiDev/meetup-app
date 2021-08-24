import HttpService from "./httpService";
import Api from "./api.json";

export function registerUser(data) {
  return HttpService(Api.register, data);
}

export function loginUser(data) {
  return HttpService(Api.login, data);
}

export function logoutUser(data) {
  return HttpService(Api.logout, data);
}

export function forgetPass(data) {
  return HttpService(Api.forgetPass, data);
}

export function changePass(data) {
  return HttpService(Api.changePass, data);
}
