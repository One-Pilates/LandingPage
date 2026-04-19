'use client';

import { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
  const CONTACT_RECEIVER =
    import.meta.env.VITE_EMAILJS_TO_EMAIL?.trim() ||
    import.meta.env.VITE_EMAIL?.trim() ||
    'contato@onepilates.com.br';

  const validateForm = (name: string, email: string, message: string): boolean => {
    if (!name || name.trim().length < 2) {
      Swal.fire({
        icon: 'error',
        title: 'Nome inválido',
        text: 'O nome precisa ter pelo menos 2 caracteres.',
        confirmButtonColor: '#ff6b35',
      });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Email inválido',
        text: 'Por favor, informe um email válido.',
        confirmButtonColor: '#ff6b35',
      });
      return false;
    }
    if (!message || message.trim().length < 10) {
      Swal.fire({
        icon: 'error',
        title: 'Mensagem curta',
        text: 'A mensagem precisa ter pelo menos 10 caracteres.',
        confirmButtonColor: '#ff6b35',
      });
      return false;
    }
    return true;
  };

  const confirmAndSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get('user_name') as string;
    const email = formData.get('user_email') as string;
    const message = formData.get('message') as string;

    if (!validateForm(name, email, message)) return;

    Swal.fire({
      title: 'Confirmar envio?',
      text: 'Deseja realmente enviar sua mensagem?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#ff6b35',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sim, enviar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        sendEmail();
      }
    });
  };

  const sendEmail = () => {
    if (!form.current) return;
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Configuração de email não encontrada.',
        confirmButtonColor: '#ff6b35',
      });
      return;
    }

    const formData = new FormData(form.current);
    const name = (formData.get('user_name') as string) ?? '';
    const email = (formData.get('user_email') as string) ?? '';
    const message = (formData.get('message') as string) ?? '';

    const templateParams = {
      user_name: name.trim(),
      user_email: email.trim(),
      message: message.trim(),
      to_email: CONTACT_RECEIVER,
      reply_to: email.trim(),
      from_name: 'Formulario One Pilates',
      source: 'landing-page',
    };

    setIsSending(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY })
      .then(
        (result) => {
          console.info('EmailJS enviado com sucesso:', result.status, result.text);
          Swal.fire({
            icon: 'success',
            title: 'Enviado!',
            text: 'Sua mensagem foi enviada com sucesso.',
            confirmButtonColor: '#ff6b35',
          });
          form.current?.reset();
        },
        (error: unknown) => {
          console.error('Erro ao enviar email via EmailJS:', error);
          Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Não foi possível enviar a mensagem. Tente novamente.',
            confirmButtonColor: '#ff6b35',
          });
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6f8f5_100%)] px-4 py-16 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="pointer-events-none absolute -left-12 top-12 h-52 w-52 rounded-full bg-[rgba(241,114,45,0.12)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c75a21] sm:text-sm">
            Vamos conversar
          </p>
          <h2 className="text-3xl font-semibold text-[#12202a] sm:text-4xl md:text-5xl">
            Tire duvidas e agende sua avaliacao
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#5a6873] sm:text-base md:text-lg">
            Nossa equipe responde rapidamente para indicar a melhor abordagem para o seu objetivo.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="min-h-[360px] overflow-hidden rounded-3xl border border-[#d6ddd8] bg-white p-2 shadow-[0_14px_34px_rgba(12,24,36,0.08)] sm:min-h-[420px] lg:min-h-[520px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58527.1334970865!2d-46.676152560448834!3d-23.53445017723577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59971fafccd9%3A0xb26de13ea6e41891!2sOne%20Pilates-%20Studio%20de%20Pilates!5e0!3m2!1spt-BR!2sbr!4v1757821649258!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full rounded-2xl border border-gray-200 bg-gray-50"
            />
          </div>

          <div className="rounded-3xl border border-[#d6ddd8] bg-white p-6 shadow-[0_14px_34px_rgba(12,24,36,0.08)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#c75a21]">
              Atendimento One Pilates
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#5a6873] sm:text-base">
              R. Abilio Soares, 233 - Paraiso, Sao Paulo - SP, 04005-001
            </p>

            <form ref={form} onSubmit={confirmAndSend} className="mt-6 flex flex-col gap-4 sm:gap-5">
              <div className="flex flex-col">
                <label htmlFor="user_name" className="mb-2 text-sm font-semibold text-[#13212b] sm:text-base">
                  Nome *
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder="Digite seu nome"
                  required
                  className="w-full rounded-xl border border-[#d6ddd8] bg-white p-3 text-sm text-gray-900 transition-all focus:border-[#F77433] focus:outline-none focus:shadow-[0_0_0_3px_rgba(247,116,51,0.16)] sm:p-4 sm:text-base"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="user_email" className="mb-2 text-sm font-semibold text-[#13212b] sm:text-base">
                  Email *
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder="Digite seu email"
                  required
                  className="w-full rounded-xl border border-[#d6ddd8] bg-white p-3 text-sm text-gray-900 transition-all focus:border-[#F77433] focus:outline-none focus:shadow-[0_0_0_3px_rgba(247,116,51,0.16)] sm:p-4 sm:text-base"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 text-sm font-semibold text-[#13212b] sm:text-base">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Digite sua mensagem"
                  required
                  className="min-h-[130px] w-full resize-y rounded-xl border border-[#d6ddd8] bg-white p-3 text-sm text-gray-900 transition-all focus:border-[#F77433] focus:outline-none focus:shadow-[0_0_0_3px_rgba(247,116,51,0.16)] sm:p-4 sm:text-base"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="button self-start bg-[#F77433] disabled:cursor-not-allowed disabled:opacity-70"
                aria-label="Enviar Mensagem"
              >
                <FaPaperPlane size={20} className="button-icon" />
                <span>{isSending ? 'Enviando...' : 'Enviar Mensagem'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
