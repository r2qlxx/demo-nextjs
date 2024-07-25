"use client"
import ContactField from "@/components/ContactField"
import MaxWidthContainer from "@/components/MaxWidthContainer"
import TextArea from "@/components/TextArea"

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const firstname = formData.get("firstname");
    // snip
  }

  return (
    <MaxWidthContainer>
      <div className="flex flex-col justify-center items-center gap-20 max-w-screen-sm m-auto">
        <h1 className="text-2xl text-center">How can I help you ?</h1>
        <form className="flex flex-col gap-12 w-full" onSubmit={handleSubmit}>
          <ContactField type="text" name="firstname" required={true} label="First name" />
          <ContactField type="text" name="lastname" required={true} label="Last name" />
          <ContactField type="text" name="company" required={false} label="Company" />
          <ContactField type="email" name="email" required={true} label="Email" />
          <ContactField type="tel" name="phonenumber" required={false} label="Phone number" />
          <TextArea />
          <button type="submit" className="w-1/2 m-auto rounded-full text-white bg-blue-500 p-2 shadow hover:scale-105 hover:bg-orange-500 transition-all">Submit</button>
        </form>
      </div>
    </MaxWidthContainer >
  )
}
export default Contact