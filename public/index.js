function flipAllCards() {
  const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

  const flipCards = document.getElementsByTagName('flip-card')

  let counter = 0
  let allUnflipped = true

  for (flipCard of flipCards) {
    allUnflipped = allUnflipped && !flipCard.flipped
    if (flipCard.flipped) {
      const fc = flipCard
      delay(50 * counter++).then(() => fc.flipped = false)
    }
  }

  if (allUnflipped) {
    counter = 0
    for (flipCard of flipCards) {
      const fc = flipCard
      delay(50 * counter++).then(() => fc.flipped = true)
    }
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image()

    image.onload = () => resolve(image)
    image.onerror = error => reject(error)

    image.src = src
  })
}

async function loadHeaderImage() {
  const image = await loadImage('assets/header-background-min.jpg')
  const header = document.getElementById('main-header')

  header.setAttribute('loaded', '')
  header.addEventListener('transitionend', () => header.style.background = 'unset')
}

function lazyLoadImagesFromDataSrc() {
  const imagesToLoad = document.querySelectorAll('img[data-src]')
  const load = async img => {
    const image = await loadImage(img.getAttribute('data-src'))
    img.src = image.src
  }

  if (!window.IntersectionObserver) {
    imagesToLoad.forEach(load)
    return
  }

  const imagesByParents = new Map()
  imagesToLoad.forEach(image => {
    imagesByParents.set(
      image.parentNode,
      (imagesByParents.get(image.parentNode) || []).concat(image)
    )
  })

  const io = new window.IntersectionObserver(
    entries => entries.forEach(entry => {
      // the image's parent has shown up on screen
      if (entry.intersectionRatio >= 0.05) {
        io.unobserve(entry.target)

        imagesByParents.get(entry.target).forEach(load)
      }
    }),
    { threshold: [0.05] }
  )

  imagesByParents.forEach((images, imageParent) => io.observe(imageParent))
}

document.addEventListener('DOMContentLoaded', () => {
  loadHeaderImage()
  lazyLoadImagesFromDataSrc()
})
