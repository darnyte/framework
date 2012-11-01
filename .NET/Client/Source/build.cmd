C:\WINDOWS\Microsoft.NET\Framework\v4.0.30319\MSBuild.exe DeviceHive.Client.sln /p:Configuration=Release /clp:Verbosity=Quiet
rmdir ..\Bin /s /q
xcopy DeviceHive.Client\bin\Release ..\Bin /e /y /i