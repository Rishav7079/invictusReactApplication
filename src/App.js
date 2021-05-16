import logo from './logo.svg';
import './App.css';
import  Header  from "./components/Header";
import  Form  from "./components/Form";
import  Table  from "./components/Table";
import React, { useState, useEffect } from "react";
function App() {
  const findMostFrequent = (num) => {
    // console.log("i am on word function with value", num);
    const str =
      "Invictus is the leading organization in the field of Safety and Compliance consulting. With several Fortune 500 organizations and Govt. agencies as its clientele, Invictus has touched over 20 million lives. Our clients include Microsoft, Adobe, Walmart, British Telecom, Canon, Pepsi, Sony, Maruti, TCS, Infosys, McKinsey and many more. Invictus is now making a leap in the field of smart technology solutions to enhance the overall safety quotient of individuals as well as organizations. With the safety and compliance industry in a hyper growth mode, we are aiming to become the number 1 safety and compliance tech brand in the next few years We are in a rapid growth phase and are looking for individuals with drive and vision to associate with us to take us forward in our journey. What we promise to everyone at Invictus is a dynamic and intellectually stimulating environment with the flexibility to experiment. In addition to working on exciting tech, you would also have the satisfaction of creating a safer &amp; smarter society of tomorrow Looking for talented engineers to build Web and App projects using latest technologies develop BACKEND services using technologies like nodejs, redis, mysql, memcached, mongodb, elastic search develop FRONTEND in collaboration with UI/UX designer(s) using technologies like Reactjs, Nextjs, React Native work on Data Analytics work on Amazon AWS, Amazon EC2, Amazon Elasticache, Amazon ElasticSearch, Amazon Lambda and Serverless";
     const strArr = str.split(" ");
     const map = {};
     strArr.forEach((word) => {
       if (map.hasOwnProperty(word)) {
         map[word]++;
       } else {
         map[word] = 1;
       }
     });
     const frequencyArr = Object.keys(map).map((key) => [key," frequency->",map[key]]);
     frequencyArr.sort((a, b) => b[2] - a[2]);
     let arr = frequencyArr.sort((a, b) => b[1] - a[1]).slice(0,num);
     console.log(arr);
     setArray([...array, arr]);
      
  };
   

  const [array, setArray] = useState("")
  return (
    <>
      <Header title="Invictus" />
      <Form findMostFrequent={findMostFrequent} />
      <Table  array={array}/>
    </>
  );
}

export default App;
