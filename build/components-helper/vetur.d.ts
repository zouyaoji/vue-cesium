import type { Options, NormalizeData, Tags, Props } from './type';
declare function vetur(options: Options, list: NormalizeData[]): {
    tags: Tags;
    attributes: Props;
};
export default vetur;
