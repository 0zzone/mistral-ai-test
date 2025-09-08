import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {User} from "@/lib/types"

const formSchema = z.object({
  title: z.string().min(2, "Job title must be at least 2 characters"),
  description: z.string().min(2, "Job description must be at least 2 characters"),
})

const FormDiscussion = ({profile, discuss}: {profile: User, discuss: (data: {message: string}) => void}) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        if(!profile) {
            console.error("No profile data available")
            return
        }

        const message = `You are a career counselor AI assistant. Analyze the following job offer against my profile and provide a detailed analysis.

        JOB OFFER:
        Title: ${values.title}
        Description: ${values.description}

        MY PROFILE:
        Name: ${profile?.name}
        Role: ${profile?.role}
        Skills: ${profile?.skills.join(", ")}
        Bio: ${profile?.bio}

        Recent Experience:
        ${profile?.experiences.map(exp => `- ${exp.company} (${exp.startDate}-${exp.endDate || "Present"}): ${exp.description}`).join("\n")}

        Please analyze this job offer and return ONLY a valid JSON object with the following structure:
        {
            "matchingPercentage": number (0-100),
            "coverLetterExample": "A personalized cover letter example (2-3 paragraphs)",
            "keywordsForResume": [
                "keyword1",
                "keyword2",
                "keyword3"
            ],
            "keywordsForInterview": [
                "talking point 1",
                "talking point 2", 
                "talking point 3"
            ],
            "improvementAreas": [
                "specific skill or experience to develop",
                "another area for improvement",
                "third improvement suggestion"
            ],
            "strengths": [
                "matching strength 1",
                "matching strength 2",
                "matching strength 3"
            ],
            "salaryRange": {
                "min": number,
                "max": number,
                "currency": "EUR"
            }
        }

        Focus on:
        1. Matching percentage based on skills, experience level, and job requirements
        2. A compelling cover letter that highlights relevant experience (Thales AI work, full-stack development, etc.)
        3. Technical keywords from the job description that should appear in resume
        4. Specific talking points for interviews based on my experience
        5. Areas where I could improve to better match the role
        6. My strongest matching points for this position
        7. Estimated salary range for this position in France

        Return ONLY the JSON object, no additional text or formatting.`

        discuss({ 
            message
        })
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Software Engineer" className="bg-white text-black" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Job Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Describe the job responsibilities and requirements" className="bg-white text-black max-h-96 overflow-y-auto resize-none" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="cursor-pointer">Submit</Button>
            </form>
        </Form>
    )
}

export default FormDiscussion