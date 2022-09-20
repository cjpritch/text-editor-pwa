const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event DONE
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visibility = 'visible';

  butInstall.addEventListener('click', () => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
  });
});

// TODO: Implement a click event handler on the `butInstall` element DONE
butInstall.addEventListener('click', async () => {
  butInstall.setAttribute('disabled', true);
  butInstall.textContent = 'Installed!';
});

// TODO: Add an handler for the `appinstalled` event DONE
window.addEventListener('appinstalled', (event) => {
  console.log('app installed', event);
});