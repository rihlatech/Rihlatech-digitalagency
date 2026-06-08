import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function ensureEmailJsConfigured() {
  if (!serviceId || !templateId || !autoReplyTemplateId || !publicKey) {
    throw new Error(
      'EmailJS is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.',
    )
  }
}

export function isEmailJsConfigured() {
  return Boolean(serviceId && templateId && autoReplyTemplateId && publicKey)
}

export async function sendBusinessEmail(formData) {
  ensureEmailJsConfigured()

  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject || 'New message from website contact form',
    message: formData.message,
    to_email: 'rihlatechcompany@gmail.com',
    reply_to: formData.email,
  }

  return emailjs.send(serviceId, templateId, templateParams, publicKey)
}

export async function sendAutoReplyEmail(formData) {
  ensureEmailJsConfigured()

  const replyMessage = `Hello ${formData.name}, thank you for contacting RihlaTech Company. We have received your message and will respond within 24 hours.`

  const templateParams = {
    name: formData.name,
    email: formData.email,
    reply_subject: 'We received your message - RihlaTech Company',
    reply_message: replyMessage,
    user_subject: formData.subject || 'No subject provided',
    user_message: formData.message,
    to_email: formData.email,
  }

  return emailjs.send(serviceId, autoReplyTemplateId, templateParams, publicKey)
}
