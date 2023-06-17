const gLink = document.getElementById('glink');
const btn = document.getElementById('btn');
const downloadLink = document.getElementById('download-link');

const generateLink = (e) => {
  e.preventDefault();

  const glinkValue = gLink.value;
  const confirmLink = gLink.value.includes('https://drive.google.com/file/d');

  if (confirmLink == true) {
    const getDownloadLink = gLink.value.replace(
      "https://drive.google.com/file/d", 
      "https://drive.google.com/uc?export=download&id="
    )
    .replace("/view?usp=sharing", "");

    downloadLink.value = getDownloadLink;

    function copyText(target) {
      if (target.value == "") {
          alert("Please generate a Download Link")
      } else {
          target.select();
          document.execCommand("copy");
          alert("Link has been copied to clipboard");
      }
    }
    const copy = document.querySelector(".copy");
    copy.addEventListener("click", () => {
        return copyText(downloadLink);
    })
  }
}

btn.addEventListener('click', generateLink);