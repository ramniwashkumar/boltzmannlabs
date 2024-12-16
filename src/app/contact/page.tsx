import ContactForm from "@/components/contactForm/ContactForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact us"
}

const Contact = () => {
  return (
    <ContactForm />
  )
}

export default Contact