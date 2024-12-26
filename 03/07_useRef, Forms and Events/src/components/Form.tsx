import { useRef, useState } from "react";

const Form = () => {
    type formData = {
        name: string,
        email: string,
        password: string,
    }

    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const [submittedData, setSubmittedData] = useState<formData>({
      name: "",
      email: "",
      password: "",
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const nameValue = name.current!.value // The exclamation mark ! after current is a TypeScript non-null assertion operator. It tells TypeScript that you are confident that name.current will not be null or undefined at this point in the code.
        const emailValue = email.current!.value
        const passwordValue = password.current!.value

        setSubmittedData({
            name: nameValue,
            email: emailValue,
            password: passwordValue,
        })
    }

  return <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Your name" ref={name}/>
    <input type="email" placeholder="Your email" ref={email}/>
    <input type="password" placeholder="Your password" ref={password}/>
    <button type="submit">Submit</button>

    <section>
        <h1>Name: {submittedData.name}</h1>
        <h1>Email: {submittedData.email}</h1>
        <h1>Password: {submittedData.password}</h1>
    </section>
  </form>;
};

export default Form;
