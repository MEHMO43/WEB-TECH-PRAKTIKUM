const mockupContainer = document.getElementById('mockupContainer')
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  switchView()
  if (btn.innerText === 'Kachelansicht') {
    btn.innerText = 'Listenansicht'
  } else if (btn.innerText === 'Listenansicht') {
    btn.innerText = 'Kachelansicht'
  }
})
function switchView () {
  while (mockupContainer.firstChild) {
    mockupContainer.removeChild(mockupContainer.firstChild)
  }

  const currentView = mockupContainer.getAttribute('data-view')

  let otherView
  if (currentView === 'liste') {
    otherView = 'kachelTemplate'
  } else {
    otherView = 'liste'
  }

  const template = document.querySelector(`#${otherView}`)

  const clone = template.content.cloneNode(true)

  mockupContainer.appendChild(clone)

  mockupContainer.setAttribute('data-view', otherView)
}
