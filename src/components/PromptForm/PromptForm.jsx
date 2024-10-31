import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
          
          <Select name="grade" onValueChange={handlePromptChange("grade")}>
            <SelectTrigger className="w-[180px]" >
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup >
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="1st">1st</SelectItem>
                <SelectItem value="2nd">2nd</SelectItem>
                <SelectItem value="3rd">3rd</SelectItem>
                <SelectItem value="4th">4th</SelectItem>
                <SelectItem value="5th">5th</SelectItem>
                <SelectItem value="6th">6th</SelectItem>
                <SelectItem value="7th">7th</SelectItem>
                <SelectItem value="8th">8th</SelectItem>
                <SelectItem value="9th">9th</SelectItem>
                <SelectItem value="10th">10th</SelectItem>
                <SelectItem value="11nd">11nd</SelectItem>
                <SelectItem value="12nd">12nd</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

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
