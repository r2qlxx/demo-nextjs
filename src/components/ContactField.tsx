"use client"
import { useState } from "react"

type Props = {
  type: string,
  name: string,
  required: boolean,
  label: string,
}

const ContactField = ({ type, name, required, label }: Props) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <input type={type} name={name} value={value} className="block w-full h-12 p-2 bg-transparent appearance-none border-b-2 border-gray-500 focus:border-blue-500 focus:outline-none peer" required={required} onChange={e => setValue(e.target.value)} />
      <label className={`absolute left-2 pointer-events-none peer-focus:top-0 transition-all ${value ? "top-0 -translate-y-1/2 text-xs" : "top-1/2 -translate-y-1/2"} peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500`}>{label}</label>
    </div>
  )
}
export default ContactField