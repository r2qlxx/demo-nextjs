"use client"
import { useState } from "react"

const TextArea = () => {
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <textarea className={`block w-full p-2 h-12 bg-transparent appearance-none border-b-2 border-gray-500 focus:border-blue-500 focus:outline-none peer resize-none focus:h-96 transition-all ${value && "h-96"}`} required onChange={e => setValue(e.target.value)} />
      <label className={`absolute left-2 pointer-events-none peer-focus:top-0 transition-all ${value ? "top-0 -translate-y-1/2 text-xs" : "top-1/2 -translate-y-1/2"} peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500`}>Message</label>
    </div>
  )
}
export default TextArea