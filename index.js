var nameDetector = require("russian-name-detector")({
    google_api_key: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  });

async function start(){
    let data = await nameDetector("илья рычагов");
    console.log(data);
}

start();