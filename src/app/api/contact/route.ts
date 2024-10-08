import { handleHTMLFormContact } from '@/app/utils/handleHTMLFormContact';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  const { nome, email } = body;

  console.log(body);

  // Configurando o transporte do Nodemailer com Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Configurando o conteúdo do e-mail
  const mailOptions = {
    from: email, // O e-mail do remetente
    to: 'arsolucaodigital@gmail.com', // Para quem o e-mail será enviado
    subject: `Novo contato de ${nome}`, // Assunto do e-mail
    text: 'Mensagem do site Blocok Oficial',
    html: handleHTMLFormContact(body),
  };

  try {
    // Enviar o e-mail
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'E-mail enviado com sucesso!' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json(
      { message: 'Erro ao enviar e-mail' },
      { status: 500 },
    );
  }
}
