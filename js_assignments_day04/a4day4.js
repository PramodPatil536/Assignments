function getVideo() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if (getVideo()) {
                resolve("Got video");
            }
            else {
                reject("Didn't got video");
            }
        }, 3000)
    })
}

let methodForResolve = (result) => {
    console.log("Message after resolve" + result);
}
let methodForReject = (reject) => {
    console.log("Message after reject=" + reject);
}

function addIntro() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (addIntro()) {
                resolve("Intro added");
            }
            else {
                reject("Intro not added");
            }
        }, 3000);
    })
}

function addSummary() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (addSummary()) {
                resolve("summary added");
            }
            else {
                reject("summary not added");
            }
        }, 3000);
    })
}


getVideo().then(methodForResolve).catch(methodForReject);

addIntro().then(methodForResolve).catch(methodForReject);

addSummary().then(methodForResolve).catch(methodForReject);
