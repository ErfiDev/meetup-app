import HttpService from "./httpService";
import Api from "./api.json";

export function addMeetup(data) {
  return HttpService.post(Api.addMeetup, data);
}

export function joinMeetup(data) {
  return HttpService.post(Api.joinMeetup, data);
}

export function addFavorites(data) {
  return HttpService.post(Api.addFavorites, data);
}

export function getMeetUps() {
  return HttpService.get(Api.getMeetups);
}
