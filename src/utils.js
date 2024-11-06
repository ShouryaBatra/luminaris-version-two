import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyA7nxh9yTYwdFvA0S5VA9LF5AExsxBzs54");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are a tutor that is helping high schoolers learn more about the topic they need help in. Please reply in Markdown code and make sure that the explanations are easy to understand. Make the titles like week 1 and day 1 different sizes (ALL SHOULD BE H1, H2, H3, or p tags). But, DO NOT return KaTeX of any kind. Also have the full content provided in the module and sprinkle practice questions in between. Do not make it too long and limit the explanations to 150 words. Keep the practice questions one sentence long. ",
});

export const createStudyPlanPromptBuilder = ({
  subject,
  subModule,
  duration,
  grade,
}) => {
  return `I need help creating a lesson plan for a ${grade} grade student who needs help with learning about the subject ${subject}, specifically ${subModule}. In the lesson plan, please split it up by week/day (5 day weeks) and include practice questions in each one. Have 6 practice questions and answers for each module. The lesson plan is ${duration} long. Have a lot of information to read. The reading material must be a paragraph at least for each point. For each key concept, include a three sentence explanation of the concept. Also explain the objective of the module. Also include the answers to the questions and explanations to the answers. Additionally, I also needed it formatted in Markdown.`;
};

export const generateContent = async (prompt) => {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  let text = response.text();
  return text;
};

export const normalizedError = (error) => {
  const stringError = JSON.stringify(error);
  const parsedError = JSON.parse(stringError);

  return parsedError;
};
