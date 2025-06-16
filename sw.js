// sw.js (keep it in the same directory)
self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://matitransact.github.io/notify.html") // redirect on click (optional)
  );
});
