export function useAnimationLottie(file: unknown) {
  return {
    loop: true,
    autoplay: true,
    animationData: file,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
}
