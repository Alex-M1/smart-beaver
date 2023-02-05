// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  name: string
}
// const testEmailAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true only 465
  auth: {
    user: 'nyah.harris@ethereal.email',
    pass: 'SSah8BbxjdMDM8KGrW',
  },
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log('--------------------------------------');
  console.log(req.body);
  console.log('--------------------------------------');
  const message = {
    from: 'Email sender <nyah.harris@ethereal.email>',
    to: 'oleksiimal@wizardsdev.com',
    // text: `${req.body.name} ${req.body.phone}`,
    text: 'asdasdasdads',
  };
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log('err', err);
    console.log('Sent', info);
  });
  res.status(200).json({ name: 'John Doe' });
}
