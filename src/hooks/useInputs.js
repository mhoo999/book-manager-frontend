import { useState } from 'react'

const useInputs = (initialData) => {
  const [form, setForm] = useState(initialData)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const reset = () => {
    setForm(initialData)
  }

  return [form, onChange, reset]
}

export default useInputs
