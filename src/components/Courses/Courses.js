import axios from "axios";
import React, { useState } from "react";
import Title from "../Title/Title";
import Course from "./Course/Course";

const Courses = () => {
  const [courseList, setCourseList] = useState([]);

  axios
    .get("https://jsonplaceholder.typicode.com/photos/")
    .then((response) => {
      let products = response.data.filter((data) => data.id < 10);
    })
    .catch((error) => {
      console.log("axios error:", error);
    });

  /* const [courseList, setCourseList] = useState([
    {
      id: 0,
      name: "taller 5 lenguajes del amor",
      description: "taller sobre los 5 lenguajes del amor",
      price: "Q25",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/rotaract-metropoli-gt.appspot.com/o/love.jpg?alt=media&token=e8b6e881-8460-4c82-a76f-eb819ad9bd1e",
      link: "/4255",
    },
    {
      id: 1,
      name: "curso de bartender",
      description: "aprende a hacer 3 tipos de tragos diferentes",
      price: "Q35",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/rotaract-metropoli-gt.appspot.com/o/coctails.png?alt=media&token=2c6f3536-5d7c-4bc8-95db-e29ddb6b25c7",
      link: "/3576",
    },
  ]);*/

  return (
    <>
      <Title> Courses </Title>

      {courseList.map((course) => (
        <Course
          key={course.id}
          name={course.name}
          description={course.description}
          price={course.price}
          banner={course.banner}
          link={course.link}
        />
      ))}
    </>
  );
};

export default Courses;
