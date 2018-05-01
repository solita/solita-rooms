using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Neukkariprojekti3.Logger
{
    public static class Logger
    {
        private static bool isLoggingEnabled = false;
        private static string filePath = Path.GetPathRoot(Environment.SystemDirectory) + "temp/rooms_logs.txt";

        private static void Log(String type, String message)
        {
            if (isLoggingEnabled) {
                Directory.CreateDirectory(Path.GetDirectoryName(filePath));
                File.AppendAllText(filePath, type + " [" + DateTime.Now.ToString() + "] ==> " + message + Environment.NewLine);
            }
        }

        public static void Debug(String message) {
            Log("DEBUG", message);
        }

        public static void Error(String message) {
            Log("ERROR", message);
        }

        public static void Info(String message) {
            Log("INFO", message);
        }

        public static void setLogging(bool value) {
            isLoggingEnabled = value;
        }
    }
}