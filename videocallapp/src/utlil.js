export function generateToken(userID, roomID, userName) {
  return fetch(
    `https://rtc-api.zego.im/?Action=ForbidLiveStream
&AppId=1234567890
&SignatureNonce=15215528852396
&Timestamp=${Math.round(Date.now() / 1000)}
&Signature=9193cc662a4c0ec135ec71fb57194b38
&SignatureVersion=2.0`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
}

export function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getRandomName() {
  const names = [
    "Oliver",
    "Jake",
    "Noah",
    "James",
    "Jack",
    "Connor",
    "Liam",
    "John",
    "Harry",
    "Callum",
    "Mason",
    "Robert",
    "Jacob",
    "Jacob",
    "Jacob",
    "Michael",
    "Charlie",
    "Kyle",
    "William",
    "William",
    "Thomas",
    "Joe",
    "Ethan",
    "David",
    "George",
    "Reece",
    "Michael",
    "Richard",
    "Oscar",
    "Rhys",
    "Alexander",
    "Joseph",
    "James",
    "Charlie",
    "James",
    "Charles",
    "William",
    "Damian",
    "Daniel",
    "Thomas",
  ];

  return names[Math.round(Math.random() * names.length)];
}
