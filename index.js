const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let token = "your-token"

let channel = "group-id"

let tokick = ["id1", "id2", "id3.."]


function Kick(id, channel, token) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("DELETE", `https://canary.discord.com/api/v9/channels/${channel}/recipients/${id}`);
      xhr.setRequestHeader("Authorization", token);
      xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/91.0.4472.124 Safari/537.36");
  
      xhr.onload = function () {
        if (xhr.status === 204) {
          resolve();
        } else {
          reject();
        }
      };
  
      xhr.send();
    });
  }

tokick.forEach(x => {
    Kick(x, channel, token)
})

console.log("Kicked")