# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test\spiceJetTestCase.spec.ts >> SpiceJetBooking_Ticket
- Location: tests\test\spiceJetTestCase.spec.ts:6:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "undefined", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e8]:
          - link [ref=e11] [cursor=pointer]:
            - /url: /
            - img "sjlady" [ref=e13]
          - link [ref=e16] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/SpiceMax.aspx
          - link [ref=e19] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/VisaServices.aspx
        - generic [ref=e22]:
          - button [ref=e23] [cursor=pointer]
          - button [ref=e24] [cursor=pointer]
          - button [ref=e25] [cursor=pointer]
      - generic [ref=e28]:
        - generic [ref=e30] [cursor=pointer]
        - generic [ref=e32]:
          - generic [ref=e34]:
            - generic [ref=e35] [cursor=pointer]: Add-ons
            - generic:
              - generic [ref=e40] [cursor=pointer]
              - generic [ref=e46] [cursor=pointer]:
                - generic [ref=e48]:
                  - link "SpiceMax" [ref=e49]:
                    - /url: https://corporate.spicejet.com/SpiceMax.aspx
                  - link "SpiceCafé" [ref=e52]:
                    - /url: https://corporate.spicejet.com/spiceCafe.aspx
                - generic [ref=e56]:
                  - link "You1st" [ref=e57]:
                    - /url: https://corporate.spicejet.com/YouFirst.aspx
                  - link "Visa Services" [ref=e60]:
                    - /url: https://corporate.spicejet.com/VisaServices.aspx
                - generic [ref=e64]:
                  - link "SpiceAssurance" [ref=e65]:
                    - /url: https://corporate.spicejet.com/SpiceAssurance.aspx
                  - link "Friends and Family" [ref=e68]:
                    - /url: https://corporate.spicejet.com/FamilyAndFriendOffer.aspx
                - generic [ref=e72]:
                  - link "Senior Citizen Discount" [ref=e73]:
                    - /url: https://corporate.spicejet.com/SeniorCitizen.aspx
                  - link "Student Discount" [ref=e76]:
                    - /url: https://corporate.spicejet.com/StudentDiscountLanding.aspx
                - generic [ref=e80]:
                  - link "Extra Seat" [ref=e81]:
                    - /url: https://corporate.spicejet.com/ExtraSeat.aspx
                  - link "SpiceLock" [ref=e84]:
                    - /url: https://corporate.spicejet.com/spicelock.aspx
                - generic [ref=e88]:
                  - link "Indian Armed Forces Personnel" [ref=e89]:
                    - /url: https://corporate.spicejet.com/IAFPersonnel.aspx
                  - link "SpiceFlex" [ref=e92]:
                    - /url: https://corporate.spicejet.com/SpiceFlexFare.aspx
                - generic [ref=e96]:
                  - link "Govt. Employee" [ref=e97]:
                    - /url: https://corporate.spicejet.com/GovtEmployee.aspx
                  - link "SpicePlus" [ref=e100]:
                    - /url: https://corporate.spicejet.com/spicePlus.aspx
                - generic [ref=e104]:
                  - link "FlyEarly" [ref=e105]:
                    - /url: https://corporate.spicejet.com/FLYEarlyProductatAirports.aspx
                  - link "Excess Baggage" [ref=e108]:
                    - /url: https://corporate.spicejet.com/ExcessBaggage.aspx
          - link "Deals" [ref=e111] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/RedHotOffers.aspx
          - link "GiftCard" [ref=e114] [cursor=pointer]:
            - /url: https://spicejet.woohoo.in/home
          - generic [ref=e118]:
            - generic [ref=e119] [cursor=pointer]: SpiceClub
            - generic:
              - generic [ref=e124] [cursor=pointer]
              - generic [ref=e130] [cursor=pointer]:
                - generic: About SpiceClub
                - generic [ref=e135]:
                  - link "Our Program" [ref=e137]:
                    - /url: https://spiceclub.spicejet.com/home#program
                  - link "Benefits" [ref=e141]:
                    - /url: https://spiceclub.spicejet.com/home#benefits
                  - link "Tiers" [ref=e145]:
                    - /url: https://spiceclub.spicejet.com/home#tiers
                - generic: SpiceClub Points
                - generic [ref=e152]:
                  - link "Earn Points" [ref=e154]:
                    - /url: https://spiceclub.spicejet.com/howToEarn
                  - link "Use Points" [ref=e158]:
                    - /url: https://spiceclub.spicejet.com/howToUse
                - generic: SpiceClub Exclusives
                - generic [ref=e165]:
                  - link "Credit Cards" [ref=e167]:
                    - /url: https://spiceclub.spicejet.com/axisBank
                  - link "Instant Vouchers" [ref=e171]:
                    - /url: https://spiceclub.spicejet.com/instantVouchers
          - link "SpiceScreen" [ref=e174] [cursor=pointer]:
            - /url: https://spicescreen.com/
          - link "Cargo" [ref=e177] [cursor=pointer]:
            - /url: https://www.spicexpress.com
          - link "Charter" [ref=e180] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/CharterLanding.aspx
          - generic [ref=e184]:
            - generic [ref=e185] [cursor=pointer]: Travel Policies
            - generic:
              - generic [ref=e190] [cursor=pointer]
              - generic [ref=e196] [cursor=pointer]:
                - link "Passenger Support" [ref=e198]:
                  - /url: https://corporate.spicejet.com/PassengerSupport.aspx
                - link "Passenger Rights" [ref=e202]:
                  - /url: https://corporate.spicejet.com/PassengerRights.aspx
                - link "Tariffs" [ref=e206]:
                  - /url: https://corporate.spicejet.com/Content/pdf/Tariffs.pdf
                - link "Baggage Information" [ref=e210]:
                  - /url: https://corporate.spicejet.com/Baggage.aspx
        - generic [ref=e213]:
          - generic [ref=e214] [cursor=pointer]: Login
          - link "Signup" [ref=e221] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/signup
      - generic [ref=e222]:
        - generic [ref=e223]:
          - generic [ref=e224] [cursor=pointer]: Flights
          - generic [ref=e229] [cursor=pointer]: check-in
          - generic [ref=e234] [cursor=pointer]: flight status
          - generic [ref=e239] [cursor=pointer]: manage booking
        - generic [ref=e244]:
          - generic [ref=e245]:
            - generic [ref=e247]:
              - generic [ref=e248]: Welcome aboard
              - generic [ref=e249]: Let's go places!
            - link "Book your Charter" [ref=e252] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/CharterLanding.aspx
          - generic [ref=e260]:
            - generic [ref=e261] [cursor=pointer]: one way
            - generic [ref=e269] [cursor=pointer]: round trip
          - generic [ref=e276]:
            - generic [ref=e278] [cursor=pointer]:
              - generic [ref=e279]: From
              - textbox [ref=e281]: Delhi (DEL)
            - generic [ref=e282] [cursor=pointer]
            - generic [ref=e288] [cursor=pointer]:
              - generic [ref=e289]: To
              - textbox [ref=e291]: Select Destination
          - generic [ref=e294]:
            - generic [ref=e295] [cursor=pointer]:
              - generic [ref=e296]: Departure Date
              - generic [ref=e297]: Thu, 22 Oct 2026
            - generic [ref=e302] [cursor=pointer]:
              - generic [ref=e303]: Return Date
              - generic [ref=e304]: Select Date
          - generic [ref=e309]:
            - generic [ref=e312] [cursor=pointer]:
              - generic [ref=e313]: Passengers
              - generic [ref=e314]: 1 Adult
            - generic [ref=e320] [cursor=pointer]:
              - generic [ref=e321]: Currency
              - generic [ref=e322]: INR
          - generic [ref=e331]:
            - generic [ref=e332]: Family & Friends
            - generic [ref=e340]: Senior Citizen
            - generic [ref=e348]: Unaccompanied Minor
            - generic [ref=e356]: Students
            - generic [ref=e364]: Armed Forces
            - generic [ref=e372]: Govt. Employee
            - link "Special Assistance" [ref=e380] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/SpecialAssistance.aspx
          - generic [ref=e392]: Search Flight
      - generic [ref=e397]:
        - generic [ref=e399] [cursor=pointer]
        - generic [ref=e405]:
          - generic [ref=e406]:
            - generic [ref=e408]:
              - text: Due to the onset of the summer schedule from 29 March, flight timings may change. Passengers are advised to check their flight status before departure.
              - link [ref=e409] [cursor=pointer]:
                - /url: ""
            - generic [ref=e411]:
              - text: Due to ongoing developments in the Middle East region, some flights may be impacted. Please check your
              - link "flight status" [ref=e412] [cursor=pointer]:
                - /url: https://www.spicejet.com/#status
              - text: for updates.
            - generic [ref=e414]:
              - text: Passengers carrying arms & ammunition must request clearance at least 72 hours before departure. Email custrelations@spicejet.com for assistance.
              - link "Read more" [ref=e415] [cursor=pointer]:
                - /url: " https://corporate.spicejet.com/Tnc.aspx"
              - text: .
            - generic [ref=e417]:
              - text: Use our
              - link "Change Assist" [ref=e418] [cursor=pointer]:
                - /url: https://changes.spicejet.com/index.html#/
              - text: portal for easy rescheduling or refunds for your affected flight.
            - generic [ref=e420]:
              - text: Only 1 piece of hand baggage of up to 7 kg is permitted on all SpiceJet flights. Power banks/portable mobile chargers are ONLY allowed in Cabin Baggage. E-cigarettes are prohibited to be carried in Cabin as well as Checked-in Baggage.
              - link [ref=e421] [cursor=pointer]:
                - /url: ""
            - generic [ref=e423]:
              - text: With DigiYatra, enjoy quick and easy entry to the airport, and pre-security check with your face as your boarding pass for the next SpiceJet flight at select cities.
              - link "Know more." [ref=e424] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Digiyatra.aspx
          - generic [ref=e426]:
            - generic [ref=e427] [cursor=pointer]
            - generic [ref=e428] [cursor=pointer]
            - generic [ref=e429] [cursor=pointer]
            - generic [ref=e430] [cursor=pointer]
            - generic [ref=e431] [cursor=pointer]
            - generic [ref=e432] [cursor=pointer]
        - generic [ref=e434] [cursor=pointer]
      - generic [ref=e437]:
        - generic [ref=e438]: I Am Here For...
        - generic [ref=e439]:
          - link "sjlady Change Assist (Choose alternate flight or refund for changed/cancelled flights)" [ref=e440] [cursor=pointer]:
            - /url: https://changes.spicejet.com/index.html#/
            - generic [ref=e441]:
              - img "sjlady" [ref=e443]
              - generic [ref=e444]:
                - generic [ref=e445]: Change Assist
                - generic [ref=e446]: (Choose alternate flight
                - generic [ref=e447]: or refund for
                - generic [ref=e448]: changed/cancelled flights)
          - link "sjlady SpiceClub" [ref=e449] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/
            - generic [ref=e450]:
              - img "sjlady" [ref=e452]
              - generic [ref=e453]: SpiceClub
          - link "sjlady SpiceJet Axis Bank Credit Card" [ref=e455] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/axisBank
            - generic [ref=e456]:
              - img "sjlady" [ref=e458]
              - generic [ref=e459]: SpiceJet Axis Bank Credit Card
          - link "sjlady Visa Services" [ref=e461] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/VisaServices.aspx
            - generic [ref=e462]:
              - img "sjlady" [ref=e464]
              - generic [ref=e465]: Visa Services
          - link "sjlady GST Invoice" [ref=e467] [cursor=pointer]:
            - /url: ""
            - generic [ref=e468]:
              - img "sjlady" [ref=e470]
              - generic [ref=e471]: GST Invoice
      - link "Spin to Win" [ref=e473] [cursor=pointer]:
        - /url: ""
        - generic [ref=e475]:
          - generic [ref=e476]: Spin to Win
          - generic [ref=e477]:
            - link:
              - /url: ""
      - generic [ref=e480]:
        - generic [ref=e481]: Irresistible Deals
        - generic [ref=e483]:
          - generic [ref=e485]:
            - generic [ref=e486]: SpiceMax
            - generic [ref=e487]: The best seat in the sky at
            - generic [ref=e488]: 30% Off
            - generic [ref=e494]: SMAX30
            - generic [ref=e495]: Valid till:September 30, 2026
          - generic [ref=e497]:
            - generic [ref=e498]: Enjoy ADDONS at
            - generic [ref=e499]: Upto
            - generic [ref=e500]: 25% Off
            - generic [ref=e506]: ADDON25
            - generic [ref=e507]: Valid till:March 31, 2027
        - generic [ref=e508]: Explore More
      - generic [ref=e510]:
        - generic [ref=e511]: Recommended Add-Ons
        - generic [ref=e516]:
          - link "SpiceMax Upgrade your flying experience with more space and a host of convenient services and priority privileges." [ref=e518] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spiceMax.aspx
            - generic [ref=e519]:
              - generic [ref=e523]: SpiceMax
              - generic [ref=e524]: Upgrade your flying experience with more space and a host of convenient services and priority privileges.
          - link "SpiceCafé Pamper your taste buds with our variety of delicious hot meals and sandwiches." [ref=e526] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spiceCafe.aspx
            - generic [ref=e527]:
              - generic [ref=e531]: SpiceCafé
              - generic [ref=e532]: Pamper your taste buds with our variety of delicious hot meals and sandwiches.
          - link "Excess Baggage Avoid last-minute baggage hassles at the airport by pre-booking your excess baggage now and save up to 10%!" [ref=e534] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/ExcessBaggage.aspx
            - generic [ref=e535]:
              - generic [ref=e539]: Excess Baggage
              - generic [ref=e540]: Avoid last-minute baggage hassles at the airport by pre-booking your excess baggage now and save up to 10%!
          - link "You1st Enjoy Priority Check-in, Boarding & Baggage Delivery for just ₹595/₹699 (Domestic/International)!" [ref=e542] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/YouFirst.aspx
            - generic [ref=e543]:
              - generic [ref=e547]: You1st
              - generic [ref=e549]: Enjoy Priority Check-in, Boarding & Baggage Delivery for just ₹595/₹699 (Domestic/International)!
          - link "Extra Seat Enjoy added privacy, extra space, and up to 10kg additional baggage allowance with an extra seat or row!" [ref=e551] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/ExtraSeat.aspx
            - generic [ref=e552]:
              - generic [ref=e556]: Extra Seat
              - generic [ref=e557]: Enjoy added privacy, extra space, and up to 10kg additional baggage allowance with an extra seat or row!
          - link "SpicePlus Enjoy priority services with a meal and beverage at ₹500. Add your preferred seat for an extra cost." [ref=e559] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spicePlus.aspx
            - generic [ref=e560]:
              - generic [ref=e564]: SpicePlus
              - generic [ref=e565]: Enjoy priority services with a meal and beverage at ₹500. Add your preferred seat for an extra cost.
      - generic [ref=e568]:
        - generic [ref=e569]: Tailor-made For You
        - generic [ref=e571]:
          - link "Group Bookings Quick responses, effortless tracking, and a seamless booking journey." [ref=e573] [cursor=pointer]:
            - /url: https://groups.spicejet.com/
            - generic [ref=e574]:
              - generic [ref=e575]: Group Bookings
              - generic [ref=e576]: Quick responses, effortless tracking, and a seamless booking journey.
          - link "SME High Flyer Exclusive fares, flexible changes & premium perks for small and medium enterprises." [ref=e578] [cursor=pointer]:
            - /url: https://sme.spicejet.com/Account/Login?ReturnUrl=%2FHome%2FLandingPage
            - generic [ref=e579]:
              - generic [ref=e580]: SME High Flyer
              - generic [ref=e581]: Exclusive fares, flexible changes & premium perks for small and medium enterprises.
          - link "Corporate Traveller Customised travel solutions for business professionals." [ref=e583] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/CorporateQueries.aspx
            - generic [ref=e584]:
              - generic [ref=e585]: Corporate Traveller
              - generic [ref=e586]: Customised travel solutions for business professionals.
      - generic [ref=e588]:
        - generic [ref=e589]:
          - generic [ref=e590]: SpiceClub Loyalty Program
          - generic [ref=e592]:
            - generic [ref=e595]: Join our frequent flyer program and enjoy unmatched rewards, added comforts and exclusive privileges.
            - link "Know More" [ref=e596] [cursor=pointer]:
              - /url: https://spiceclub.spicejet.com/
        - generic [ref=e599]:
          - generic [ref=e600]:
            - generic [ref=e601]: As a member you get access to
            - generic [ref=e602]:
              - generic [ref=e605]:
                - generic [ref=e606]: Free
                - generic [ref=e607]: Flight Vouchers
              - generic [ref=e611]:
                - generic [ref=e612]: Earn
                - generic [ref=e613]: SC Points
              - generic [ref=e617]:
                - generic [ref=e618]: Complimentary
                - generic [ref=e619]: Upgrades
          - link "Join SpiceClub" [ref=e625] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/signup
      - generic [ref=e628]:
        - generic [ref=e633]:
          - generic [ref=e634]: Cargo
          - generic [ref=e636]: Small, Medium, Large & X-Large
          - generic [ref=e637]: Get your cargo shipped from one place to another at a convenient and cost-effective manner.
          - generic [ref=e638]: Book Now!
        - generic [ref=e644]:
          - generic [ref=e645]: Charter
          - generic [ref=e647]: Your private space in the sky
          - generic [ref=e648]: Now book a private charter for small groups or big.
          - generic [ref=e649]: Book Now!
    - generic [ref=e652]:
      - generic [ref=e653]:
        - generic [ref=e655]:
          - generic [ref=e656]:
            - generic [ref=e657]: About Us
            - generic [ref=e660]:
              - link "Spice Route Magazine" [ref=e662] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/SpiceRoute.aspx
              - link "Corporate Overview" [ref=e666] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/CorporateOverview.aspx
              - link "Fleet" [ref=e670] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Fleet.aspx
              - link "Careers" [ref=e674] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/careers.aspx
              - link "Media Center" [ref=e678] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/PressReleaseNews.aspx
              - link "Awards and Applaud" [ref=e682] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/AwardsandApplaud.aspx
          - generic [ref=e685]:
            - generic [ref=e686]: Contact Us
            - generic [ref=e689]:
              - link "Airports" [ref=e691] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Airports.aspx
              - link "International Offices" [ref=e695] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InternationalOffices.aspx
              - link "Corporate Head Office" [ref=e699] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/ContactUs.aspx
              - link "Advertise with Us" [ref=e703] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/MediaSale.aspx
              - link "RFP" [ref=e707] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Content/pdf/GSA-RFP.pdf
          - generic [ref=e710]:
            - generic [ref=e711]: Travel Info
            - generic [ref=e714]:
              - link "Citizen's Charter" [ref=e716] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Charter.aspx
              - link "FAQ" [ref=e720] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/GeneralAirTravelFaq.aspx
              - link "Fitness To Fly Guideline" [ref=e724] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Content/pdf/FitnessFlyGuidelines.pdf
              - link "Flight Schedules" [ref=e728] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Schedules.aspx
              - link "Terms of Carriage" [ref=e732] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Tnc.aspx
              - link "Fees and Charges" [ref=e736] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/FeesCharges.aspx
              - link "Know Your Rights" [ref=e740] [cursor=pointer]:
                - /url: https://www.civilaviation.gov.in/ministry-documents/passenger-charter-of-rights
              - link "Book Any Test From Any Lab" [ref=e744] [cursor=pointer]:
                - /url: http://flebo.in/
              - link "Book Any Test From Any Lab in Delhi" [ref=e748] [cursor=pointer]:
                - /url: https://flebo.in/health/delhi/
          - generic [ref=e751]:
            - generic [ref=e752]: Investors
            - generic [ref=e755]:
              - link "Corporate Governance" [ref=e757] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsCorporateGovernance.aspx
              - link "Financial Information" [ref=e761] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsFinancialInformation.aspx
              - link "Notices" [ref=e765] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsNotices.aspx
              - link "Corporate Announcements" [ref=e769] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorCorporateAnnouncements.aspx
              - link "Shareholding Pattern" [ref=e773] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsShareholdingPattern.aspx
              - link "Investor Services" [ref=e777] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorServices.aspx
              - link "Disclosure Regulation 46" [ref=e781] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Regulation46.aspx
        - generic [ref=e784]:
          - generic [ref=e786]:
            - generic [ref=e787]: "For Reservations or Customer Support:"
            - generic [ref=e788]:
              - generic [ref=e789]:
                - generic [ref=e790]: 📞
                - generic [ref=e791]: +91 (0)124 4983410 / +91 (0)124 7101600
              - generic [ref=e792]:
                - generic [ref=e793]: 📧
                - link "custrelations@spicejet.com" [ref=e795] [cursor=pointer]:
                  - /url: mailto:custrelations@spicejet.com
          - generic [ref=e796]:
            - generic [ref=e797]: Follow us
            - link [ref=e798] [cursor=pointer]:
              - /url: https://www.facebook.com/FlySpiceJet/
            - link [ref=e801] [cursor=pointer]:
              - /url: https://twitter.com/flyspicejet
            - link [ref=e804] [cursor=pointer]:
              - /url: "https://www.linkedin.com/company/spicejet-limited/ "
            - link [ref=e807] [cursor=pointer]:
              - /url: https://www.instagram.com/spicejetairlines/?hl=en
            - link [ref=e810] [cursor=pointer]:
              - /url: https://www.youtube.com/channel/UCldnpuM5Q-y11XGNpfh3k-A
          - generic [ref=e813]:
            - generic [ref=e814]: Download our mobile app
            - generic [ref=e816]:
              - link [ref=e817] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.vl.spicejet&hl=en
              - link [ref=e820] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/spicejet/id998319513?mt=8
      - generic [ref=e823]:
        - generic [ref=e824]: "Note:"
        - generic [ref=e825]: We log the IP addresses of the visitors on our website for security reasons.
      - generic [ref=e828]:
        - generic [ref=e829]:
          - generic [ref=e847]: © Copyright Spicejet India. All Rights Reserved
          - generic [ref=e848]: "Registered Office: SpiceJet Ltd, 319, Udyog Vihar, Phase IV, Gurgaon, Haryana - 122016"
        - generic [ref=e849]:
          - generic [ref=e850]: Home
          - generic [ref=e853]:
            - generic [ref=e854]: •
            - link "Privacy Policy" [ref=e855] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/PrivacyPolicy.aspx
          - generic [ref=e856]:
            - generic [ref=e857]: •
            - link "Disclaimer" [ref=e858] [cursor=pointer]:
              - /url: "https://corporate.spicejet.com/Disclaimer.aspx "
          - generic [ref=e859]:
            - generic [ref=e860]: •
            - link "GST Information" [ref=e861] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/GstInformation.aspx
          - generic [ref=e862]:
            - generic [ref=e863]: •
            - link "Sitemap" [ref=e864] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/Sitemap.aspx
  - generic [ref=e865]: Family and Friends discount is applicable for a minimum of 2 passengers (excluding infant) on a single booking. Terms and conditions apply.
  - generic [ref=e869]: The special discounted fares are applicable to senior citizens, above the age of 60 years. To travel under this fare, the passenger must present a valid age proof at the SpiceJet check-in counter at the airport.
  - generic [ref=e873]: Children between the ages of 5 and 12 travelling alone are considered unaccompanied minors. Charges per minor for each domestic sector are INR 4999, and charges vary for each international sector, starting at INR 9999. This can be bought until 2hrs/3hrs (domestic/international) prior to departure. After booking, please fill out the Unaccompanied Minor Form and carry four printed copies to the airport.
  - generic [ref=e877]: Applicable for all students above the age of 12 years studying with a bonafide school/university. Limited inventory available. Valid photo ID and educational institute I-card need to be presented for verification at check-in. Bookings under this offer are refundable. Conditions apply.
  - generic [ref=e881]: Applicable for all serving and retired Indian Armed Forces personnel, Paramilitary Forces personnel and their dependent families. Limited inventory available. Valid photo ID and relevant military card need to be presented for verification at check-in. Conditions apply.
  - generic [ref=e885]: The fares are extended only to government officials for their official travel (those carrying a valid identity card). A valid identity card issued by the employer is a pre-requisite for travel under this offer and passengers will be required to produce the card at the SpiceJet check-in counter at the airport.
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class DashboardPage { 
  4  |     
  5  |     readonly page: Page;
  6  | 
  7  |     readonly round_trip: Locator;
  8  |     readonly oneWay: Locator;
  9  | 
  10 |     constructor(page: Page) { 
  11 |         this.page = page;
  12 |         this.round_trip = page.getByRole('checkbox', { name: 'round trip' });
  13 |         this.oneWay = page.getByRole('checkbox', { name: 'one way' });
  14 |     }
  15 | 
  16 |     async goToUrl() { 
  17 | 
  18 |         await this.page.goto(`${process.env.url}`);
  19 |         if (process.env.TEST_EXECUTION_ENV == 'qa') {
  20 |             await this.page.goto(`${process.env.url}`);
  21 |             console.log(`${process.env.Test_Execution_Env}`);
  22 |         }
  23 |         else if (process.env.TEST_EXECUTION_ENV == 'dev') { 
> 24 |             await this.page.goto(`${process.env.devurl}`);
     |                             ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  25 |         }
  26 |     }
  27 | 
  28 |     async Allround() { 
  29 |        await this.round_trip.check();
  30 |         await this.oneWay.check();
  31 | 
  32 |     }
  33 | } 
```