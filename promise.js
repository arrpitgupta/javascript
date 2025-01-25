//Single ex
function examplePromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve(`Data fetched successfully from ${url}`);
      } else {
        reject("Failed to fetch data");
      }
    }, 2000);
  });
}
examplePromise("https://api.example.com/data")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise handling complete.");
  });

//Multiple Api calls

const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
};

const fetchPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
      ]);
    }, 1500);
  });
};

const fetchComments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "Nice post!" },
        { id: 2, text: "Thanks for sharing!" },
      ]);
    }, 2000);
  });
};

Promise.all([fetchUser(), fetchPosts(), fetchComments()])
  .then(([user, posts, comments]) => {
    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("All operations complete.");
  });

//More exx:
  function firstPromise(hi) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`this works ${hi}`);
        resolve(`First resolved with ${hi}`);
      }, 1000);
    });
  }
  
  function secondPromise(hii) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`this works ${hii}`);
        resolve(`Second resolved with ${hii}`);
      }, 2000);
    });
  }
  
  
  Promise.all([firstPromise("Hi"), secondPromise("Hello")])
    .then(([first, second]) => {
      console.log("Execution success");
      console.log(first); 
      console.log(second); 
    })
    .catch((err) => {
      console.error(`Error ${err}`);
    })
    .finally(() => {
      console.log("All promise execution success");
    });
  