import React from "react";
import classes from "./Accordion.module.css";
import { useState } from "react";
import { accordionItems } from "../utilities/accordionItems";

const Accordion = () => {
  const [toggle, setToggle] = useState();
  const [youtube, setYoutube] = useState(accordionItems[0].value[0].link);
  const [title, setTitle] = useState(`Video1A: ${accordionItems[0].value[0].title}`);

  const handleToggle = (index) => {
    if (index === toggle) {
      return setToggle(null);
    }
    return setToggle(index);
  };


  const handleTitle = (text) => {
    return setTitle(text);
  };

  console.log(title)

  return (
    <div className={`container ${classes.classGrid}`}>
      <div className={`${classes.width} ${classes.classGridItem}`}>
        <iframe
          className={`${classes.iframe}`}
          height="315"
          src={youtube}
          // src="https://www.youtube.com/embed/V68xMTqifoE?si=RelryFKtyFfptPZR"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h5>{title}</h5>
      </div>

      <div className={`container ${classes.classGridItem}`}>
        {accordionItems.map((kevin, i) => {
          return (
            <div>
              <div
                className={`${classes.accordionBtn}`}
                onClick={() => {
                  handleToggle(i);
                }}
              >
                Module {i + 1}{" "}
                <span className={classes.plus}>{toggle === i ? "-" : "+"}</span>{" "}
              </div>
              <div>
                {kevin.value.map((data) => {
                  return (
                    <div>
                      {toggle === i ? (
                        <div
                          className={classes.content}
                          onClick={() => {
                            handleTitle(
                              `Video${i + 1} ${data.id}: ${data.title}`
                            );
                            setYoutube(
                              data.link,
                              `Video${i + 1} ${data.id}: ${data.title}`
                            );
                          }}
                        >
                          <a>
                            Video{i + 1}
                            {data.id}: {data.title}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
