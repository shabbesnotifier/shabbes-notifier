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
      var count = script.src.search(/holyclock.com/i);
      if (count > 0)
      {
        consoleLog("document contains " + count + " references to holyclock.com");
        consoleLog("document blocks.");
        return true;
      }
    }
  }
  consoleLog("document does not block.");
  return false;
}

documentBlocks(document);

