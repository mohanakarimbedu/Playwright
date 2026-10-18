import { test } from '@playwright/test';
import { CheckInandOutCompleted, records } from '../../src/Pages/CheckInandOut';
import { DashboardPage } from '../../src/Pages/Dashboard';
import { BasePage } from 'src/Pages/Base';
import { passengers_Details } from 'src/Pages/Passengers';      
    
console.log(records);   // remove after you confirm the keys

for (const record of records) {

    test(`SpiceJetBooking_Ticket ${record.fromCity} to ${record.toCity}`, async ({ page }) => {

        const basepage = new BasePage(page);    // ikkada rendu names kanipistundhi filename and classname manam classname tesukovali
        await basepage.goToUrl();

        const dashboard = new DashboardPage(page);
        await dashboard.Allround();

        const checkinandout = new CheckInandOutCompleted(page);
        await checkinandout.spiceJet_Booking(record.fromCity, record.toCity);
        await checkinandout.dates_Selection();

        const passenger = new passengers_Details(page);
        await passenger.Booking();

        
    });

}