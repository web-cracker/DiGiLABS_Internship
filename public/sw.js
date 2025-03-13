self.addEventListener("install", event => {
  console.log("Service Worker Installed");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service Worker Activated");
});

self.addEventListener("push", event => {
  const options = {
    body: "You have a new notification!",
    icon: "/Vector.svg",
    vibrate: [200, 100, 200],
  };
  event.waitUntil(
    self.registration.showNotification("New Message", options)
  );
});
