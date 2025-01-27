import { Collapse } from "antd";

const { Panel } = Collapse;

const questionsAndAnswers = [
  {
    question: "What is your favorite color?",
    answer: "Lorem ipsum dolor sit amet.",
  },
  { question: "Where do you live?", answer: "Consectetur adipiscing elit." },
  {
    question: "What is your favorite hobby?",
    answer: "Sed do eiusmod tempor incididunt.",
  },
  {
    question: "What is your favorite food?",
    answer: "Ut labore et dolore magna aliqua.",
  },
];

export default function FAQ() {
  return (
    <div className="p-6 flex h-100  container mx-auto px-11  rounded-4xl mt-10 mb-10 sm:mt-[5vh] sm:mb-[5vh] sm:flex-row flex-col items-center justify-center sm:gap-x-[15vw]  bg-gradient-to-r from-[#bbcde1] to-[#6384a7]">
      <div className="text-center text-white text-4xl justify-center items-center">
        <h1 className="text-5xl text-black  font-bold">FAQS</h1>
      </div>
      <Collapse
        accordion
        bordered={false}
        expandIconPosition="start"
        className="bg-transparent text-black "
      >
        {questionsAndAnswers.map((item, index) => (
          <Panel
            header={
              <span className="text-black text-2xl font-bold">
                {item.question}
              </span>
            } // White text for the question
            key={index}
            className="text-black" // White text for the answer
          >
            <p className="text-black text-center">{item.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}
