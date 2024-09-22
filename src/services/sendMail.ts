
'use server';
import nodemailer from 'nodemailer';

// Defina as variáveis de ambiente
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

// Configure o transportador do Nodemailer
const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST, // host: smtp.gmail.com
  port: 465, // Para SSL, use a porta 465
  secure: true, // SSL
  auth: {
    user: SMTP_SERVER_USERNAME, // Seu email
    pass: SMTP_SERVER_PASSWORD, // Sua senha de app
  },
});

// Função para enviar email
export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    // Verificar a conexão com o servidor SMTP
    const isVerified = await transporter.verify();
    console.log('Servidor verificado:', isVerified);
  } catch (error) {
    console.error('Erro ao verificar o servidor:', error);
    return { success: false, message: 'Erro ao verificar o servidor de email' };
  }

  try {
    // Enviar o email
    const info = await transporter.sendMail({
      from: email, // Remetente
      to: sendTo ||  SITE_MAIL_RECIEVER, // Destinatário
      subject: subject, // Assunto
      text: text, // Texto
      html: html || '', // HTML opcional
    });

    return { success: true, message: 'Email enviado com sucesso' };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, message: 'Erro ao enviar email' };
  }
}