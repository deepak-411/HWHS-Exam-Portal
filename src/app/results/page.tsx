
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { findUser } from "@/lib/user-store";

const FormSchema = z.object({
  rollNumber: z.string().min(1, "Roll number is required."),
  class: z.string().min(1, "Class is required."),
  section: z.string().min(1, "Section is required."),
});

export default function ResultsSearchPage() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      rollNumber: "",
      class: "",
      section: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
     const user = findUser(data.rollNumber, data.class, data.section);

    if (user) {
       router.push(`/results/${data.rollNumber}?class=${data.class}&section=${data.section}`);
    } else {
      toast({
        variant: "destructive",
        title: "Student Not Found",
        description: "No student found with these details. Please check the details and try again.",
      });
    }
  }

  return (
     <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card/90 backdrop-blur-lg">
        <CardHeader className="items-center text-center">
            <Link href="/auth"><ArrowLeft className="absolute left-6 top-6"/></Link>
          <Logo />
          <CardTitle className="font-headline text-3xl">Check Your Result</CardTitle>
          <CardDescription>
            Enter your credentials to view your marksheet.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" suppressHydrationWarning>
                <FormField
                control={form.control}
                name="rollNumber"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Roll Number</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., 1" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="class"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Class</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your class" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {["6", "7", "8", "9", "10"].map((c) => (
                            <SelectItem key={c} value={c}>
                            Class {c}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="section"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Section</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your section" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                           <SelectItem value="A">A</SelectItem>
                           <SelectItem value="Daffodils">Daffodils</SelectItem>
                           <SelectItem value="Daisies">Daisies</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className="w-full">
                 View Marksheet
                </Button>
            </form>
            </Form>
        </CardContent>
      </Card>
    </div>
  );
}
