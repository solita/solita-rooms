# General

The backend is a C# application which acts between the frontend and Microsoft Exchange Server & Active Directory (AD) database. The application retrieves the rooms for a given day from AD and their bookings from Microsoft Exchange Server.

# Develop

Install Microsoft Exchange Web Services Managed API: http://www.microsoft.com/en-us/download/details.aspx?id=42022

Open the Visual Studio solution and run it.

# Compile production

1. Install Microsoft Exchange Web Services Managed API: http://www.microsoft.com/en-us/download/details.aspx?id=42022
2. Open the Visual Studio solution and choose Build -> Publish.

# Configuration

First, rename Web.config.template to Web.config.

Before using this application, the rooms in AD will need to have explicitly defined displayName value. The information about each room is parsed by using the displayName property using well defined Regex patterns. By default, the room displayName needs to satisfy the following pattern:

Location - RoomName (NumberOfPersons p) Video Client
Real world example: Oulu - Toripolliisi (8p) Video Client

You can also use different pattern by modifying the used regex values defined in Web.config. The meaning of individual values in displayName are also documented there.

Once your displayName property is configured correctly in AD, the application needs to be configured to work with your Exchange Server by modifying Web.config file (see appSettings section, more information available there).

Once you have built and deployed the application, it can be configured without rebuilding by modifying Web.config. You may need to restart the IIS server after the modifications are done.

# Tests

Look for files ending Test.cs and run the in Visual Studio.

# FAQ

If you get a COMException (unable to contact domain), it's because your current device is not connected to the organisation domain and thus the application is unable to retrieve rooms from Active Directory.

If you want to debug the application while it's running, you can enable logging on-the-fly using the Web.config file. By default, the logs are stored in: C:/temp/rooms_logs.txt

# Deploy

The application can be hosted easily with Microsoft IIS, more information available here:
http://dotnetmentors.com/web-api/host-asp-net-web-api-in-iis-using-visual-studio-publish.aspx
The application's target .NET Framework is 4.5 and it does not work on previous versions of .NET.

Note that you might not see 4.5 listed on IIS even though you have installed it, in this case select 4.0.

If the deployed application does not find the Web Services API, copy its DLL and XML files (located in C:\Program Files\Microsoft\Exchange\Web Services\2.2) to the published bin directory.

