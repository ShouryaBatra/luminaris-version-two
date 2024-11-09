import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
("use client");

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export default function PromptForm({
  promptProps,
  handlePromptChange,
  handleSubmitPrompt,
  isAuthenticated,
}) {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "johndoe@gmail.com",
      password: "password1234",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
            <SelectTrigger>
              <SelectValue placeholder="Select a grade" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
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
                <SelectItem value="11th">11th</SelectItem>
                <SelectItem value="12th">12th</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Submit Button */}

          {isAuthenticated ? (
            <Button type="submit">Generate</Button>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Button type="button">Generate</Button>
              </PopoverTrigger>
              <PopoverContent>
                <p>Log in required</p>
                <Link to="/login">
                  <Button>Log in</Button>
                </Link>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </form>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitPrompt)}
          className="space-y-8"
        >
          {/* SUBJECT */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Subject (e.g Math, Science...)"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* SUB-MODULE */}
          <FormField
            control={form.control}
            name="subModule"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub-Module</FormLabel>
                <FormControl>
                  <Input placeholder="Sub-Module (e.g Rev War)" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* GRADE */}
          <FormField
            control={form.control}
            name="grade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grade</FormLabel>
                <FormControl>
                  <Select
                    name="grade"
                    onValueChange={handlePromptChange("grade")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Grades</SelectLabel>
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
                        <SelectItem value="11th">11th</SelectItem>
                        <SelectItem value="12th">12th</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* DURATION */}
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Duration of Lesson (e.g 3 Weeks)"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Generate</Button>
        </form>
      </Form>
    </>
  );
}
