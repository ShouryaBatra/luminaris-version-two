import { useState } from "react";
import "../App.css";
// import Form from '../components/Form/Form'
import { createStudyPlanPromptBuilder, generateContent } from "../utils";
import Header from "../components/Header/Header";
import GeneratedContent from "../components/GeneratedContent/GeneratedContent";
import PromptForm from "../components/PromptForm/PromptForm";
import { Button } from "@/components/ui/button";


export default function PlanBuilder() {
  const [promptProps, setPromptProps] = useState({
    subject: "Mathematics",
    subModule: "Algebra",
    duration: "1 month",
    grade: "8th",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [generatedContent, setGeneratedContent] = useState(null);

  function handlePromptChange(name, event) {
    // const name = event.target.name;
    // // console.log(`name`, name);
    // const value = event.target.value;
    // setPromptProps((prev) => ({
    //   ...prev,
    //   [name]: event,
    // }));
    console.log(event);
    
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
      <Header />
      <PromptForm
        promptProps={promptProps}
        handlePromptChange={handlePromptChange}
        handleSubmitPrompt={handleSubmitPrompt}
      />
      <GeneratedContent
        loading={loading}
        error={error}
        content={generatedContent ?? dummyContent}
      />
    </>
  );
}

const dummyContent =
  '# Week 1\n\n## Day 1\n\n###  Objective\n\n* To understand the basic concepts of variables, expressions, and equations. \n\n### What are Variables?\n\nA variable is a symbol, usually a letter, that represents an unknown value. For example, in the expression "x + 2", x is a variable.  Variables are like empty boxes that can hold different numbers. They allow us to write mathematical expressions and equations in a general way.\n\n### What are Expressions?\n\nAn expression is a combination of numbers, variables, and operations. It represents a mathematical calculation.  Examples of expressions include "3x + 5", "2y - 7", and "4 + 2 * x".  Expressions do not have an equal sign, which is the key difference between an expression and an equation.\n\n### What are Equations?\n\nAn equation is a mathematical statement that shows that two expressions are equal.  Equations always have an equal sign. For example, "2x + 3 = 7" is an equation.  Equations allow us to solve for the value of a variable.\n\n### Practice Questions\n\n1.  What is the variable in the expression "5y - 2"?\n2.  Identify the expression in the equation "3x + 4 = 10".\n3.  Write an equation that represents the statement "The sum of twice a number and 5 is 11".\n\n### Answers and Explanations\n\n1. **y**  (A variable is a letter that represents an unknown value.)\n2. **3x + 4**  (An expression is a combination of numbers, variables, and operations.)\n3. **2x + 5 = 11** (The equation sets two expressions equal to each other.)\n\n## Day 2\n\n### Objective\n\n* To learn how to simplify algebraic expressions by combining like terms.\n\n### Combining Like Terms\n\nLike terms are terms that have the same variable and the same exponent. To simplify an algebraic expression, we combine like terms by adding or subtracting their coefficients. For instance, in the expression "3x + 2x - 5", the terms "3x" and "2x" are like terms. Combining them, we get 5x.\n\n### Distributive Property\n\nThe distributive property helps us simplify expressions involving multiplication. It states that multiplying a sum by a number is the same as multiplying each term of the sum by that number. For example, 2(x + 3) is equal to 2x + 6.\n\n### Example\n\nSimplify the expression "4y + 2y - 7 + 3". \n\nWe can combine the \'y\' terms and the constant terms:  \n4y + 2y = 6y\n-7 + 3 = -4\n\nThe simplified expression is: **6y - 4**\n\n### Practice Questions\n\n4. Simplify the expression "7a + 3a - 2".\n5. Simplify the expression "5(x + 2)".\n6. Simplify the expression "3x - 2y + 5x + 4y". \n\n### Answers and Explanations\n\n4. **10a - 2** (Combine like terms: 7a + 3a = 10a)\n5. **5x + 10** (Use the distributive property: 5(x) + 5(2))\n6. **8x + 2y** (Combine like terms: 3x + 5x = 8x, -2y + 4y = 2y)\n\n\n# Week 2\n\n## Day 1\n\n### Objective\n\n* To understand the concept of solving one-step equations.\n\n### One-Step Equations\n\nOne-step equations are equations that can be solved in one step. To solve for the variable, we need to isolate the variable on one side of the equation.  We can do this by using inverse operations.\n\n### Inverse Operations\n\nInverse operations are operations that undo each other. For example, addition and subtraction are inverse operations, and multiplication and division are inverse operations.\n\n### Example\n\nSolve the equation "x + 5 = 10". \n\nTo isolate x, we need to subtract 5 from both sides of the equation:\nx + 5 - 5 = 10 - 5\n\nThis gives us:\nx = 5\n\n### Practice Questions\n\n7. Solve the equation "y - 3 = 7".\n8. Solve the equation "2z = 12".\n\n### Answers and Explanations\n\n7. **y = 10** (To isolate y, add 3 to both sides of the equation: y - 3 + 3 = 7 + 3)\n8. **z = 6** (To isolate z, divide both sides of the equation by 2: 2z / 2 = 12 / 2)\n\n\n## Day 2\n\n### Objective\n\n* To understand the concept of solving two-step equations.\n\n### Two-Step Equations\n\nTwo-step equations require two steps to solve.  First, we use inverse operations to undo any addition or subtraction, then we undo any multiplication or division.\n\n### Example\n\nSolve the equation "3x - 2 = 10".\n\n1. **Undo the subtraction:** Add 2 to both sides of the equation:\n3x - 2 + 2 = 10 + 2 \nThis simplifies to:\n3x = 12\n\n2. **Undo the multiplication:** Divide both sides of the equation by 3:\n3x / 3 = 12 / 3\nThis gives us:\nx = 4\n\n### Practice Questions\n\n9. Solve the equation "4x + 5 = 13".\n10. Solve the equation "2y - 7 = 3".\n\n### Answers and Explanations\n\n9. **x = 2** (1. Subtract 5 from both sides: 4x = 8. 2. Divide both sides by 4: x = 2)\n10. **y = 5** (1. Add 7 to both sides: 2y = 10. 2. Divide both sides by 2: y = 5) \n\n\n# Week 3\n\n## Day 1\n\n### Objective\n\n* To learn how to solve equations with variables on both sides.\n\n### Variables on Both Sides\n\nWhen variables appear on both sides of the equation, we need to move all the variable terms to one side and all the constant terms to the other side.\n\n### Example\n\nSolve the equation "5x - 2 = 2x + 7".\n\n1. **Move the variable terms to one side:** Subtract 2x from both sides:\n5x - 2 - 2x = 2x + 7 - 2x\nThis simplifies to:\n3x - 2 = 7\n\n2. **Move the constant terms to the other side:** Add 2 to both sides:\n3x - 2 + 2 = 7 + 2\nThis simplifies to:\n3x = 9\n\n3. **Solve for x:** Divide both sides by 3:\n3x / 3 = 9 / 3\nThis gives us:\nx = 3\n\n### Practice Questions\n\n11. Solve the equation "7m + 5 = 3m - 1".\n12. Solve the equation "2n - 8 = 5n + 4". \n\n### Answers and Explanations\n\n11. **m = -1.5** (1. Subtract 3m from both sides: 4m + 5 = -1. 2. Subtract 5 from both sides: 4m = -6. 3. Divide both sides by 4: m = -1.5)\n12. **n = -4** (1. Subtract 2n from both sides: -8 = 3n + 4. 2. Subtract 4 from both sides: -12 = 3n. 3. Divide both sides by 3: n = -4)\n\n## Day 2\n\n### Objective\n\n* To understand how to solve equations with fractions.\n\n### Equations with Fractions\n\nWhen solving equations with fractions, we can multiply both sides of the equation by the least common multiple (LCM) of the denominators. This eliminates the fractions and simplifies the equation.\n\n### Example\n\nSolve the equation "x/2 + 1/3 = 5/6".\n\n1. **Find the LCM:** The LCM of 2, 3, and 6 is 6.\n\n2. **Multiply both sides by the LCM:**\n6(x/2 + 1/3) = 6(5/6)\n\n3. **Simplify:**\n3x + 2 = 5\n\n4. **Solve for x:** \n3x = 3 \nx = 1\n\n### Practice Questions\n\n13. Solve the equation "2/5x - 1/4 = 3/10".\n14. Solve the equation "1/3y + 2 = 5/6". \n\n### Answers and Explanations\n\n13. **x = 2.25** (1. Find the LCM of 5, 4, and 10, which is 20. 2. Multiply both sides by 20: 8x - 5 = 6. 3. Add 5 to both sides: 8x = 11. 4. Divide both sides by 8: x = 2.25) \n14. **y = 0.5** (1. Find the LCM of 3 and 6, which is 6. 2. Multiply both sides by 6: 2y + 12 = 5. 3. Subtract 12 from both sides: 2y = -7. 4. Divide both sides by 2: y = -3.5)\n\n\n# Week 4\n\n## Day 1\n\n### Objective\n\n* To learn how to solve inequalities.\n\n### Inequalities\n\nInequalities are mathematical statements that compare two expressions using symbols like \u003c (less than), \u003e (greater than), ≤ (less than or equal to), and ≥ (greater than or equal to).  \n\n### Solving Inequalities\n\nSolving inequalities is similar to solving equations. We use inverse operations to isolate the variable.  However, there is one important difference: when multiplying or dividing both sides of an inequality by a negative number, we must flip the inequality sign.\n\n### Example\n\nSolve the inequality "2x + 3 \u003c 9".\n\n1. **Subtract 3 from both sides:** \n2x + 3 - 3 \u003c 9 - 3\nThis simplifies to:\n2x \u003c 6\n\n2. **Divide both sides by 2:**\n2x / 2 \u003c 6 / 2\nThis gives us:\nx \u003c 3\n\n### Practice Questions\n\n15. Solve the inequality "3y - 5 ≥ 10".\n16. Solve the inequality "-4x + 2 \u003c 10".\n\n### Answers and Explanations\n\n15. **y ≥ 5** (1. Add 5 to both sides: 3y ≥ 15. 2. Divide both sides by 3: y ≥ 5.)\n16. **x \u003e -2** (1. Subtract 2 from both sides: -4x \u003c 8. 2. Divide both sides by -4 and flip the inequality sign: x \u003e -2.)\n\n\n## Day 2\n\n### Objective\n\n* To learn how to graph inequalities on a number line.\n\n### Graphing Inequalities\n\nTo graph an inequality on a number line, we first find the solution set.  Then, we represent the solution set on the number line using an open circle for \u003c or \u003e and a closed circle for ≤ or ≥.  We then shade the part of the number line that represents the solution set.\n\n### Example\n\nGraph the inequality "x \u003c 3".\n\n1. **Solution set:** The solution set includes all numbers less than 3.\n\n2. **Number line:** Draw a number line. \n\n3. **Mark the point:** Place an open circle at 3.  We use an open circle because the inequality is x \u003c 3.\n\n4. **Shade the solution:** Shade the part of the number line to the left of 3.\n\n### Practice Questions\n\n17. Graph the inequality "y ≥ -2".\n18. Graph the inequality "m \u003c 1". \n\n### Answers and Explanations\n\n17. The graph will have a closed circle at -2 and be shaded to the right.\n18. The graph will have an open circle at 1 and be shaded to the left. \n';
