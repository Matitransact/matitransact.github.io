// sw.js (keep it in the same directory)
self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://example.com") // redirect on click (optional)
  );
});
