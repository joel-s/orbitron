export const restartAnimations = () => {
  document.getAnimations().forEach((anim) => {
    anim.cancel();
    anim.play();
  });
};

// To sync all animations
// When animation(s) change because of count change
//     Sync all animations with rotate-animation-0
