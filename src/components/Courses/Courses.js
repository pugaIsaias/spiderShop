import React, { useState } from "react";
import Title from "../Title/Title";
import axios from "./axios";
import Course from "./Course/Course";
import classes from "./Courses.module.css";

const Courses = () => {
  const [courseList, setCourseList] = useState([]);

  axios
    .get("courses/")
    .then((response) => {
      let receiveData = response.data;
      let courseData = [];

      receiveData.forEach((element) => {
        let fragment = {};
        fragment.id = element.id;
        fragment.name = element.name;
        fragment.price = element.price;
        fragment.banner = element.banner;
        fragment.description = element.description;
        fragment.link = element.link;
        courseData.push(fragment);
      });

      setCourseList(courseData);
    })
    .catch((error) => {
      console.log("axios error:", error);
    });

  return (
    <>
      <Title> Courses </Title>
      <div className={classes.alignCenter}>
        <div className={classes.Gallery}>
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
        </div>
      </div>
    </>
  );
};

export default Courses;
