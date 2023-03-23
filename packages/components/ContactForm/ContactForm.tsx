import { useState } from 'react'
import type { IContactForm } from './ContactForm.types'

const ContactForm = (props: IContactForm) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    function onSubmit(e) {
        e.preventDefault()
        alert('Submitting...')

        const resetters = [setName, setEmail, setMessage]
        resetters.forEach((setter) => {
            setter('')
        })
    }

    function onChnage(e, setter) {
        setter(e.target.value)
    }

    return (
        <div className="flex flex-col items-center w-full max-w-md mx-auto gap-y-4 lg:gap-y-6">
            <h3 className="font-bold">Contact Form</h3>
            <form onSubmit={onSubmit} className="flex flex-col w-full gap-y-4">
                {/* name */}
                <input
                    className="block w-full"
                    type="text"
                    placeholder="Your Name"
                    required={true}
                    value={name}
                    onChange={(e) => onChnage(e, setName)}
                />
                {/* email */}
                <input
                    className="block w-full"
                    type="email"
                    placeholder="Your Email"
                    required={true}
                    value={email}
                    onChange={(e) => onChnage(e, setEmail)}
                />
                {/* message */}
                <input
                    className="block w-full"
                    type="text"
                    placeholder="Your Message"
                    required={true}
                    value={message}
                    onChange={(e) => onChnage(e, setMessage)}
                />
                {/* submit */}
                <input
                    type="submit"
                    value="Send Message"
                    className="px-8 py-3 text-white bg-blue-500 transition-smooth lg:hover:bg-blue-400"
                />
            </form>
        </div>
    )
}

export default ContactForm
