"use client";

import React, { useState } from 'react';
import { useColor } from './../contexts/ColorContext';
import { usePathname } from 'next/navigation';

const BASIN_ENDPOINT = 'https://usebasin.com/f/YOUR_ENDPOINT_TOKEN';

type FormState = 'idle' | 'submitting' | 'success' | 'error';
type FieldErrors = { name?: string; email?: string; message?: string };

const Formular = () => {
  const pathname = usePathname();
  const colorMap = useColor();
  const currentColor = colorMap[pathname as keyof typeof colorMap]?.color || 'zluta';

  const [fields, setFields] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormState>('idle');

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!fields.name.trim()) e.name = 'Zadejte prosím jméno a příjmení.';
    if (!fields.email.trim()) {
      e.email = 'Zadejte prosím e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = 'Zadejte prosím platný e-mail.';
    }
    if (!fields.message.trim()) e.message = 'Zadejte prosím zprávu.';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch("https://usebasin.com/f/baa5a989eacb", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus('success');
        setFields({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-lg border ${hasError ? 'border-red-500' : 'border-gray-300'} bg-white px-4 py-2.5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-current transition`;

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-4 text-${currentColor}`} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium text-black">Jméno a příjmení *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={fields.name}
            onChange={handleChange}
            placeholder="Jan Novák"
            className={inputClass(!!errors.name)}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-black">E-mail *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="jan@example.cz"
            className={inputClass(!!errors.email)}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm font-medium text-black">Telefon</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={fields.phone}
          onChange={handleChange}
          placeholder="+420 123 456 789"
          className={inputClass(false)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium text-black">Zpráva *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={handleChange}
          placeholder="Vaše zpráva…"
          className={`${inputClass(!!errors.message)} resize-none`}
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
      </div>

      {status === 'success' && (
        <p className="rounded-lg bg-green-50 border border-green-300 px-4 py-2 text-green-700 text-sm">
          Zpráva byla úspěšně odeslána. Ozveme se vám co nejdříve.
        </p>
      )}
      {status === 'error' && (
        <p className="rounded-lg bg-red-50 border border-red-300 px-4 py-2 text-red-700 text-sm">
          Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`self-start rounded-lg bg-${currentColor} px-6 py-2.5 font-semibold text-white transition hover:opacity-90 disabled:opacity-50`}
      >
        {status === 'submitting' ? 'Odesílám…' : 'Odeslat zprávu'}
      </button>
    </form>
  );
};

export default Formular;
