exports.enumerateDevices = ()=> Promise.resolve([])

// exports.getUserMedia = ()=> Promise.resolve({
//   "id": "36cde5e6-1df8-4f33-9bdd-3c7a519789a4",
//   "active": false,
//   "onaddtrack": null,
//   "onremovetrack": null,
//   "onactive": null,
//   "oninactive": null,
//   getAudioTracks: ()=>[],
//   getVideoTracks: ()=>[],
// })

exports.getUserMedia = () => Promise.resolve(new Error('Reject obtaining user media'));

exports.getDisplayMedia = exports.getUserMedia;

exports.addEventListener = () => { };
exports.ondevicechange = () => { };
