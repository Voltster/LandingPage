import React from "react";
import ImageText from "./ImageText";
import Btn from "./Btn";
import Footer from "./Footer";
import Testimonial from "./Testimonial";

const data = [
  {
    title: "Interface Design",
    description:
      "User Interface (UI) Design focuses on anticipating what users might need to do and ensuring that the interface has elements that are easy to access, understand, and use to facilitate those actions.",
  },
  {
    title: "User Experience",
    description:
      "User experience (UX) focuses on having a deep understanding of users, what they need, what they value, their abilities, and also their limitations. It also takes into account the business ..",
  },
  {
    title: "Web Development",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications,",
  },
  {
    title: "Graphic Design",
    description:
      "Graphic design is a profession, academic discipline and applied art whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives. ",
  },
];

const About = () => {
  return (
    <section className="w-full h-screen mt-24  relative">
      <ImageText
        title={"Hey"}
        heading={"Watch Application"}
        description={
          "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities."
        }
        customClasses2={"customClasses3"}
        btnText1={"Read More About"}
        btnText2={"See My Work"}
        src={
          "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <ImageText
        title={"Who We Are"}
        heading={"Meet the team"}
        description={
          "The Ogilvy team gave my website a completely new look & optimized it to achieve faster results. I’m fully satisfied & suggest everybody to experience the services of Ogilvy."
        }
        customClasses1={`flex-row-reverse`}
        customClasses3={`hidden`}
        btnText1={"Learn More"}
        btnText2={"See My Work"}
        src={
          "https://media.istockphoto.com/id/1489671462/photo/group-of-successful-business-people-showing-thumbs-up.webp?s=1024x1024&w=is&k=20&c=DPYAbFPtbLtZECqUYvMhjsffKJyl9rfMsBq0TOXN38c="
        }
      />
      <div
        className={`w-full h-[650px] flex flex-row  justify-center items-center relative bg-gray-900 `}
      >
        <div className="w-6/12  ">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmt8ZW58MHx8MHx8fDA%3D"
            width={700}
            alt="images"
            className="object-cover h-[650px]"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="w-6/12 px-12  relative">
          <p className="text-xl  text-gray-4 uppercase">Our Work</p>
          <h3 className="text-3xl tracking-wide font-bold  uppercase my-2">
            What we do
          </h3>
          <div className="flex flex-wrap">
            {data.map((item, i) => (
              <div key={i} className=" flex-[50%] p-2">
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
          <Btn outline={true} text={"Contect Us"} customClasses={`border-yellow-50 w-1/3 mx-auto mt-4`}/>
        </div>
      </div>
      <Testimonial/>
      <Footer/>
    </section>
  );
};

export default About;
