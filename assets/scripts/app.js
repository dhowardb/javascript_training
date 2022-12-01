const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();

  //   xhr.open(method, url);

  //   //or if we can change type use this
  //   xhr.responseType = "json";
  //   xhr.onload = function () {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
  //       reject(new Error("Something went wrong!"));
  //     }
  //     //   const listOfPosts = JSON.parse(xhr.response);
  //   };

  //   //only for network error or timeout
  //   xhr.onerror = function () {
  //     reject(new Error("Failed to send request!"));
  //   };

  //   xhr.send(JSON.stringify(data));
  // });
  // return promise;

  //this is already a promise
  return fetch(url, {
    method: method,
    // body: JSON.stringify(data),
    body: data,
    // headers: {
    //   "Content-Type": "application/json",
    // },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errorData) => {
          console.log(errorData);
          throw new Error("Something went wrong!! --server side");
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Something went wrong!!");
    });
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    //   const listOfPosts = xhr.response;
    const listOfPosts = responseData;
    for (post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true); //copying content
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  const formData = new FormData(form); //form from querySelector
  // formData.append("title", title);
  // formData.append("body", content);
  formData.append("userId", userId);

  sendHttpRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    // post,
    formData
  );
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const listItem = event.target.closest("li");
    const postId = event.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    ).then(() => listItem.remove());
  }
});

// fetchPosts();
// createPost("DUMMY", "A dummy post!");
