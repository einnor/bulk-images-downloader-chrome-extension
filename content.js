chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'get_images') {
    const formattedImages = [];
    $('img').map((i, img) => {
      if ($(img).data('src')) {
        formattedImages.push({ src: $(img).data('src') });
      } else if ($(img).src) {
        formattedImages.push({ src: $(img).src });
      }
    });

    sendResponse(formattedImages);
  }
});