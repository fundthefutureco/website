"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { SmartDatetimeInput } from "@/components/ui/smart-input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { api } from "@/trpc/react";
import { useState } from "react";
import { LoadingButton } from "@/components/ui/loading";

const formSchema = z.object({
  name: z.string().min(1).max(225),
  date: z.coerce.date(),
  location: z.string().min(1).max(225),
  description: z.string().min(1).max(225).optional(),
});

function MyForm({ callback }: { callback: () => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
    },
  });

  const utils = api.useUtils();

  const { mutate: create, isPending: loading } = api.events.create.useMutation({
    onSuccess() {
      callback();
      toast.success("Meeting created");
      void utils.events.invalidate();
    },
    onError(err) {
      toast.error(err.message);
      void utils.events.invalidate();
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    create(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name here" type="text" {...field} />
              </FormControl>
              <FormDescription>
                What is the name of this meeting
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What&apos;s the best time for you?</FormLabel>
              <FormControl>
                <SmartDatetimeInput
                  value={field.value}
                  onValueChange={field.onChange}
                  placeholder="e.g. Tomorrow morning 9am"
                />
              </FormControl>
              <FormDescription>Please select the full time</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="location" type="text" {...field} />
              </FormControl>
              <FormDescription>The location of the meeting</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Placeholder"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                briefly describe the meeting (optional)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton loading={loading} type="submit">
          Submit
        </LoadingButton>
      </form>
    </Form>
  );
}
export const CreateMeetingModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>Create Meeting</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new meeting</DialogTitle>
        </DialogHeader>
        <MyForm callback={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
