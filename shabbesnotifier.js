function consoleLog(message)
{
  console.log("Shabbes Notifier: " + message);
}

function shabbesOnMessage(request, sender, sendResponse)
{
  consoleLog("doing some logging");
}

function documentBlocks(document)
{
  
  for (var i=0; i < document.scripts.length; i++)
  {
    var script = document.scripts[i];
    if (script.src)
    {
      var pattern = /holyclock.com/i;
      var count = script.src.search(pattern);
      if (count > 0)
      {
        consoleLog("document contains " + count + " references to holyclock.com");
        consoleLog("document blocks");
        return true;
      }
    }
  }
  consoleLog("document does not contain blocks.");
  return false;
}

consoleLog("subscribing");
browser.runtime.onMessage.addListener(shabbesOnMessage);

/*
consoleLog("link count is " + document.links.length);
for (var i=0; i < document.links.length; i++)
{
  consoleLog("link[" + i + "] is " + document.links[i]);
}
 */

/*
consoleLog("scripts count is " + document.scripts.length);
for (var i=0; i < document.scripts.length; i++)
{
  var script = document.scripts[i];
  // formalize: script.src contains "hollyclock.com"
  if (script.src)
  {
    var pattern = /holyclock.com/i;
    var count = script.src.search(pattern);
    if (count > 0)
    {
      console.log("Shabbes Notifier: site contains " + count + " references to holyclock.com");
    }
  }
}
 */
 
documentBlocks(document);

