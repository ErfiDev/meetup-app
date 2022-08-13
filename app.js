let localSt, remoteSt;

async function Init() {
  localSt = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });

  document.getElementById("user_one").srcObject = localSt;

  CreateOffer();
}

async function CreateOffer() {
  let peerConn = new RTCPeerConnection({
    iceServers: [
      {
        urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"],
      },
    ],
  });

  remoteSt = new MediaStream();
  document.getElementById("user_two").srcObject = remoteSt;

  localSt.getTracks().forEach((track) => {
    peerConn.addTrack(track, localSt);
  });

  peerConn.ontrack = (e) => {
    e.streams[0].getTracks().forEach((track) => {
      remoteSt.addTrack(track);
    });
  };

  peerConn.onicecandidate = async (e) => {
    if (e.candidate) {
      console.log(`New ice candidate: ${e.candidate}`);
    }
  };

  let offer = await peerConn.createOffer();
  await peerConn.setLocalDescription(offer);

  console.log(offer);
}

Init();
