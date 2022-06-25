import { useEffect, useState } from "react";

const CourseCard = () => {
  const [course, setCourse] = useState({});

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourse(data);
      });
  }, []);

  return (
    <div className="md:w-3/5 w-full mx-auto p-5">
      <h1 className="md:text-4xl text-2xl font-bold">{course.title}</h1>
      <p className="text-xl text-gray-500 font-semibold">
        {course.subTitle}{" "}
        <span className="border border-gray-600 rounded-full px-1.5 text-xs ml-1 font-bold">
          ?{" "}
        </span>
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 my-10">
        <div className="w-full md:order-1 order-2">
          <h1 className="text-lg">{course.description}</h1>
          <div className="flex items-center my-3">
            <img width={40} src={course.teacherImg} alt="" />
            <h3 className="font-bold text-xl text-purple-600 ml-2">
              {course.teacher}
            </h3>
          </div>
          <div className="flex items-center mb-3">
            {[...Array(5)].map(() => starSvg)}
            <p className="text-gray-500 text-semibold ml-2">
              {course.teacherReviews}
              total reviews for the teacher
            </p>
          </div>
          <div className="flex items-center mb-5">
            {[...Array(5)].map(() => starSvg)}
            <p className="text-gray-500 text-semibold ml-2">
              {course.reviews} reviews for the class
            </p>
          </div>
          <h5 className="text-gray-700 font-bold">
            Completed by {course.learner} learners{" "}
          </h5>
          <div className="flex flex-wrap">
            <button className="py-2 px-7 bg-purple-700 text-white my-5 rounded-full font-semibold">
              See Class Schedule {arrowSvg}
            </button>
            <button className="text-purple-600 font-bold ml-7">
              {likeSvg} Save
            </button>
            <button className="text-purple-600 font-bold ml-7">
              {shareSvg} Share
            </button>
          </div>
        </div>
        <div className=" w-full md:order-2 order-1 mb-5">
          <img className="w-full" src={course.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

const likeSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 inline"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const arrowSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 inline"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const shareSvg = (
  <svg
    className="h-6 w-6 inline text-purple-700"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="#7e22ce"
  >
    <path d="M503.7 226.2l-176 151.1c-15.38 13.3-39.69 2.545-39.69-18.16V272.1C132.9 274.3 66.06 312.8 111.4 457.8c5.031 16.09-14.41 28.56-28.06 18.62C39.59 444.6 0 383.8 0 322.3c0-152.2 127.4-184.4 288-186.3V56.02c0-20.67 24.28-31.46 39.69-18.16l176 151.1C514.8 199.4 514.8 216.6 503.7 226.2z" />
  </svg>
);

const starSvg = (
  <svg
    className="h-6 w-6 inline"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="#FAC847"
  >
    <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
  </svg>
);
