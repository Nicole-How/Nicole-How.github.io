// Only animate on DOM load.
document.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("player"); // Get the animation

  // Create the interactivity object
  const interactivity = LottieInteractivity.create({
    mode: "chain",
    player: player,
    actions: [
      {
        state: "loop",
        transition: "click",
        frames: [0, 200], // Idle animation until click
      },
      {
        state: "autoplay",
        transition: "onComplete",
        frames: [200, 300], // Jump animation and resume idle
        reset: true,
      },
    ],
  });
});
