import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
// import Form from './components/Form/Form'
import { Results } from "./components/Results/Results";
import { createStudyPlanPromptBuilder, generateContent } from "./utils";
  
function App() {
  const [promptProps, setPromptProps] = useState({
    subject: "",
    subModule: "",
    duration: "",
    grade: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [generatedContent, setGeneratedContent] = useState(null);

  function handlePromptChange(event) {
    const name = event.target.name;
    // console.log(`name`, name);
    const value = event.target.value;
    setPromptProps((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmitPrompt = async (event) => {
    event.preventDefault();
    // 1. build the prompt
    const prompt = createStudyPlanPromptBuilder(promptProps);
    // 2. Start loading and clear error
    setError(null);
    setLoading(true);

    try {
      // 3. Call the API (into try-catch-finally)
      const result = await generateContent(prompt);
      // 4. Update state
      setGeneratedContent(result);
    } catch (error) {
      // 5. catch errors
      console.error(error);
      setError(JSON.stringify(error));
    } finally {
      // 6. End loading
      setLoading(false);
    }
  };

  return (
    <>
      <Main
        promptProps={promptProps}
        handlePromptChange={handlePromptChange}
        handleSubmitPrompt={handleSubmitPrompt}
      />
      <Results loading={loading} error={error} content={generatedContent} />
    </>
  );
}

export default App;
