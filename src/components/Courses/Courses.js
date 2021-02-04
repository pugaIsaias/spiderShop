import React, { useState } from "react";
import Title from "../Title/Title";
import Course from "./Course/Course";

const Courses = () => {
  const [courseList, setCourseList] = useState([
    {
      id: 0,
      name: "taller 5 lenguajes del amor",
      description: "taller sobre los 5 lenguajes del amor",
      price: "Q25",
      link: "/4255",
    },
    {
      id: 1,
      name: "curso de bartender",
      description: "aprende a hacer 3 tipos de tragos diferentes",
      price: "Q25",
      link: "/3576",
    },
  ]);

  return (
    <>
      <Title> Courses </Title>

      {courseList.map((course) => (
        <Course
          key={course.id}
          name={course.name}
          description={course.description}
          price={course.price}
          link={course.link}
        />
      ))}
    </>
  );
};

export default Courses;
