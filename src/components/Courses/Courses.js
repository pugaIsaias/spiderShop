import React, { useState } from "react";
import Title from "../Title/Title";
import axios from "./axios";
import Course from "./Course/Course";

const Courses = () => {
  const [courseList, setCourseList] = useState([]);

  axios
    .get("photos/")
    .then((response) => {
      let filterData = response.data.filter((data) => data.id < 10);
      let photos = [];

      filterData.forEach((element) => {
        let fragment = {};
        fragment.id = element.id;
        fragment.name = element.title;
        fragment.price = element.id + 10;
        fragment.banner = element.thumbnailUrl;
        fragment.link = element.id;
        photos.push(fragment);
      });

      setCourseList(photos);
    })
    .catch((error) => {
      console.log("axios error:", error);
    });

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
