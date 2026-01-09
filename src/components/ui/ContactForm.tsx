'use client'

import { useState, ChangeEvent, FormEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    whatsapp: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  function validate() {
    let valid = true
    const newErrors = { name: '', whatsapp: '' }

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório.'
      valid = false
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp é obrigatório.'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!validate()) return

    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Erro ao enviar')

      setStatus('success')
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido'
      console.error(errorMessage)
      setStatus('error')
    }
  }

  return (
    <div className="py-8 md:py-2">
      <div className="mx-auto lg:max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 manrope-light ">
              Nome <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="Seu nome"
              className={`mt-1 p-2 w-full border text-gray-500 manrope-light text-[14px] rounded-md ${errors.name ? 'border-red-700' : ''}`}
            />
            {errors.name && <p className="text-red-700 text-sm">{errors.name}</p>}
          </div>

          {/* Email (opcional) */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 manrope-light ">
              Email (opcional)
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="seu@email.com"
              className="mt-1 p-2 w-full border rounded-md text-gray-500 manrope-light text-[14px] "
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 manrope-light ">
              WhatsApp <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="whatsapp"
              id="whatsapp"
              onChange={handleChange}
              value={formData.whatsapp}
              placeholder="(99) 99999-9999"
              className={`text-gray-500 manrope-light text-[14px] mt-1 p-2 w-full border rounded-md ${errors.whatsapp ? 'border-red-700' : ''}`}
            />
            {errors.whatsapp && <p className="text-red-700 text-sm">{errors.whatsapp}</p>}
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 manrope-light ">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              onChange={handleChange}
              value={formData.message}
              placeholder="Fale um pouco sobre seu projeto..."
              className="text-gray-500 mt-1 p-2 w-full border rounded-md text-[14px] manrope-light"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full text-white px-6 py-3 rounded-md hover:bg-[var(--darkgreen)] bg-[var(--green)] transition manrope-light text-base"
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar'}
          </button>

          {/* Status */}
          {status === 'success' && (
            <p className="text-green-700 font-medium text-center mt-4">Mensagem enviada com sucesso!</p>
          )}
          {status === 'error' && (
            <p className="text-red-700 font-medium text-center mt-4">Erro ao enviar. Tente novamente.</p>
          )}
        </form>
      </div>
    </div>
  )
}
