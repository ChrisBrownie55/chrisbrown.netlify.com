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

export const traverseDownUntil = (condition, node, isStartNode=true) => {
  if (isStartNode && condition(node)) {
    return node
  }

  const children = [...node.children]
  if (node.shadowRoot) {
    children.push(...node.shadowRoot.children)
  }

  for (const child of children) {
    if (!condition(child)) {
      const resultNode = traverseDownUntil(condition, child, false)
      if (resultNode) {
        return resultNode
      }
    } else {
      return child
    }
  }

  return
}

export const join = (...strings) => strings.filter(s => !!s).join(' ');
