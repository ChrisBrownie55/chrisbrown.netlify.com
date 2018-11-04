// brightness is on a scale from 0 -> 255
export const brightnessFromRGB = (r, g, b) => (r * 299 + g * 587 + b * 114) / 1000
export const brightnessFromElementBackground = el => brightnessFromRGB(
  ...getComputedStyle(el)
    .backgroundColor
    .slice(4, -1)
    .split(',')
    .map(x => parseInt(x))
)

export const traverseUpUntil = (condition, node) => {
  if (!node.parentNode) {
    return
  }
  if (!condition(node)) {
    return traverseUpUntil(condition, node.parentNode)
  }
  return node
}

// cool concept but better replaced with `element.querySelector('selector[is="awesome"]')`

// export const traverseDownUntil = (condition, node) => {
//   for (const child of node.children) {
//     if (!condition(child)) {
//       const resultNode = traverseDownUntil(condition, child)
//       if (resultNode) {
//         return resultNode
//       }
//     }
//   }

//   return
// }