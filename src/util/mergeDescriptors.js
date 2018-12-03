import mergeDescriptors from 'merge-descriptors'

/**
 * @param {...Object} args
 * @returns {Object}
 */
export default function multiMergeDescriptors (...args) {
  let redefine
  if (typeof args[args.length - 1] !== 'object') {
    redefine = args.pop()
  }

  return args.slice(1).reduce(
    (dest, src, i) => mergeDescriptors(dest, src, redefine),
    args[0]
  )
}
