let localSt, remoteSt;
let peer;

const servers = {
  ice: [
    {
      urls: ["stun.l.google.com:19302", "stun1.l.google.com:19302"],
    },
  ],
};

async function Init() {
  localSt = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  document.getElementById("user_one").srcObject = localSt;
  CreateOffer();
}

async function CreateOffer() {
  peer = new RTCPeerConnection();

  remoteSt = new MediaStream();
  document.getElementById("user_two").srcObject = remoteSt;

  localSt.getTracks().forEach((t) => {
    peer.addTrack(t, localSt);
  });

  peer.ontrack = (event) => {
    event.streams[0].getTracks().forEach((t) => {
      remoteSt.addTrack(t);
    });
  };

  let offer = await peer.createOffer();
  await peer.setLocalDescription(offer);

  console.log(offer);
}

Init();
