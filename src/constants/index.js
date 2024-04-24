import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
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

export const models = [
    {
        id: 1,
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
        img: yellowImg,
    },
    {
        id: 2,
        title: "iPhone 15 Pro in Blue Titanium",
        color: ["#53596E", "#6395ff", "#21242e"],
        img: blueImg,
    },
    {
        id: 3,
        title: "iPhone 15 Pro in White Titanium",
        color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
        img: whiteImg,
    },
    {
        id: 4,
        title: "iPhone 15 Pro in Black Titanium",
        color: ["#454749", "#3b3b3b", "#181819"],
        img: blackImg,
    },
];

export const sizes = [
    {label: '6.1"', value: "small"},
    {label: '6.7"', value: "large"},
];

export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
];