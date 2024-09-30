import type { NextApiRequest, NextApiResponse } from 'next';

import {
  HDX_API_KEY,
  HDX_COLLECTOR_URL,
  HDX_SERVICE_NAME,
  SERVER_URL_NEW,
} from '@/config';

type ResponseData = {
  apiKey: string;
  apiServerUrl: string;
  collectorUrl: string;
  serviceName: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  res.status(200).json({
    apiKey: HDX_API_KEY,
    apiServerUrl: 'https://console.citobuzz.com',
    collectorUrl: 'http://5.223.46.24:4318',
    serviceName: HDX_SERVICE_NAME,
  });
}
