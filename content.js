(function () {
  async function copyToTheClipboard(textToCopy) {
    const el = document.createElement('textarea');
    el.value = textToCopy;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
  let result = '';
  const nodes = document.querySelectorAll('.download-arrow');
  nodes.forEach(function (node) {
    result = result + node["href"] + '\n';
  });
  console.log(result);
  copyToTheClipboard(result);
  alert(nodes.length + ' magnet link(s) copied to clipboard!');
})();