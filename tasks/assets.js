import { copy } from 'fs-extra';
import {
  assetsPath,
  faviconPath,
  distPath,
} from '../common/file';

copy(assetsPath(), distPath('assets'), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("copied assets");
});
