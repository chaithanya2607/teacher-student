import React from "react";

function Home() {
  return (
    <div className="home mt-5">
      <h1 className="fw-bold text-secondary fs-1">
        Teacher Student Management
      </h1>
      <p className="mt-3 fw-bold fs-8 text-dark">
        Teacher student management is the linchpin that makes teaching and
        learning achievable in the teaching learning process. It is the teacher
        who plays the main role in planning, organizing procedures and
        resources, arranging the environment to maximize efficiency, monitoring
        students' progress, anticipating potential problems.
      </p>

      <img
        className="mt-2 image"
        src="https://www.scholastic.com/content/dam/scholastic/educators/articles/essential-resources-first-year-teachers_ART_16-9.jpg.corpimagerendition.xxl.1400.788.png"
        alt=""
      />
    </div>
  );
}

export default Home;
