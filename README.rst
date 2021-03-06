
   =================
         Astra
   =================

A cross browser extension that can be used in the process of reconnaissance, also known as information gethering, of a web application. It can be used as a bug bounty tool to find the links, query parameters, scripts, etc.


Running & Testing
=================

For Chrome
----------

Load the unpacked directory:

- Menu -> More tools -> Extensions -> Turn on Developer Mode -> Load unpacked

For Firefox
-----------

From the terminal, within the plugin directory, run::

``web-ext run``   

Or, open the browser, go to ``about:debugging``, then click "Load Temporary Addon" and choose the ``manifest.json`` file.


Packaging
=========

For Chrome/Chromium
-------------------

Try ``chromium``, ``chromium-browser``, or ``google-chrome`` depending on how you 
installed the browser. The key is optional. It will create one for you if not
provided.

``chromium --pack-extension=/path/to/extdir --pack-extension-key=/path/to/key.pem``

For Firefox
-----------

There are two options for packaging for Firefox. 

1) Upload to https://addons.mozilla.org/en-US/developers/addon/submit/distribution
   and have Mozilla package and sign and return the XPI.

2) Use ``web-ext`` to build the .zip and then request signing from Mozilla.
   Get credentials from https://addons.mozilla.org/en-US/developers/addon/api/key/

- ``npm install -g web-ext``
- ``web-ext build``
- ``web-ext sign --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET``
  

