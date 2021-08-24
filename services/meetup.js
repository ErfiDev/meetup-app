import HttpService from "./httpService";
import Api from "./api.json";

export function addMeetup(data) {
  return HttpService(Api.addMeetup, data);
}

export function joinMeetup(data) {
  return HttpService(Api.joinMeetup, data);
}

export function addFavorites(data) {
  return HttpService(Api.addFavorites, data);
}
