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

documentBlocks(document);

