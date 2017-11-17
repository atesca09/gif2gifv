function redirect(requestDetails) {
  if (requestDetails.url.match(/^https?:\/\/i\.imgur\.com\/\w+.gif/))
  {
    return {
      redirectUrl: requestDetails.url.match(/^(https?:\/\/i\.imgur\.com\/\w+.gif)/)[1] + "v"
    };
  }
  else if (requestDetails.url.match(/^https?:\/\/(zippy|fat|giant)\.gfycat\.com\/\w+\.gif/))
  {
    var pattern = requestDetails.url.match(/^((https?:\/\/)(zippy|fat|giant)\.(gfycat\.com\/\w+)(.gif))/);
    return {
     redirectUrl: pattern[2] + pattern[4]
    };
  }
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {
      urls:["*://i.imgur.com/*.gif", "*://*.gfycat.com/*.gif"],
      types: ["main_frame", "sub_frame", "object", "other"]
  },
  ["blocking"]
);