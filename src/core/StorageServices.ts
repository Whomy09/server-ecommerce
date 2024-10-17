import { sdkAdmin } from './firebase';
import { getDownloadURL } from 'firebase-admin/storage';

export class StorageServices {
  private storage = sdkAdmin.storage();

  async uploadFile(path: string, file: Buffer) {
    try {
      const bucket = this.storage.bucket(process.env.BUCKET_NAME);
      const fileRef = bucket.file(path);

      const buffer = Buffer.from(file);
      await fileRef.save(buffer);

      const url = await getDownloadURL(fileRef);

      return url;
    } catch (error) {
      throw new Error(`Upload File: ${error}`);
    }
  }
}
