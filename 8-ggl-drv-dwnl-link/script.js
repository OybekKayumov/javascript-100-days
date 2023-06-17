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
  }
}

btn.addEventListener('click', generateLink);