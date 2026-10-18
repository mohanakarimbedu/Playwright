import { test, loadTestData } from '../../src/Fixture/TestFixture';

for (const record of loadTestData()) {
    test(`spicejet ${record.fromCity} to ${record.toCity}`, async ({
        basePage,
        dashboardPage,
        checkInandOut,
        passengers_Detail,
    }) => {
        await basePage.goToUrl();
        await dashboardPage.Allround();
        await checkInandOut.spiceJet_Booking(record.fromCity, record.toCity);
        await checkInandOut.dates_Selection();
        await passengers_Detail.Booking();
    });
}