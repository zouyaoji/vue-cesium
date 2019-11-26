const createFragmentFromTemplate = (htmlString) => {
  const holder = document.createElement('div')
  holder.innerHTML = htmlString
  const fragment = document.createDocumentFragment()
  while (holder.firstChild) {
    fragment.appendChild(holder.firstChild)
  }

  return fragment
}

export default createFragmentFromTemplate
