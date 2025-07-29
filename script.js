function updateProgress() {
  let progress = document.getElementById('course-progress');
  let value = parseInt(progress.value);

  if (value < 100) {
    progress.value = value + 10;
    document.getElementById('progress-value').innerText = progress.value + "%";
  } else {
    alert("You have completed the course!");
  }
}
