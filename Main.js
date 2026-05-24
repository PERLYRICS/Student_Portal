document.addEventListener('DOMContentLoaded', () => {
  const announcementModal = document.getElementById('announcementModal');
  const closeAnnouncement = document.getElementById('closeAnnouncement');

  if (!announcementModal || !closeAnnouncement) {
    return;
  }

  announcementModal.hidden = false;

  closeAnnouncement.addEventListener('click', () => {
    announcementModal.hidden = true;
  });

  announcementModal.addEventListener('click', (event) => {
    if (event.target === announcementModal) {
      announcementModal.hidden = true;
    }
  });
});

