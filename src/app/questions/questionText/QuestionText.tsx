"use client";
import React, { useState } from "react";
import "./questionText.scss";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Who pays transport tax?",
    answer: "Transport tax is paid by the company. The amount of transport tax is debited from the client.",
  },
  {
    id: 2,
    question: "Who pays fines for traffic violations?",
    answer: "Traffic fines are paid by the company. Later, the client is debited according to the agreement.",
  },
  {
    id: 3,
    question: "How to track fines for traffic violations?",
    answer: "Fines for violating traffic rules can be tracked in your personal account on website http://shtraf-auto.com/.",
  },
  {
    id: 4,
    question: "What to do if you lost your STS/PTS?",
    answer: "Contact company employees (office) for help.",
  },
  {
    id: 5,
    question: "How to buy a car early?",
    answer: "Contact the company's employees to recalculate the payment schedule.",
  },
  {
    id: 6,
    question: "Can a third party make payments for me?",
    answer: "Transport tax is paid by the company. The amount of transport tax is debited from the client.",
  },
  {
    id: 7,
    question: "Should I apply for/renew CASCO insurance?",
    answer: "Traffic fines are paid by the company. Later, the client is debited according to the agreement.",
  },
  {
    id: 8,
    question: "End of the leasing agreement, my steps?",
    answer: "Fines for violating traffic rules can be tracked in your personal account on website http://shtraf-auto.com/.",
  },
  {
    id: 9,
    question: "When the leasing agreement ends, how does the buyout take place?",
    answer: "Contact company employees (office) for help.",
  },
  {
    id: 10,
    question: "I am unable to continue making payments, what will happen?",
    answer: "Contact the company's employees to recalculate the payment schedule.",
  },
];

const QuestionText = () => {
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);
  const [faqChoosen, setFaqChoosen] = useState("LEASING");

  const handleStatusChange = (id: number) => {
    setOpenQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="questionMainBox">
      <div className="question">
        <h2>FAQ</h2>
        <p>The list of answers to frequently asked questions from our clients is constantly growing. Write to us so we can add to the list.</p>
      </div>

      <div className="leasingRent">
        <span className={faqChoosen === "LEASING" ? "faqChoosen" : ""} onClick={() => setFaqChoosen("LEASING")}>
          LEASING
        </span>
        <span className={faqChoosen === "RENT" ? "faqChoosen" : ""} onClick={() => setFaqChoosen("RENT")}>
          RENT
        </span>
      </div>

      <div className="questionMainBox__text">
        <div className="questionMainBox__text__holder">
          {questions.slice(0, 6).map(({ id, question, answer }) => (
            <div key={id} className={`questionMainBox__text__holder__box ${openQuestionId === id ? "open" : ""}`} onClick={() => handleStatusChange(id)}>
              <p>
                {question}
                <span>{answer}</span>
              </p>
              {openQuestionId === id ? <MdKeyboardArrowUp className="circleArrow red" /> : <MdKeyboardArrowDown className="circleArrow" />}
            </div>
          ))}
        </div>

        <span></span>

        <div className="questionMainBox__text__holder">
          {questions.slice(6).map(({ id, question, answer }) => (
            <div key={id} className={`questionMainBox__text__holder__box ${openQuestionId === id ? "open" : ""}`} onClick={() => handleStatusChange(id)}>
              <p>
                {question}
                <span>{answer}</span>
              </p>
              {openQuestionId === id ? <MdKeyboardArrowUp className="circleArrow red" /> : <MdKeyboardArrowDown className="circleArrow" />}
            </div>
          ))}
        </div>
      </div>

      <div className="questionContacts">
        <h3>DID NOT FIND AN ANSWER TO YOUR QUESTION?</h3>
        <p>Call us at: +998 ( __ ) - ___-__-__</p>
        <p>Working hours: from 10:00 to 18:00 (Mon – Sat)</p>
        <span>The call is free</span>
      </div>
    </div>
  );
};

export default QuestionText;
