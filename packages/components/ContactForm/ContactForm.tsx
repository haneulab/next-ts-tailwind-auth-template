import { useEffect, useState } from 'react'
import type { IContactForm } from './ContactForm.types'

const sendEmail = async (body) => {
    const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })

    if (!response.ok) throw Error('Error')
}

const ContactForm = (props: IContactForm) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const [isSending, setIsSending] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<-1 | 0 | 1>(-1)

    function onChnage(e, setter) {
        setter(e.target.value)
    }

    async function onSubmit(e) {
        e.preventDefault()
        setIsSending(true)

        await sendEmail({ name, email, message })
            .then(() => {
                setIsSuccess(1)
                setIsSending(false)
            })
            .catch((_error) => {
                setIsSuccess(0)
                setIsSending(false)
            })

        const resetters = [setName, setEmail, setMessage]
        resetters.forEach((setter) => {
            setter('')
        })
    }

    useEffect(() => {
        if (!isSending && isSuccess !== -1) {
            setTimeout(() => {
                setIsSuccess(-1)
            }, 1500)
        }
    }, [isSending])

    return (
        <div className="flex flex-col items-center w-full max-w-md mx-auto gap-y-4 lg:gap-y-6">
            <h3 className="font-bold">Contact Form</h3>
            {isSending ? (
                <p>Sending your email...</p>
            ) : isSuccess === 1 ? (
                <p>Successfully Sent The Email</p>
            ) : isSuccess === 0 ? (
                <p>Failed to Sent The Email</p>
            ) : (
                <form
                    onSubmit={onSubmit}
                    className="flex flex-col w-full gap-y-4"
                >
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
            )}
        </div>
    )
}

export default ContactForm
