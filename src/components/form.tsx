import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from './ui/textarea'
import { sendEmail } from '@/utils/sendEmail'

const formSchema = z.object({
  email: z.string().email().min(1, { message: 'Please enter your Email.' }),
  name: z.string().min(1, { message: 'Please enter your name.' }),
  message: z.string().min(10, { message: 'Please leave a message.' }),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const sent = await sendEmail(data)
    console.log(sent)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Your name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Your Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder='Your message...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}

/* 

curl --request POST \
--url https://api.courier.com/send \
--header 'Authorization: Bearer pk_prod_5Z0543Y3HDMQWYPG3FN0DH8KJHVA' \
--data '{
    "message": {
      "to": {"email":"jl_fischer@icloud.com"},
      "template": "ZGD3S4WAAGMDAFNHRJJ2CFD64BXN",
      "data": {"name":"Julian Fischer","message":"Hello, Julian!","email":"jl_fischer@icloud.com"}
    }
}'

*/
