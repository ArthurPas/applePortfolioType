import {
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
} from "../utils";

export const navLists = ["Profile", "School journey", "Experiences", "Contact me"];

export const hightlightsSlides = [
    {
        id: 1,
        textLists: [
            "Back-end development",
            "Java spring boot and else",
            "I know my way around",
        ],
        video: highlightFirstVideo,
        videoDuration: 4,
    },
    {
        id: 2,
        textLists: ["Full-stack experiences", "Who can do more can do less"],
        video: highlightSecondVideo,
        videoDuration: 4,
    },
    {
        id: 3,
        textLists: [
            "General project skills",
            "Team work and project management",
            "I love to discuss with anyone about anything",
            "as well as customer or any collaborators",
        ],
        video: highlightThirdVideo,
        videoDuration: 15,
    },
    {
        id: 4,
        textLists: ["General tech culture", "Good practices and theory", "I love to learn and share knowledge"],
        video: highlightFourthVideo,
        videoDuration: 12,
    },
];