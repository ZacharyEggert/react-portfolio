import React, { createContext, useReducer, useContext } from "react";

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const initialState = {
  projects: [
    {
      github:'https://github.com/ZacharyEggert/Unanswered-Questions',
      title:'Unanswered Questions',
      description:
      `A concept piece based around historical philosphers. Built using html, css, js, jquery, tailwindcss, owl carousel, wikimedia's api, google's api, and an open philosophical quote api. Built in collaboration with a small group.

      Updated may 2020 to be web hostable using node, express, sequelize, mysql, dotenv, bcrypt, handlebars, and many more nodejs packages.`,
      deployedLink:'https://unanswered-questions.herokuapp.com/'

    },
    {
      github:'https://github.com/ZacharyEggert/Time-Tracker',
      title:'Project Manager',
      description:
      `A quickly made project manager made during the UW's coding bootcamp. Built on HTML, CSS, JS, jQuery, Bootstrap4, and Moment.js`,
      deployedLink:'https://zacharyeggert.github.io/Time-Tracker'
    },
    {
      github:'https://github.com/ZacharyEggert/Day-Planner',
      title:'Work Day Scheduler',
      description:
      `A work day planner built using HTML, CSS, JS, Bootstrap4, and Moment.js`,
      deployedLink:'https://zacharyeggert.github.io/Day-Planner'
    },
    {
      github:'',
      title:'',
      description:
      ``,
      deployedLink:''
    },
  ],
}

const reducer = (state, action) => {
  //** REDUCER FOR USEREDUCER */

};

const GlobalProvider = ({...props }) => {
  const [state, dispatch] = useReducer(reducer, {...initialState});

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };