
  (function() {
    // Function to create and insert the iframe
    function createIframe(logoUrl, color) {
      console.log("Creating iframe with logoUrl:", logoUrl, "and color:", color); // Debugging statement
      var iframe = document.createElement('iframe');
      iframe.src = 'https://668ad996e539312ff5508e27--deluxe-marshmallow-25e201.netlify.app/?logourl=' + encodeURIComponent(logoUrl) + '&color=' + encodeURIComponent(color);
      iframe.style.position = 'fixed';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '0'; // Initial width
      iframe.style.height = '0'; // Initial height
      iframe.style.zIndex = '-1'; // Initial zIndex
      iframe.style.border = 'none';
      iframe.style.display = 'none'; // Initial display

      // Post message event listener
      window.addEventListener('message', function(event) {
        // Ensure the message is from a trusted origin
        if (event.origin !== 'https://668ad996e539312ff5508e27--deluxe-marshmallow-25e201.netlify.app/') return;

        // Handle messages from the iframe
        console.log('Message received from iframe:', event.data);

        // Example: Respond to messages from the iframe if needed
        if (event.data === 'iframe ready') {
          iframe.contentWindow.postMessage('hello from parent', 'https://668ad996e539312ff5508e27--deluxe-marshmallow-25e201.netlify.app/');
        }
      });

      iframe.onload = function() {
        console.log("Iframe loaded"); // Debugging statement
        iframe.style.width = '100%'; // Expand width on load
        iframe.style.height = '100%'; // Expand height on load
        iframe.style.zIndex = '1000'; // Bring to front on load
        iframe.style.display = 'block'; // Display on load

        // Example: Send initial message to iframe if needed
        iframe.contentWindow.postMessage('parent ready', 'https://668ad996e539312ff5508e27--deluxe-marshmallow-25e201.netlify.app/');
      };

      document.body.appendChild(iframe);
    }

    // Function to initialize the iframe creation
    function init() {
      console.log("Initializing iframe creation"); // Debugging statement
      var scriptTag = document.getElementById('cartesian-script');
      var logoUrl = scriptTag.getAttribute('data-logo-url') || 'https://via.placeholder.com/150';
      var color = scriptTag.getAttribute('data-color') || '#000000';
      console.log("Logo URL:", logoUrl); // Debugging statement
      console.log("Color:", color); // Debugging statement
      createIframe(logoUrl, color);
    }

    // Wait for the DOM to be fully loaded before initializing
    document.addEventListener('DOMContentLoaded', init);
  })();

