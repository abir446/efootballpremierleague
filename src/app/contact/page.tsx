"use client";
import { Button } from "@nextui-org/react";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import emailjs from "emailjs-com";
import gsap from "gsap";
import Magnet from "@/components/Magnet";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const AboutPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"loading" | "success" | "error" | null>(
    null
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", // Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "" // Public Key
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          gsap.to(".success-message", { opacity: 1, duration: 2 });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("error");
          gsap.to(".error-message", { opacity: 1, duration: 2 });
        }
      );
  };

  useEffect(() => {
    // GSAP animations for headings, paragraphs, and form elements
    gsap.from(".e", { opacity: 0, y: -30, duration: 1, stagger: 0.2, delay: .5 });
    gsap.from(".head", { opacity: 0, y: -50, duration: 1, stagger: 0.2 });
    gsap.from(".p", { opacity: 0, y: -10, duration: 1, stagger: 0.2, delay: .5 });
    gsap.from("form", { opacity: 0, y: 50, duration: 1, delay: 0.7 });
  }, []);

  return (
    <div className="text-white absolute left-0 right-0 top-0 bottom-0 p-5 md:p-0 flex justify-center items-center m-auto w-full h-screen flex-col">
      <p className="block md:hidden text-cyan-400 e text-glow ">
        EFOOTBALL - PREMIER - LEAGUE
      </p>

      <h1 className="text-[4.5vh] text-center text-nowrap mb-2 md:text-[8vh] lg:text-[10vh] head text-glow">
        We're Here to Help!
      </h1>
      <p className="text-center p text-[1vh] md:text-[2vh]">
        Got questions, suggestions, or just want to say hello? We'd love to
        hear from you!
      </p>
      <form
        className="flex mt-5 w-[80vw] md:w-[40vw] flex-col"
        onSubmit={handleSubmit}
      >
        <span className="mt-3 uppercase text-sm text-gray-100 font-bold">
          Full Name
        </span>
        <input
          className="bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <span className="mt-3 uppercase text-sm text-gray-100 font-bold">
          Email
        </span>
        <input
          className="bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <span className="mt-3 uppercase text-sm text-gray-100 font-bold">
          Message
        </span>
        <textarea
          className="h-32 bg-gray-300 resize-none scrollbar-hide text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="mt-8 flex justify-between items-center">
        <Magnet padding={500} disabled={false} magnetStrength={50}>


          <Button
            className="uppercase text-sm font-semibold tracking-wide bg-sky-400 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            variant="shadow"
            type="submit"
            disabled={status === "loading"}
            >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
            </Magnet>
          <h1 className="text-white font-medium">
            Hate Forms?{" "}
            <button
              onClick={() =>
                (window.location.href =
                  "mailto:efootballpremierleague@gmail.com?subject=Subject%20Here&body=Hello%20There")
              }
            >
              <span className="text-lime-400 cursor-pointer hover:underline">
                Email
              </span>
            </button>
          </h1>
        </div>
      </form>
      {status === "success" && (
        <p className="success-message text-green-300 font-medium mt-4">
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="error-message text-red-300 font-medium mt-4">
          Failed to send message. Please try again.
        </p>
      )}
    </div>
  );
};

export default AboutPage;
