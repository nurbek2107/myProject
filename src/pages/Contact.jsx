import { Form } from "react-router-dom";
import FormInput from "../components/FormInput";
import toast from "react-hot-toast";
function Contact() {
  const handleSubmit = () => {
    toast.success("We will contact you !")
  }
  return (
    <div className="main-container">
      <div className="contact-section bg-color-lightgreen mb-40 flex justify-between mt-8">
        <div className="flex flex-col pl-14 gap-52">
          <div className="w-[270px] pt-12 ">
            <h1 className="text-primary text-5xl font-semibold mb-4">
              Contact us
            </h1>
            <p className="text-primary text-base font-light">
              Send for us your request and we will get in touch with you as soon
              as possible
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <a
              className="flex items-center gap-[22px] font-semibold text-2xl"
              href="tel:+380987828223"
            >
              <img src="../assets/svg/phone.svg" alt="" />
              +380 98 782 82 23
            </a>
            <a
              className="flex items-center gap-[22px] font-semibold text-2xl"
              href="mailto:mailmail@gmail.com"
            >
              <img src="../assets/svg/email.svg" alt="" />
              mailmail@gmail.com
            </a>
          </div>
        </div>
        <Form className="bg-white w-[536px] h-[482px] rounded-[30px] px-8 py-7 mr-10 mb-8 mt-8 flex flex-col gap-5">
          <FormInput
            labelText="Name"
            placeholder="Your Name"
            type="text"
            name="name"
          />
          <FormInput
            labelText="E-mail"
            placeholder="Your Email"
            type="email"
            name="email"
          />
          <label className="text-lg font-mono flex flex-col">
          <div className="label">
            <span className="text-lg font-mono mb-1">Message</span>
          </div>
          <textarea className="textarea textarea-bordered bg-white resize-none" placeholder="Your Message"></textarea>
          </label>
          <div className="mt-3 flex gap-5 items-center">
            <button onClick={()=>handleSubmit()} className="btn btn-success bg-[#359740] text-white ">
              Send request
            </button>
            <p className="text-sm">
              By sending request you agree to <br /> out {" "}
              <a className="link" href="/">
                Pivacy&Policy
              </a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
