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
    <div className="p-6 flex mt-10 mb-10 sm:mt-[5vh] sm:mb-[5vh] sm:flex-row flex-col items-center justify-center sm:gap-x-[15vw] bg-black">
      <div className="text-center text-white text-4xl justify-center items-center">
        <h1 className="text-5xl font-bold">FAQS</h1>
      </div>
      <Collapse
        accordion
        bordered={false} // No borders
        expandIconPosition="start" // Arrow at the start
        className="bg-transparent"
      >
        {questionsAndAnswers.map((item, index) => (
          <Panel
            header={<span className="text-white">{item.question}</span>} // White text for the question
            key={index}
            className="text-white" // White text for the answer
          >
            <p className="text-gray-400 text-center">{item.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}
