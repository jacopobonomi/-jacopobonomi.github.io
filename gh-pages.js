import { publish } from "gh-pages";

publish(
  "build",
  {
    branch: "master",
    repo: "https://github.com/jacopobonomi/jacopobonomi.github.io",
    user: {
      name: "Bonomi Jacopo",
      email: "jacopobonomi18@gmail.com",
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
