export default function getCookie(name) {
  const cookies = document.cookie.split(";");

  if (cookies.length <= 0) {
    return null;
  } else {
    for (let i = 0; i <= cookies.length; i++) {
      let index = cookies[i].split("=");
      if (index[0] === name) {
        return index[1];
      }
      return null;
    }
  }
}
