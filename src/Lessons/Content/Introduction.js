import { textRegex, h1Regex } from "../../Utility/mdValidator";

export const introduction = {
  title: "Introduction",
  text: [
    {
      type: "REGULAR",
      contents:
        "Welcome to MarkMeDown, an interactive tutorial that will guide you through learning markdown syntax while you create a README for your next big coding project!",
    },
    {
      type: "REGULAR",
      contents:
        "At the end of this tutorial, you will be able to download the README file and use it on Github or anyother medium you need!",
    },
    {
      type: "REGULAR",
      contents:
        "The left pane is used for providing you instructions for the current lesson and ensuring you have met the requirements before progressing to the next lesson!",
    },
    {
      type: "REGULAR",
      contents:
        "The middle pane is your dedicated text editor where you can write your markdown and upload images for your README.",
    },
    {
      type: "REGULAR",
      contents:
        "The right pane shows you a preview of your README file, as you work on it! Furthermore, if you get stuck at anytime, you can toggle between your README and what the README should look like for a helpful hint!",
    },
    {
      type: "REGULAR",
      contents:
        "To complete this lesson, get familiar with the text editor area by typing in a few words and watch them appear on your README file!",
    },
  ],
  requirements: [
    {
      instruction: "Add some text to your README",
      verifier: function (a) {
        return textRegex.test(a) && a !== undefined;
      },
    },
  ],
};
