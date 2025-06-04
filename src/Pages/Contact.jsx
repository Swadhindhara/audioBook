import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, User2 } from "lucide-react";
import React from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="main">
        <div className="container mx-auto">
          <div className="contact py-10 px-[4%] flex items-center justify-center flex-col gap-7">
            <div className="box bg-orange-200 py-1 px-6 text-amber-600 rounded-3xl">
              Contact
            </div>

            <div className="form flex justify-center items-center gap-4 flex-col md:w-[500px]">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-[Nunito] font-bold">
                Let&apos;s Get In Touch
              </h2>
              <p className="text-zinc-500 font-[Rubik]">
                or just reach out manually to{" "}
                <a href="#" className="text-amber-600 ont-[Rubik]">
                  demo@gmail.com
                </a>
              </p>
              <div className="input_div w-full flex flex-col gap-1">
                <label htmlFor="name">Full Name</label>
                <div className="box flex items-center border border-zinc-500 rounded-xl px-3">
                  <User2 />
                  <Input
                    placeholder="Enter your full name"
                    className={`border-none h-10`}
                  />
                </div>
              </div>
              <div className="input_div w-full flex flex-col gap-1">
                <label htmlFor="name">Email Address</label>
                <div className="box flex items-center border border-zinc-500 rounded-xl px-3">
                  <Mail />
                  <Input
                    placeholder="Enter your email address"
                    type="email"
                    className={`border-none h-10`}
                  />
                </div>
              </div>
              <div className="input_div w-full flex flex-col gap-1">
                <label htmlFor="name">Phone Number</label>
                <div className="box flex items-center border border-zinc-500 rounded-xl px-3">
                  <Phone />
                  <Input
                    placeholder="Enter your phone number"
                    type="number"
                    className={`border-none h-10`}
                  />
                </div>
              </div>
              <div className="input_div w-full flex flex-col gap-1">
                <label htmlFor="name">Message</label>
                <div className="box flex items-center border border-zinc-500 rounded-xl px-3">
                  <Textarea
                    placeholder="Type your message here."
                    className={`w-full border-none h-24 shadow-none`}
                  />
                </div>
              </div>
                <div className="flex items-center space-x-2 w-full">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <Button className={`w-full cursor-pointer py-5 rounded-2xl bg-amber-600 text-white hover:bg-black hover:text-white`}>Submit Form</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
