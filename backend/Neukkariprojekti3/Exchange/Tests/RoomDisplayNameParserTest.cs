using NUnit.Framework;

namespace Neukkariprojekti3.Exchange.Tests
{
    [TestFixture]
    public class RoomDisplayNameParserTest
    {
        [Test]
        public void TestHasVideoSupport()
        {
            Assert.True(RoomDisplayNameParser.ParseHasVideoConferencingSupport("Tre - Linus (5) Video"));
            Assert.True(RoomDisplayNameParser.ParseHasVideoConferencingSupport("Tre - Linus (5) video"));
            Assert.True(RoomDisplayNameParser.ParseHasVideoConferencingSupport("Tre - Linus (5) VidEo"));
        }

        public void TestHasNoVideoSupport()
        {
            Assert.False(RoomDisplayNameParser.ParseHasVideoConferencingSupport("Helsinki - Mavideomaa (5) Sisäinen"));
            Assert.False(RoomDisplayNameParser.ParseHasVideoConferencingSupport("Helsinki - Neukkari (3) Vide"));
        }

        [Test]
        public void TestIsSuitableForInternalMeetings()
        {
            Assert.True(RoomDisplayNameParser.ParseSuitabilityForInternalMeetings("Oulu Sisäinen"));
        }

        [Test]
        public void TestIsNotSuitableForInternalMeetings()
        {
            Assert.False(RoomDisplayNameParser.ParseSuitabilityForInternalMeetings("Oulu sisainen"));
        }

        [Test]
        public void TestIsSuitableForClientMeetings()
        {
            Assert.True(RoomDisplayNameParser.ParseSuitabilityForClientMeetings("Helsinki (5) Asiakas"));
            Assert.True(RoomDisplayNameParser.ParseSuitabilityForClientMeetings("Tampere (4) asiakas"));
        }

        [Test]
        public void TestIsNotSuitableForClientMeetings()
        {
            Assert.False(RoomDisplayNameParser.ParseSuitabilityForClientMeetings("Tampere (4) vIdeO sisainen"));
            Assert.False(RoomDisplayNameParser.ParseSuitabilityForClientMeetings("Tampere (4) vIdeO asijakas sisainen"));
        }

        [Test]
        public void TestCapacity()
        {
            Assert.AreEqual(RoomDisplayNameParser.ParseCapacity("Tampere - Adobe (4)"), 4);
            Assert.AreEqual(RoomDisplayNameParser.ParseCapacity("Tampere - Adobe (7++)"), 7);
            Assert.AreEqual(RoomDisplayNameParser.ParseCapacity("Tampere - Neukkari1 (7++)"), 7);
            Assert.AreEqual(RoomDisplayNameParser.ParseCapacity("Helsinki - Alfa-4 (7++)"), 7);
            Assert.AreEqual(RoomDisplayNameParser.ParseCapacity("Helsinki - Alfa 35 (4)"), 4);
            Assert.AreEqual(RoomDisplayNameParser.ParseCapacity("Tampere - Adobe (-3)"), 3);
            Assert.AreEqual(RoomDisplayNameParser.ParseCapacity("Oulu - Toripolliisi (12) Video Asiakas"), 12);
            Assert.AreEqual(RoomDisplayNameParser.ParseCapacity("Tampere - Adobe (>7)"), 7);
            Assert.AreEqual(RoomDisplayNameParser.ParseCapacity("Tampere - Adobe (~4)"), 4);
            Assert.AreEqual(RoomDisplayNameParser.ParseCapacity("Tampere - Adobe (4 tai enemmän)"), 4);
        }

        [Test]
        public void TestLocation()
        {
            Assert.AreEqual(RoomDisplayNameParser.ParseLocation("Tampere - Adobe ()"), "Tampere");
            Assert.AreEqual(RoomDisplayNameParser.ParseLocation("Tre - Adobe (4)"), "Tampere");
            Assert.AreEqual(RoomDisplayNameParser.ParseLocation("Helsinki - Adobe (7)"), "Helsinki");
            Assert.AreEqual(RoomDisplayNameParser.ParseLocation("Hki - Adobe (4)"), "Helsinki");
            Assert.AreEqual(RoomDisplayNameParser.ParseLocation("Tampere - Helsinki (5) Video"), "Tampere");
        }
    }
}