import { fileURLToPath } from 'url';
import path from 'path';

export default function fileDirName(meta) {
  const __filename = fileURLToPath(meta.url);
  const src_dirname = path.dirname(__filename);
  const __dirname = path.dirname(src_dirname);
  return { __dirname, __filename };
}