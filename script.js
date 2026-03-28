function goToStory(page) {
  window.location.href = page;
}

// For story pages (will be used in all 4 story files)
document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enterBtn');
  const startScreen = document.getElementById('startScreen');
  const content = document.getElementById('content');

  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      const audio = document.getElementById('creepySound') || document.getElementById('storyAudio');
      if (audio) audio.play().catch(() => {});
      
      startScreen.classList.add('hidden');
      setTimeout(() => {
        startScreen.style.display = 'none';
        if (content) content.classList.add('visible');
      }, 1200);
    });
  }
});