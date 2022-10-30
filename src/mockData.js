// UUID library is used to identify unique values within the project
import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "To do  🔧  ",
    tasks: [
      {
        id: uuidv4(),
        title: "Beautify the UI Design",
      },
      {
        id: uuidv4(),
        title: "Craft a technical article",
      },
      {
        id: uuidv4(),
        title: "Attend the scrum meeting",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "  Done  🎉 ",
    tasks: [
      {
        id: uuidv4(),
        title: "Work on the presentation",
      },
      {
        id: uuidv4(),
        title: "Enhance TypeScript Skills",
      },
      {
        id: uuidv4(),
        title: "Shoot a video tutorial on Router",
      },
    ],
  },
];

export default mockData;
