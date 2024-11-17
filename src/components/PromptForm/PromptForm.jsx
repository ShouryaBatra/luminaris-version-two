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
  subject: z.string().min(1, { message: "Subject is required" }),
  subModule: z.string().min(1, { message: "Sub-Module is required" }),
  grade: z.string().min(1, { message: "Grade is required" }),
  duration: z.string().min(1, { message: "Duration is required" }),
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
      subject: promptProps.subject,
      subModule: promptProps.subModule,
      grade: promptProps.grade,
      duration: promptProps.duration,
    },
  });

  // Handle field changes
  const onFieldChange = (name, value) => {
    handlePromptChange({ target: { name, value } });
  };

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(
            isAuthenticated ? handleSubmitPrompt : null
          )}
          className="flex flex-col gap-4 w-full justify-around items-center "
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2 justify-center w-full flex-wrap">
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
                      onChange={(e) => {
                        field.onChange(e);
                        onFieldChange("subject", e.target.value);
                      }}
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
                    <Input
                      placeholder="Sub-Module (e.g Rev War)"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        onFieldChange("subModule", e.target.value);
                      }}
                    />
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
                      defaultValue={field.value}
                      name="grade"
                      onValueChange={(value) => {
                        field.onChange(value);
                        onFieldChange("grade", value);
                      }}
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
                <FormItem className="flex-1 min-w-1/6">
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Duration of Lesson (e.g 3 Weeks)"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        onFieldChange("duration", e.target.value);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {isAuthenticated ? (
            <Button className="w-1/4 " type="submit">
              Generate...
            </Button>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Button className="w-1/4 " type="submit">
                  Generate...
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <p>Log in required</p>
                <Link to="/login">
                  <Button>Log in</Button>
                </Link>
              </PopoverContent>
            </Popover>
          )}
        </form>
      </Form>
    </>
  );
}
