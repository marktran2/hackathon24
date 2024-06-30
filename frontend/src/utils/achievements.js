import McDonaldImg from '../assets/McDonald.png'
import saltImg from '../assets/salt.webp'
import waterImg from '../assets/water.jpg'
import newYearImg from '../assets/newyear.jpg'
import gymImg from '../assets/gym.webp'
import stoneImg from '../assets/stone.jpg'
import painImg from '../assets/pain.avif'
import vegetaImg from '../assets/vegeta.png'
import dayminutesImg from '../assets/1440.jpg'
import overtimeImg from '../assets/overtime.jpg'
import noSleepImg from '../assets/nosleep.png'
import oldManImg from '../assets/oldman.webp'
import diseaseImg from '../assets/disease.jpg'
import tiredImg from '../assets/running.png'
import topTenImg from '../assets/topten.jpg'
import bobaImg from '../assets/boba.jpeg'

// List of achievements, sorted by their categories
// SHOULD NOT CHANGE DATA DURING RUNTIME
const achievementsData = {
    "diet": [
      {
        name: "Boba Breather",
        imageUrl: bobaImg,
        totalHabits: 10,
        quote: "Your body is fueled by bubble tea. Your blood now mostly consists of sugar, increasing the chance of type 2 diabetes but that is only a minor inconvenience for you",
      },
      {
        name: "Drive-Thru Dynamo",
        imageUrl: McDonaldImg,
        totalHabits: 5,
        quote: "Nothing is more important to you than maxing out your points on the Maccas app."
      },
      {
        name: "Sodium Soveriegn",
        imageUrl: saltImg,
        totalHabits: 5,
        quote: "The recommended daily sodium intake is just that. A recommendation. It does not apply to entities like yourself who are just not built the same."
      },
      {
        name: "Is water wet?:",
        imageUrl: waterImg,
        totalHabits: 5,
        quote: "One thing is for sure: your throat isn't."
      },
      // {
      //   name: "Boba Sucker",
      //   imageUrl: "string",
      //   totalHabits: 5,
      //   quote: ""
      // },
      // {
      //   name: "Boba Sucker",
      //   imageUrl: "string",
      //   totalHabits: 5,
      //   quote: ""
      // }
    ],

    "fitness": [
      {
        name: "Old Year, Old Me!",
        imageUrl: newYearImg,
        totalHabits: 25,
        quote: "New Year's resolutions are great! ...while the year is still new at least. Now that the newness has worn off, so has your interest. Onto the next trend!"
      },
      {
        name: "Fitness Philanthropist",
        imageUrl: gymImg,
        totalHabits: 10,
        quote: "You are passionate about exercise! Just not passionate about exercising yourself... Congratulations on becoming your local gym's top donor!"
      },
      {
        name: "Living statue",
        imageUrl: stoneImg,
        totalHabits: 25,
        quote: "For some people, sitting still is impossible. For you, it is the opposite that is impossible"
      },
      {
        name: "Happy Heart Attack",
        imageUrl: painImg,
        totalHabits: 25,
        quote: "Sometimes the happiest people hide the most pain"
      },
    ],

    "screentime": [
      {
        name: "It's over 9000!",
        imageUrl: vegetaImg,
        totalHabits: 25,
        quote: "Only those who have endured the toughest training can reach numbers this high..."
      },
      {
        name: "1440",
        imageUrl: dayminutesImg,
        totalHabits: 25,
        quote: "This is the number of minutes in a day. It is also the number of minutes you have spent on your device this week."
      },
      {
        name: "Overtime",
        imageUrl: overtimeImg,
        totalHabits: 25,
        quote: "Your salary must be high and your overtime even higher with shift hours like that!"
      },
      {
        name: "For the weak!",
        imageUrl: noSleepImg,
        totalHabits: 25,
        quote: "Good thing that you made the smart decision of investing those 8 recommended sleep hours into more important things this month!"
      },
    ],
    "smoking": [
      {
        name: "Old Soul",
        imageUrl: oldManImg,
        totalHabits: 25,
        quote: "You are younger than you may appear"
      },
      {
        name: "Tumour Tempter/Temptress",
        imageUrl: diseaseImg,
        totalHabits: 25,
        quote: "You have mastered the art of cancer seduction. Only time will tell how long it will be able to resist your advances!"
      },
      {
        name: "Do I need lungs?",
        imageUrl: tiredImg,
        totalHabits: 25,
        quote: "As a rookie member of the lung hater club, you are beginning your journey to develop chronic obstructive pulmonary disease (COPD)"
      },
      {
        name: "I don't need lungs!",
        imageUrl: topTenImg,
        totalHabits: 25,
        quote: "As a senior member of the lung hater club, you are past the 90th percentile of the population in terms of likelihood of COPD development!"
      },
    ]
  }

export default achievementsData;