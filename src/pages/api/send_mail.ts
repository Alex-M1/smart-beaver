import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';
import { bodyToHtml } from '@/helpers/bodyToHtml';

type Data = {
  message: string
}

export const config = {
  api: {
    bodyParser: false,
  },
};

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
  if (req.method === 'POST') {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }

      const { data } = fields;
      const message = {
        from: process.env.NEXT_PUBLIC_MAIL,
        to: process.env.NEXT_PUBLIC_CLIENT,
        subject: 'Mail sender',
        html: bodyToHtml(data as string),
        attachments: [] as { filename: string; content: Buffer }[],
      };

      const fileObjects = files.files
        && ((files?.files as formidable.File).filepath ? [files.files] : Object.values(files?.files));

      if (fileObjects?.length) {
        fileObjects?.forEach((fileObject) => {
          const file = fs.readFileSync(fileObject.filepath);
          message.attachments.push({
            filename: fileObject.originalFilename,
            content: file,
          });
        });
      }

      transporter.sendMail(message, (err) => {
        if (err) return res.status(500).json({ message: 'Something went wrong' });
        res.status(200).json({ message: 'Email was sent' });
      });

      res.status(200);
    });
  } else {
    res.status(405).send({ message: 'Method Not Allowed' });
  }
}
