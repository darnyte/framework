C:\WINDOWS\Microsoft.NET\Framework\v4.0.30319\MSBuild.exe DeviceHive.Device.sln /p:Configuration=Release /clp:Verbosity=Quiet
rmdir ..\Bin /s /q
xcopy DeviceHive.Device\bin\Release ..\Bin /e /y /i