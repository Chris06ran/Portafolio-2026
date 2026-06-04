import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    // IMPORTANTE: Sustituye 'TU_ID_AQUÍ' por el código que te da Formspree
    try {
      const response = await fetch("https://formspree.io/f/mojnpzkb", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: false });
        setFormData({ name: '', email: '', message: '' });
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => setStatus(prev => ({ ...prev, submitted: false })), 5000);
      } else {
        throw new Error('Error en la respuesta');
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">¿Hablamos?</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 italic">
          "La comunicación clara es el primer paso para un gran proyecto."
        </p>

        <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm text-left transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Nombre</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Correo electrónico</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                placeholder="tu@email.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Mensaje</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
              placeholder="¿En qué puedo ayudarte con tu próximo reto técnico?"
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={status.submitting}
            className={`w-full md:w-auto px-10 py-4 font-bold rounded-xl transition-all shadow-lg ${
              status.submitting 
              ? "bg-slate-400 cursor-not-allowed" 
              : "bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 active:scale-95 shadow-indigo-200 dark:shadow-none"
            }`}
          >
            {status.submitting ? "Enviando..." : "Enviar mensaje"}
          </button>

          {/* Mensaje de Éxito */}
          {status.submitted && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-center font-medium animate-fade-in border border-green-200 dark:border-green-800">
              ¡Mensaje enviado con éxito! Me pondré en contacto pronto.
            </div>
          )}

          {/* Mensaje de Error */}
          {status.error && (
            <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-center font-medium border border-red-200 dark:border-red-800">
              Ocurrió un error al enviar. Por favor, intenta de nuevo.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;