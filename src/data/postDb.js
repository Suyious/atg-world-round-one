import profImg1 from "../assets/ProfileImg.jpg";
import profImg2 from "../assets/ProfileImg2.jpg";
import profImg3 from "../assets/ProfileImg3.jpg";
import profImg4 from "../assets/ProfileImg4.jpg";
import postImg1 from "../assets/PosttImg1.jpg";
import postImg2 from "../assets/PosttImg2.jpg";
import postImg3 from "../assets/PosttImg3.jpg";

const PostsList = [
  {
    id: 1,
    postImg: postImg1,
    category: "Article",
    categoryTitle: "✍️ Article",
    Heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
    body: {
      par: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      employer: null,
      date: null,
      location: null,
      button: null
    },
    profImg: profImg1,
    author: "Sarthak Kamra",
  },
  {
    id: 2,
    postImg: postImg2,
    category: "Education",
    categoryTitle: "🔬️ Education",
    Heading:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    body:{
        par: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        employer: null,
        date: null,
        location: null,
        button: null
    },
    profImg: profImg2,
    author: "Sarah West",
  },
  {
    id: 3,
    postImg: postImg3,
    category: "Meetup",
    categoryTitle: "🗓️ Meetup",
    Heading: "Finance & Investment Elite Social Mixer @Lujiazui",
    body: {
        par: null,
        date: "Fri, 12 Oct, 2018",
        employer: null,
        location: "Ahmedabad, India",
        button: "Visit Website"
    },
    profImg: profImg3,
    author: "Ronal Jones",
  },
  {
    id: 4,
    postImg: null,
    category: "Job",
    categoryTitle: "💼️ Job",
    Heading: "Software Developer",
    body: {
        par: null,
        date: null,
        employer: "Innovaccer Analytics Private Ltd.",
        location: "Noida, India",
        button: "Apply on Timesjobs"
    },
    profImg: profImg4,
    author: "Joseph Gray",
  },
];

export default PostsList
