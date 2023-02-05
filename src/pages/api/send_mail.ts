// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message: string
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false, // true only 465
  auth: {
    user: process.env.NEXT_PUBLIC_MAIL,
    pass: process.env.NEXT_PUBLIC_PASSWORD,
  },
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const message = {
    from: process.env.NEXT_PUBLIC_MAIL,
    to: process.env.NEXT_PUBLIC_CLIENT,
    subject: 'Mail sender',
    text: `Client name: ${req.body.name},\nClient phone: ${req.body.phone}`,
  };
  transporter.sendMail(message, (err) => {
    if (err) return res.status(500).json({ message: 'Something went wrong' });
    res.status(200).json({ message: 'Email was sent' });
  });
}
