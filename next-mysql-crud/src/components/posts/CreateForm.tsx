"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateForm() {
  return (
    <form className="flex flex-col space-y-3">
      <Input name="title" type="text" placeholder="Title" className="block" />

      <Input name="body" type="text" placeholder="Body" className="block" />
      <Button type="submit" className="w-fit">
        Submit
      </Button>
    </form>
  );
}
