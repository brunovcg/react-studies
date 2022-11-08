const clipboardHelper = {
  copyPlainText: function (text) {
    const el = document.createElement('textarea')
    el.value = text
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  },

  copyRichText: function (text) {
    let el = document.createElement('div')
    el.innerHTML = text
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    window.getSelection().removeAllRanges()
    let range
    if (document.selection) {
      range = document.body.createTextRange()
      range.moveToElementText(el)
      range.select().createTextRange()
      document.execCommand('copy')
    } else if (window.getSelection) {
      range = document.createRange()
      range.selectNode(el)
      window.getSelection().addRange(range)
      document.execCommand('copy')
    }
    document.body.removeChild(el)
    window.getSelection().removeAllRanges()
  },
}

export default clipboardHelper
