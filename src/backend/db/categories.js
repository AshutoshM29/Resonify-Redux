import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Music Theory",
    description:
      "Music theory as a practical discipline encompasses the methods and concepts that composers and other musicians use in creating music.",
  },
  {
    _id: uuid(),
    categoryName: "Music Production",
    description:
      "Music production is the process of developing, creating and refining recorded music for public presentation.",
  },
  {
    _id: uuid(),
    categoryName: "Guitar Lessons",
    description:
      "The best guitar lessons online, and they're free! Fun, comprehensive and well structured courses for beginners, intermediate and advanced",
  },
  {
    _id: uuid(),
    categoryName: "Piano Lessons",
    description:
      "Online piano lessons with interactive step-by-step instructions and tutorials on reading music, chords, technique and more",
  },
  {
    _id: uuid(),
    categoryName: "Vocal Traning",
    description:
      "Vocal training exercises are necessary for aspiring vocalists who want to become professional singers or simply preserve their singing voices.",
  },
];