import HttpService from "./httpService";
import Api from "./api.json";

export function addMeetup(data) {
  return HttpService.post(Api.addMeetup, data);
}

export function joinMeetup(data) {
  return HttpService.post(Api.joinMeetup, data);
}

export function addFavorites(id, meetupId) {
  return HttpService.post(`${Api.addFavorites}?id=${id}&meetupId=${meetupId}`);
}

export function getMeetUps() {
  return HttpService.get(Api.getMeetups);
}

export function getFavorites(id) {
  return HttpService.get(Api.getFavorites + "?id=" + id);
}
