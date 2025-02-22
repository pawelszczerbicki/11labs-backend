import {GetSignedUrlConfig} from "@google-cloud/storage";

export const uploadOptions = (): GetSignedUrlConfig => ({
  version: 'v4',
  action: 'write',
  expires: Date.now() + 15 * 60 * 1000, // 15 minutes
  contentType: 'application/octet-stream',
});