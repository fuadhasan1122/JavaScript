
const drumPads = [
  { key: 'Q', sound: 'Heater 1', id: 'heater-1' },
  { key: 'W', sound: 'Heater 2', id: 'heater-2' },
  { key: 'E', sound: 'Heater 3', id: 'heater-3' },
  { key: 'A', sound: 'Heater 4', id: 'heater-4' },
  { key: 'S', sound: 'Clap', id: 'clap' },
  { key: 'D', sound: 'Open-HH', id: 'open-hh' },
  { key: 'Z', sound: 'Kick-n-Hat', id: 'kick-n-hat' },
  { key: 'X', sound: 'Kick', id: 'kick' },
  { key: 'C', sound: 'Closed-HH', id: 'closed-hh' },
];

document.addEventListener('DOMContentLoaded', () => {
  const drumPadsElements = document.querySelectorAll('.drum-pad');
  const display = document.getElementById('display');

  drumPadsElements.forEach((pad, index) => {
    const key = drumPads[index].key;
    const sound = drumPads[index].sound;

    // Handle click events
    pad.addEventListener('click', () => {
      const audio = document.getElementById(key);
      audio.currentTime = 0;
      audio.play();
      display.innerText = sound;
      pad.classList.add('active');
      setTimeout(() => pad.classList.remove('active'), 100);
    });
  });

  // Handle keypress events
  document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    const padData = drumPads.find((pad) => pad.key === key);
    if (padData) {
      const audio = document.getElementById(key);
      const pad = document.getElementById(padData.id);
      audio.currentTime = 0;
      audio.play();
      display.innerText = padData.sound;
      pad.classList.add('active');
      setTimeout(() => pad.classList.remove('active'), 100);
    }
  });
});
