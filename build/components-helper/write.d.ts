import type { Options, Tags, Props, WebTypes } from './type';
declare function write(options: Options, type: 'tags' | 'attributes' | 'webTypes', data: Tags | Props | WebTypes): void;
export default write;
