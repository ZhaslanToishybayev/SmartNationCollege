'use server';
/**
 * @fileOverview An AI chatbot for answering college-related queries.
 *
 * - collegeQueryChatbot - A function that handles the chatbot interaction.
 * - CollegeQueryChatbotInput - The input type for the collegeQueryChatbot function.
 * - CollegeQueryChatbotOutput - The return type for the collegeQueryChatbot function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const CollegeQueryChatbotInputSchema = z.object({
  query: z.string().describe('The query from the student about the college.'),
});
export type CollegeQueryChatbotInput = z.infer<typeof CollegeQueryChatbotInputSchema>;

const CollegeQueryChatbotOutputSchema = z.object({
  response: z.string().describe('The response from the chatbot to the student.'),
});
export type CollegeQueryChatbotOutput = z.infer<typeof CollegeQueryChatbotOutputSchema>;

export async function collegeQueryChatbot(input: CollegeQueryChatbotInput): Promise<CollegeQueryChatbotOutput> {
  return collegeQueryChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'collegeQueryChatbotPrompt',
  input: {
    schema: z.object({
      query: z.string().describe('The query from the student about the college.'),
    }),
  },
  output: {
    schema: z.object({
      response: z.string().describe('The response from the chatbot to the student.'),
    }),
  },
  prompt: `You are a helpful AI chatbot assistant for answering student questions about the college.\n\nRespond to the following query: {{{query}}}`,
});

const collegeQueryChatbotFlow = ai.defineFlow<
  typeof CollegeQueryChatbotInputSchema,
  typeof CollegeQueryChatbotOutputSchema
>({
  name: 'collegeQueryChatbotFlow',
  inputSchema: CollegeQueryChatbotInputSchema,
  outputSchema: CollegeQueryChatbotOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});

