"use client"

import { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import * as z from 'zod'

import { TiSocialFacebook, TiSocialYoutube }
    from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import Header from '../Header'
// import {subscribeFormSchema} from "@/lib/validator"




const Newsletter = () => {
    
const onSubmit = (values:any) => {

   
};
    
// const form = useForm<z.infer<typeof subscribeFormSchema>>({
//     resolver: zodResolver(subscribeFormSchema),
//     defaultValues: {}
//   })

  const form = useForm()
    

  return (
      <div className="mt-36">
                <Header title="Our newsletter" subtitle="Subscribe Our Newsleter" />

    <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 items-center p-6 py-10">
            
              <div className="flex flex-col items-center">
                
<p>Sign up for our newsletter and receive Agency updates</p>
              </div>
              <div className="flex flex-col gap-3">
                  <div className="flex flex-row">

                 
       
        <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    

                      <Input placeholder="First Name" {...field} className="input-field" />
                    </div>

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
                  />
                  <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    

                      <Input placeholder="Last Name" {...field} className="input-field" />
                    </div>

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
                      />
                       </div>
                  <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    

                      <Input placeholder="Enter your email" {...field} className="input-field" />
                    </div>

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
     

        

       
              

        <Button 
          type="submit"
          size="lg"             
          className="mt-4 button col-span-2 w-full bg-themeColor border-2 border-white"
        >
          Subscribe Now</Button>
        
</div>
      </form>
      </Form>
     
      </div>
  )
}

export default Newsletter