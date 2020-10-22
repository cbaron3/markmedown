import { textRegex, h1Regex } from "../../Utility/mdValidator";

export const headers = {
  title: "Headers",
  text: [
    { type: "REGULAR", contents: "Headers" },
    { type: "MD", contents: "# Test\n## Test #2\n### Test #3" },
  ],
  requirements: [
    {
      instruction: "Create a title using an H1",
      verifier: function (a) {
        let state = false;

        if (a !== undefined) {
          if (a.length > 0) {
            let lines = a.match(/[^\r\n]+/g);
            console.log(lines);

            lines.forEach((t) => {
              state = state | h1Regex.test(t);
            });
          }
        }

        return state && a !== undefined;
      },
    },
  ],
};
