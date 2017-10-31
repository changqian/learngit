var iPhone_Width = 320;
var iPhone_Hight = 480;
UIALogger.logMessage("startMonkeyTest");
UIATarget.localTarget().delay(1);
window=UIATarget.localTarget().frontMostApp().mainWindow();

function randomPoint()
{
    var ret = new Object();
    ret.x = Math.ceil(Math.random()*iPhone_Width);
    ret.y = 480 - Math.ceil(Math.random()*iPhone_Hight);
    return ret;
}


function Touch()
{
    var pt = randomPoint();
    UIALogger.logMessage("Tap x:"+ pt.x + " y:"+ pt.y);
    UIATarget.localTarget().tap(pt);
    
}

function DoubleClick()
{
    var pt = randomPoint();
    UIALogger.logMessage("DoubleTap x:"+ pt.x + " y:" + pt.y);
    UIATarget.localTarget().double.tap(pt);
}

