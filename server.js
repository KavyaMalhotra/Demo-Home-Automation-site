import express from 'express';
import multer from 'multer';
import axios from 'axios';
import { Readable } from 'stream';
import dotenv from 'dotenv';

dotenv.config(); // Load .env file

const app = express();
const upload = multer();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const headers = {
  authorization: process.env.ASSEMBLY_API_KEY,
  'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
};

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/process-audio', upload.single('audio'), async (req, res) => {
  try {
    const audioStream = Readable.from(req.file.buffer);

    const uploadRes = await axios.post('https://api.assemblyai.com/v2/upload', audioStream, {
      headers,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    const audioUrl = uploadRes.data.upload_url;

    const transcriptRes = await axios.post('https://api.assemblyai.com/v2/transcript', {
      audio_url: audioUrl,
    }, { headers });

    const transcriptId = transcriptRes.data.id;
    const pollingEndpoint = `https://api.assemblyai.com/v2/transcript/${transcriptId}`;

    while (true) {
      const pollingRes = await axios.get(pollingEndpoint, { headers });
      const status = pollingRes.data.status;

      if (status === 'completed') {
        const text = pollingRes.data.text.toLowerCase();
        if (text.includes('turn on the light')) return res.json({ action: 'turnOn' });
        if (text.includes('turn off the light')) return res.json({ action: 'turnOff' });
        return res.json({ action: 'none' });
      } else if (status === 'error') {
        return res.status(500).json({ error: 'Transcription failed' });
      }

      await new Promise(resolve => setTimeout(resolve, 3000));
    }

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
