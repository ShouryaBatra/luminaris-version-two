import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

export default function PromptForm({
  promptProps,
  handlePromptChange,
  handleSubmitPrompt,
}) {
  return (
    <>
      {/* FORM HTML GOES HERE */}
      <form onSubmit={handleSubmitPrompt}>
        {/* Subject */}
        <div className="flex flex-col gap-2">
          <Input
            name="subject"
            value={promptProps.subject}
            placeholder="Subject (e.g Math, Science...)"
            required
            onChange={handlePromptChange}
          />

          {/* Sub-Module */}
          <Input
            value={promptProps.subModule}
            name="subModule"
            placeholder="Sub-Module (e.g Rev War)"
            required
            onChange={handlePromptChange}
          />

          {/* Duration */}
          <Input
            value={promptProps.duration}
            name="duration"
            placeholder="Duration of Lesson (e.g 3 Weeks)"
            required
            onChange={handlePromptChange}
          />

          {/* Grade */}
          <select
            name="grade"
            value={promptProps.grade}
            onChange={handlePromptChange}
          >
            <option value="" disabled hidden>
              Grade
            </option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
            <option value="11nd">11nd</option>
            <option value="12nd">12nd</option>
          </select>

          {/* Submit Button */}
          <Button type="submit">Generate</Button>
        </div>
      </form>

      {/* <div id="resultBox">
        <h1>testing 123</h1>
      </div> */}
    </>
  );
}
