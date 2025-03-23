import React from "react";
import "../Styles/about/About.styles.scss";
import { TransitionAbout } from "../components/about/TransitionAbout.component";
import { SectionDecorations } from "../components/about/SectionDecorations.component";

const Pin = (props: { left: boolean; title: string, role: string }) => {
  return (
    <div
      style={{
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        backgroundColor: "yellow",
        margin: "10px 10px",
      }}
    >
      <div
        style={{
          position: "relative",
          top: "50%",
          color: "white",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: props.left ? "0" : "100%",
            transform: props.left
              ? "translate(-103%, -60%)"
              : "translate(3%, -50%)",
            color: "white",
            fontFamily: "monospace",
            fontSize: "16px",
            whiteSpace: "nowrap",
          }}
        >
          {props.role}
        </span>
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: props.left ? "100%" : "0",
            transform: props.left
              ? "translate(5%, -50%)"
              : "translate(-105%, -60%)",
            color: "red",
            fontFamily: "monospace",
            fontSize: "12px",
            whiteSpace: "nowrap",
          }}
        >
          {props.title}
        </span>
      </div>
    </div>
  );
};

const Line = () => {
  return (
    <div
      style={{
        height: "40px",
        width: "5px",
        backgroundColor: "yellow",
        top: "50%",
      }}
    ></div>
  );
};

const About = () => {
  const data = [
    {
      id: 1,
      name: "Pin",
      component: <Pin left title="March 2024 - Present" role="Fullstack engineer @DTx" />,
    },
    {
      id: 2,
      name: "Line",
      component: <Line />,
    },
    {
      id: 3,
      name: "Pin",
      component: <Pin left={false} title="January 2025 - Present" role="Blockchain Game Developer @ Play Solana" />,
    },
    {
      id: 4,
      name: "Line",
      component: <Line />,
    },
    {
      id: 5,
      name: "Pin",
      component: <Pin left title="September 2023 - Present" role="Development Depart Director @NECC" />,
    },
    {
      id: 6,
      name: "Line",
      component: <Line />,
    },
    {
      id: 7,
      name: "Pin",
      component: <Pin left={false} title="Intership 2022/2023" role="Backend Developer @ NFTickit" />,
    },
    {
      id: 8,
      name: "Line",
      component: <Line />,
    },
    {
        id: 7,
        name: "Pin",
        component: <Pin left={true} title="25/03/2004 - Birth" role="The dream started" />,
    },
  ];

  return (
    <section className="about-container">
      <SectionDecorations />

      <article
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item.component}
          </div>
        ))}
      </article>

      <TransitionAbout />


      <div style={{
        position: "absolute",
        bottom: "50px",
        zIndex: 100,
        backgroundColor: "black",
        color: "white",
      }}>
        This page is under construction (I don&apos; have time to finish it yet 😅)
      </div>
    </section>
  );
};

export default About;
