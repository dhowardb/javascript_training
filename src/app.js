// import { difference } from "../node_modules/lodash";
//install webpack and lodash
import * as _ from "../node_modules/lodash";
import { ProjectList } from "./App/ProjectList.js";

// const difference = require("../node_modules/lodash/difference.js");

// console.log(_.difference([0, 1], [0, 2]));
console.log(_.difference([0, 1], [1, 2]));
class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );

    // const timerId = setTimeout(this.startAnalytics, 3000);

    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    //   clearTimeout(timerId);
    // });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement("script");
    // analyticsScript.src = "assets/scripts/Utility/Analytics.js";
    analyticsScript.src = "assets/Utility/Analytics.js";
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
