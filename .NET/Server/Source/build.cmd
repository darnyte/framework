C:\WINDOWS\Microsoft.NET\Framework\v4.0.30319\MSBuild.exe DeviceHive.sln /p:Configuration=Release /clp:Verbosity=Quiet
C:\WINDOWS\Microsoft.NET\Framework\v4.0.30319\MSBuild.exe DeviceHive.API\DeviceHive.API.csproj /t:ResolveReferences;_WPPCopyWebApplication /p:Configuration=Release /p:BuildingProject=true;CleanWebProjectOutputDir=True;WebProjectOutputDir=..\..\Web /clp:Verbosity=Quiet
rmdir ..\Bin\DBMigrator /s /q
xcopy DeviceHive.DBMigrator\bin\Release ..\Bin\DBMigrator /e /y /i