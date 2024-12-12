"use client";
import { Link } from "lucide-react";
import { Button } from "@nextui-org/react";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

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
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <div className="text-white absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center m-auto w-full h-screen flex-col">
      <h1 className="text-[10vh] ">We’re Here to Help!</h1>
      <p className="text-[2vh]">
        Got questions, suggestions, or just want to say hello ? We’d love to
        hear from you !
      </p>

      <form className="flex mt-5 w-[40vw] flex-col" onSubmit={handleSubmit}>
        <span className="mt-3 uppercase text-sm text-gray-100 font-bold">
          Full Name
        </span>
        <input
          className=" bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <span className=" mt-3 uppercase text-sm text-gray-100 font-bold">
          Email
        </span>
        <input
          className=" bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
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
          {/* Send Message Button */}
          <Button
            className="uppercase text-sm font-semibold tracking-wide bg-sky-400 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            variant="shadow"
          >
            Send Message
          </Button>

          {/* Email Link */}
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

      {status === "loading" && <p>Sending...</p>}
      {status === "success" && <p>Message sent successfully!</p>}
      {status === "error" && <p>Failed to send message. Please try again.</p>}
    </div>
  );
};

export default AboutPage;
