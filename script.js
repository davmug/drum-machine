$(document).ready(function () {
  $(".drum-pad").on("click", function () {
    playSound(this);
  });

  $(document).on("keydown", function (event) {
    let keyPressed = event.key.toUpperCase();

    let drumPadBtn = $(".drum-pad").filter(function () {
      return $(this).text().trim() === keyPressed.trim();
    });

    if (drumPadBtn.length) {
      playSound(drumPadBtn[0]);
    }
  });

  function playSound(drumPadElement) {
    const audioClip = drumPadElement.querySelector(".clip");

    audioClip.currentTime = 0;

    audioClip
      .play()
      .then(() => {})
      .catch((error) => {
        console.error("Error while playing audio:", error);
        console.error("Audio URL with problem:", audioClip.src);
        $("#display").text("Audio error!");
        return;
      });

    const idAudio = drumPadElement.id;
    $("#display").text(idAudio);

    const drumPadBackgroundColor = $(drumPadElement).css("background-color");
    const drumPadColor = $(drumPadElement).css("color");

    $("#display").css("background-color", drumPadBackgroundColor);
    $("#display").css("color", drumPadColor);
  }
});
