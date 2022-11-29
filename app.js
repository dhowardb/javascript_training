const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      (opts) => {}
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then((posData) => {
      positionData = posData;
      return setTimer(2000); //by returning promise will be back to pending until 'then' is finished
    })
    .catch((errorData) => {
      console.log(errorData);
      return "on we go...";
    }) //after this catch proceeding 'then' will still execute
    //therefore causing positionData to be undefined if this error is catch
    .then((data) => console.log(data, positionData));

  // setTimer(2000).then((data) => console.log(data, posData));
  // navigator.geolocation.getCurrentPosition(
  //   (posData) => {
  //     // setTimeout(() => {
  //     //   console.log(posData);
  //     // }, 2000);
  //     setTimer(2000).then((data) => console.log(data, posData)); //this only works for resolve
  //   },
  //   (error) => console.log(error)
  // );

  setTimeout(() => {
    console.log("Timer is Done!"), 0;
  });
  console.log("Getting position..."); //this will execute first instead of 'Timer is done! due to event loop, and setTimeout being async
  //event setting up it to 0ms to due call stack not being empty
}

async function trackUserHandler() {
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  // .then((posData) => {
  //   positionData = posData;
  //   return setTimer(2000); //by returning promise will be back to pending until 'then' is finished
  // })
  // .catch((errorData) => {
  //   console.log(errorData);
  //   return "on we go...";
  // }) //after this catch proceeding 'then' will still execute
  // //therefore causing positionData to be undefined if this error is catch
  // .then((data) => console.log(data, positionData));
}

Promise.race([getPosition(), setTimer(1000)]).then((data) => console.log(data));
Promise.all([getPosition(), setTimer(1000)]).then((promiseData) =>
  console.log(promiseData)
);
Promise.allSettled([getPosition(), setTimer(1000)]).then((promiseData) =>
  console.log(promiseData)
);

button.addEventListener("click", trackUserHandler);
