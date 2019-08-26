/**
 * UUID生成用ヘルパー
 */

import uuidv4 from 'uuid/v4';

export default function UUID(): string {
  return uuidv4();
}
