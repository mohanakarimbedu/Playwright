# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test\spiceJetTestCase.spec.ts >> SpiceJetBooking_Ticket hyd to blr
- Location: tests\test\spiceJetTestCase.spec.ts:11:9

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByText('Done', { exact: true })
    - locator resolved to <div dir="auto" class="css-76zvg2 r-jwli3a r-ubezar r-1kfrs79">Done</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="0" data-focusable="true" data-testid="home-page-travellers-done-cta" class="css-1dbjc4n r-1awozwy r-19m6qjp r-z2wwpe r-1loqt21 r-18u37iz r-1777fci r-d9fdf6 r-1w50u8q r-ah5dr5 r-1otgn73">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div tabindex="0" data-focusable="true" data-testid="home-page-travellers-done-cta" class="css-1dbjc4n r-1awozwy r-19m6qjp r-z2wwpe r-1loqt21 r-18u37iz r-1777fci r-d9fdf6 r-1w50u8q r-ah5dr5 r-1otgn73">…</div> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="css-1dbjc4n r-184aecr r-18u37iz r-1777fci r-1w50u8q r-1xcajam r-13qz1uu r-184en5c">…</div> from <div class="css-1dbjc4n r-13qz1uu r-1g40b8q">…</div> subtree intercepts pointer events
  4 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="0" data-focusable="true" data-testid="home-page-travellers-done-cta" class="css-1dbjc4n r-1awozwy r-19m6qjp r-z2wwpe r-1loqt21 r-18u37iz r-1777fci r-d9fdf6 r-1w50u8q r-ah5dr5 r-1otgn73">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="0" data-focusable="true" data-testid="home-page-travellers-done-cta" class="css-1dbjc4n r-1awozwy r-19m6qjp r-z2wwpe r-1loqt21 r-18u37iz r-1777fci r-d9fdf6 r-1w50u8q r-ah5dr5 r-1otgn73">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="css-1dbjc4n r-184aecr r-18u37iz r-1777fci r-1w50u8q r-1xcajam r-13qz1uu r-184en5c">…</div> from <div class="css-1dbjc4n r-13qz1uu r-1g40b8q">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="css-1dbjc4n r-184aecr r-18u37iz r-1777fci r-1w50u8q r-1xcajam r-13qz1uu r-184en5c">…</div> from <div class="css-1dbjc4n r-13qz1uu r-1g40b8q">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div tabindex="0" data-focusable="true" data-testid="home-page-travellers-done-cta" class="css-1dbjc4n r-1awozwy r-19m6qjp r-z2wwpe r-1loqt21 r-18u37iz r-1777fci r-d9fdf6 r-1w50u8q r-ah5dr5 r-1otgn73">…</div> intercepts pointer events
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e8]:
          - link [ref=e11] [cursor=pointer]:
            - /url: /
            - img "sjlady" [ref=e13]
          - link [ref=e16] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/SpiceMax.aspx
            - img "sjlady" [ref=e18]
          - link [ref=e21] [cursor=pointer]:
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
            - generic [ref=e267] [cursor=pointer]: round trip
          - generic [ref=e276]:
            - generic [ref=e278] [cursor=pointer]:
              - generic [ref=e279]: From
              - textbox [ref=e281]: Hyderabad (HYD)
            - generic [ref=e282] [cursor=pointer]
            - generic [ref=e288] [cursor=pointer]:
              - generic [ref=e289]: To
              - textbox [ref=e291]: Bengaluru (BLR)
          - generic [ref=e294]:
            - generic [ref=e295] [cursor=pointer]:
              - generic [ref=e296]: Departure Date
              - generic [ref=e297]: Sun, 25 Oct 2026
            - generic [ref=e302] [cursor=pointer]:
              - generic [ref=e303]: Return Date
              - generic [ref=e304]: Mon, 2 Nov 2026
          - generic [ref=e309]:
            - generic [ref=e311]:
              - generic [ref=e312] [cursor=pointer]:
                - generic [ref=e313]: Passengers
                - generic [ref=e314]: 3 Adults, 2 Children
              - generic [ref=e325]:
                - generic [ref=e326]:
                  - generic [ref=e327]:
                    - generic [ref=e328]:
                      - generic [ref=e329]: Adult
                      - generic [ref=e330]: more than 12 years
                    - generic [ref=e331]:
                      - generic [ref=e332] [cursor=pointer]
                      - generic [ref=e335]: "3"
                      - generic [ref=e337] [cursor=pointer]
                  - generic [ref=e340]:
                    - generic [ref=e341]:
                      - generic [ref=e342]: Children
                      - generic [ref=e343]: 2 - 12 years
                    - generic [ref=e344]:
                      - generic [ref=e345] [cursor=pointer]
                      - generic [ref=e348]: "2"
                      - generic [active] [ref=e350] [cursor=pointer]
                  - generic [ref=e353]:
                    - generic [ref=e354]:
                      - generic [ref=e355]: Infant
                      - generic [ref=e356]: less than 2 years
                    - generic [ref=e357]:
                      - generic [ref=e361]: "0"
                      - generic [ref=e363] [cursor=pointer]
                  - generic [ref=e367]:
                    - text: For group bookings of more than 9 passengers, click
                    - link "here." [ref=e368] [cursor=pointer]:
                      - /url: https://groups.spicejet.com/
                - generic [ref=e369]: Done
            - generic [ref=e372] [cursor=pointer]:
              - generic [ref=e373]: Currency
              - generic [ref=e374]: INR
          - generic [ref=e383]:
            - generic [ref=e384]: Family & Friends
            - generic [ref=e392]: Senior Citizen
            - generic [ref=e400]: Unaccompanied Minor
            - generic [ref=e408]: Students
            - generic [ref=e416]: Armed Forces
            - generic [ref=e424]: Govt. Employee
            - link "Special Assistance" [ref=e432] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/SpecialAssistance.aspx
          - generic [ref=e444]: Search Flight
      - generic [ref=e449]:
        - generic [ref=e451] [cursor=pointer]
        - generic [ref=e457]:
          - generic [ref=e458]:
            - generic [ref=e460]:
              - text: Due to the onset of the summer schedule from 29 March, flight timings may change. Passengers are advised to check their flight status before departure.
              - link [ref=e461] [cursor=pointer]:
                - /url: ""
            - generic [ref=e463]:
              - text: Due to ongoing developments in the Middle East region, some flights may be impacted. Please check your
              - link "flight status" [ref=e464] [cursor=pointer]:
                - /url: https://www.spicejet.com/#status
              - text: for updates.
            - generic [ref=e466]:
              - text: Passengers carrying arms & ammunition must request clearance at least 72 hours before departure. Email custrelations@spicejet.com for assistance.
              - link "Read more" [ref=e467] [cursor=pointer]:
                - /url: " https://corporate.spicejet.com/Tnc.aspx"
              - text: .
            - generic [ref=e469]:
              - text: Use our
              - link "Change Assist" [ref=e470] [cursor=pointer]:
                - /url: https://changes.spicejet.com/index.html#/
              - text: portal for easy rescheduling or refunds for your affected flight.
            - generic [ref=e472]:
              - text: Only 1 piece of hand baggage of up to 7 kg is permitted on all SpiceJet flights. Power banks/portable mobile chargers are ONLY allowed in Cabin Baggage. E-cigarettes are prohibited to be carried in Cabin as well as Checked-in Baggage.
              - link [ref=e473] [cursor=pointer]:
                - /url: ""
            - generic [ref=e475]:
              - text: With DigiYatra, enjoy quick and easy entry to the airport, and pre-security check with your face as your boarding pass for the next SpiceJet flight at select cities.
              - link "Know more." [ref=e476] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Digiyatra.aspx
          - generic [ref=e478]:
            - generic [ref=e479] [cursor=pointer]
            - generic [ref=e480] [cursor=pointer]
            - generic [ref=e481] [cursor=pointer]
            - generic [ref=e482] [cursor=pointer]
            - generic [ref=e483] [cursor=pointer]
            - generic [ref=e484] [cursor=pointer]
        - generic [ref=e486] [cursor=pointer]
      - generic [ref=e489]:
        - generic [ref=e490]: I Am Here For...
        - generic [ref=e491]:
          - link "sjlady Change Assist (Choose alternate flight or refund for changed/cancelled flights)" [ref=e492] [cursor=pointer]:
            - /url: https://changes.spicejet.com/index.html#/
            - generic [ref=e493]:
              - img "sjlady" [ref=e495]
              - generic [ref=e496]:
                - generic [ref=e497]: Change Assist
                - generic [ref=e498]: (Choose alternate flight
                - generic [ref=e499]: or refund for
                - generic [ref=e500]: changed/cancelled flights)
          - link "sjlady SpiceClub" [ref=e501] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/
            - generic [ref=e502]:
              - img "sjlady" [ref=e504]
              - generic [ref=e505]: SpiceClub
          - link "sjlady SpiceJet Axis Bank Credit Card" [ref=e507] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/axisBank
            - generic [ref=e508]:
              - img "sjlady" [ref=e510]
              - generic [ref=e511]: SpiceJet Axis Bank Credit Card
          - link "sjlady Visa Services" [ref=e513] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/VisaServices.aspx
            - generic [ref=e514]:
              - img "sjlady" [ref=e516]
              - generic [ref=e517]: Visa Services
          - link "sjlady GST Invoice" [ref=e519] [cursor=pointer]:
            - /url: ""
            - generic [ref=e520]:
              - img "sjlady" [ref=e522]
              - generic [ref=e523]: GST Invoice
      - link "Spin to Win spin" [ref=e525] [cursor=pointer]:
        - /url: ""
        - generic [ref=e527]:
          - generic [ref=e528]: Spin to Win
          - link [ref=e530]:
            - /url: ""
            - img "spin" [ref=e532]
      - generic [ref=e535]:
        - generic [ref=e536]: Irresistible Deals
        - generic [ref=e538]:
          - generic [ref=e540]:
            - generic [ref=e541]: SpiceMax
            - generic [ref=e542]: The best seat in the sky at
            - generic [ref=e543]: 30% Off
            - generic [ref=e549]: SMAX30
            - generic [ref=e550]: Valid till:September 30, 2026
          - generic [ref=e552]:
            - generic [ref=e553]: Enjoy ADDONS at
            - generic [ref=e554]: Upto
            - generic [ref=e555]: 25% Off
            - generic [ref=e561]: ADDON25
            - generic [ref=e562]: Valid till:March 31, 2027
        - generic [ref=e563]: Explore More
      - generic [ref=e565]:
        - generic [ref=e566]: Recommended Add-Ons
        - generic [ref=e571]:
          - link "SpiceMax Upgrade your flying experience with more space and a host of convenient services and priority privileges." [ref=e573] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spiceMax.aspx
            - generic [ref=e574]:
              - generic [ref=e578]: SpiceMax
              - generic [ref=e579]: Upgrade your flying experience with more space and a host of convenient services and priority privileges.
          - link "SpiceCafé Pamper your taste buds with our variety of delicious hot meals and sandwiches." [ref=e581] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spiceCafe.aspx
            - generic [ref=e582]:
              - generic [ref=e586]: SpiceCafé
              - generic [ref=e587]: Pamper your taste buds with our variety of delicious hot meals and sandwiches.
          - link "Excess Baggage Avoid last-minute baggage hassles at the airport by pre-booking your excess baggage now and save up to 10%!" [ref=e589] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/ExcessBaggage.aspx
            - generic [ref=e590]:
              - generic [ref=e594]: Excess Baggage
              - generic [ref=e595]: Avoid last-minute baggage hassles at the airport by pre-booking your excess baggage now and save up to 10%!
          - link "You1st Enjoy Priority Check-in, Boarding & Baggage Delivery for just ₹595/₹699 (Domestic/International)!" [ref=e597] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/YouFirst.aspx
            - generic [ref=e598]:
              - generic [ref=e602]: You1st
              - generic [ref=e604]: Enjoy Priority Check-in, Boarding & Baggage Delivery for just ₹595/₹699 (Domestic/International)!
          - link "Extra Seat Enjoy added privacy, extra space, and up to 10kg additional baggage allowance with an extra seat or row!" [ref=e606] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/ExtraSeat.aspx
            - generic [ref=e607]:
              - generic [ref=e611]: Extra Seat
              - generic [ref=e612]: Enjoy added privacy, extra space, and up to 10kg additional baggage allowance with an extra seat or row!
          - link "SpicePlus Enjoy priority services with a meal and beverage at ₹500. Add your preferred seat for an extra cost." [ref=e614] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spicePlus.aspx
            - generic [ref=e615]:
              - generic [ref=e619]: SpicePlus
              - generic [ref=e620]: Enjoy priority services with a meal and beverage at ₹500. Add your preferred seat for an extra cost.
      - generic [ref=e623]:
        - generic [ref=e624]: Tailor-made For You
        - generic [ref=e626]:
          - link "Group Bookings Quick responses, effortless tracking, and a seamless booking journey." [ref=e628] [cursor=pointer]:
            - /url: https://groups.spicejet.com/
            - generic [ref=e629]:
              - generic [ref=e630]: Group Bookings
              - generic [ref=e631]: Quick responses, effortless tracking, and a seamless booking journey.
          - link "SME High Flyer Exclusive fares, flexible changes & premium perks for small and medium enterprises." [ref=e633] [cursor=pointer]:
            - /url: https://sme.spicejet.com/Account/Login?ReturnUrl=%2FHome%2FLandingPage
            - generic [ref=e634]:
              - generic [ref=e635]: SME High Flyer
              - generic [ref=e636]: Exclusive fares, flexible changes & premium perks for small and medium enterprises.
          - link "Corporate Traveller Customised travel solutions for business professionals." [ref=e638] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/CorporateQueries.aspx
            - generic [ref=e639]:
              - generic [ref=e640]: Corporate Traveller
              - generic [ref=e641]: Customised travel solutions for business professionals.
      - generic [ref=e643]:
        - generic [ref=e644]:
          - generic [ref=e645]: SpiceClub Loyalty Program
          - generic [ref=e647]:
            - generic [ref=e650]: Join our frequent flyer program and enjoy unmatched rewards, added comforts and exclusive privileges.
            - link "Know More" [ref=e651] [cursor=pointer]:
              - /url: https://spiceclub.spicejet.com/
        - generic [ref=e654]:
          - generic [ref=e655]:
            - generic [ref=e656]: As a member you get access to
            - generic [ref=e657]:
              - generic [ref=e660]:
                - generic [ref=e661]: Free
                - generic [ref=e662]: Flight Vouchers
              - generic [ref=e666]:
                - generic [ref=e667]: Earn
                - generic [ref=e668]: SC Points
              - generic [ref=e672]:
                - generic [ref=e673]: Complimentary
                - generic [ref=e674]: Upgrades
          - link "Join SpiceClub" [ref=e680] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/signup
      - generic [ref=e683]:
        - generic [ref=e688]:
          - generic [ref=e689]: Cargo
          - generic [ref=e691]: Small, Medium, Large & X-Large
          - generic [ref=e692]: Get your cargo shipped from one place to another at a convenient and cost-effective manner.
          - generic [ref=e693]: Book Now!
        - generic [ref=e699]:
          - generic [ref=e700]: Charter
          - generic [ref=e702]: Your private space in the sky
          - generic [ref=e703]: Now book a private charter for small groups or big.
          - generic [ref=e704]: Book Now!
    - generic [ref=e707]:
      - generic [ref=e708]:
        - generic [ref=e710]:
          - generic [ref=e711]:
            - generic [ref=e712]: About Us
            - generic [ref=e715]:
              - link "Spice Route Magazine" [ref=e717] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/SpiceRoute.aspx
              - link "Corporate Overview" [ref=e721] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/CorporateOverview.aspx
              - link "Fleet" [ref=e725] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Fleet.aspx
              - link "Careers" [ref=e729] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/careers.aspx
              - link "Media Center" [ref=e733] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/PressReleaseNews.aspx
              - link "Awards and Applaud" [ref=e737] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/AwardsandApplaud.aspx
          - generic [ref=e740]:
            - generic [ref=e741]: Contact Us
            - generic [ref=e744]:
              - link "Airports" [ref=e746] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Airports.aspx
              - link "International Offices" [ref=e750] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InternationalOffices.aspx
              - link "Corporate Head Office" [ref=e754] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/ContactUs.aspx
              - link "Advertise with Us" [ref=e758] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/MediaSale.aspx
              - link "RFP" [ref=e762] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Content/pdf/GSA-RFP.pdf
          - generic [ref=e765]:
            - generic [ref=e766]: Travel Info
            - generic [ref=e769]:
              - link "Citizen's Charter" [ref=e771] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Charter.aspx
              - link "FAQ" [ref=e775] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/GeneralAirTravelFaq.aspx
              - link "Fitness To Fly Guideline" [ref=e779] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Content/pdf/FitnessFlyGuidelines.pdf
              - link "Flight Schedules" [ref=e783] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Schedules.aspx
              - link "Terms of Carriage" [ref=e787] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Tnc.aspx
              - link "Fees and Charges" [ref=e791] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/FeesCharges.aspx
              - link "Know Your Rights" [ref=e795] [cursor=pointer]:
                - /url: https://www.civilaviation.gov.in/ministry-documents/passenger-charter-of-rights
              - link "Book Any Test From Any Lab" [ref=e799] [cursor=pointer]:
                - /url: http://flebo.in/
              - link "Book Any Test From Any Lab in Delhi" [ref=e803] [cursor=pointer]:
                - /url: https://flebo.in/health/delhi/
          - generic [ref=e806]:
            - generic [ref=e807]: Investors
            - generic [ref=e810]:
              - link "Corporate Governance" [ref=e812] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsCorporateGovernance.aspx
              - link "Financial Information" [ref=e816] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsFinancialInformation.aspx
              - link "Notices" [ref=e820] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsNotices.aspx
              - link "Corporate Announcements" [ref=e824] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorCorporateAnnouncements.aspx
              - link "Shareholding Pattern" [ref=e828] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsShareholdingPattern.aspx
              - link "Investor Services" [ref=e832] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorServices.aspx
              - link "Disclosure Regulation 46" [ref=e836] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Regulation46.aspx
        - generic [ref=e839]:
          - generic [ref=e841]:
            - generic [ref=e842]: "For Reservations or Customer Support:"
            - generic [ref=e843]:
              - generic [ref=e844]:
                - generic [ref=e845]: 📞
                - generic [ref=e846]: +91 (0)124 4983410 / +91 (0)124 7101600
              - generic [ref=e847]:
                - generic [ref=e848]: 📧
                - link "custrelations@spicejet.com" [ref=e850] [cursor=pointer]:
                  - /url: mailto:custrelations@spicejet.com
          - generic [ref=e851]:
            - generic [ref=e852]: Follow us
            - link [ref=e853] [cursor=pointer]:
              - /url: https://www.facebook.com/FlySpiceJet/
            - link [ref=e856] [cursor=pointer]:
              - /url: https://twitter.com/flyspicejet
            - link [ref=e859] [cursor=pointer]:
              - /url: "https://www.linkedin.com/company/spicejet-limited/ "
            - link [ref=e862] [cursor=pointer]:
              - /url: https://www.instagram.com/spicejetairlines/?hl=en
            - link [ref=e865] [cursor=pointer]:
              - /url: https://www.youtube.com/channel/UCldnpuM5Q-y11XGNpfh3k-A
          - generic [ref=e868]:
            - generic [ref=e869]: Download our mobile app
            - generic [ref=e871]:
              - link [ref=e872] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.vl.spicejet&hl=en
              - link [ref=e875] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/spicejet/id998319513?mt=8
      - generic [ref=e878]:
        - generic [ref=e879]: "Note:"
        - generic [ref=e880]: We log the IP addresses of the visitors on our website for security reasons.
      - generic [ref=e883]:
        - generic [ref=e884]:
          - generic [ref=e902]: © Copyright Spicejet India. All Rights Reserved
          - generic [ref=e903]: "Registered Office: SpiceJet Ltd, 319, Udyog Vihar, Phase IV, Gurgaon, Haryana - 122016"
        - generic [ref=e904]:
          - generic [ref=e905]: Home
          - generic [ref=e908]:
            - generic [ref=e909]: •
            - link "Privacy Policy" [ref=e910] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/PrivacyPolicy.aspx
          - generic [ref=e911]:
            - generic [ref=e912]: •
            - link "Disclaimer" [ref=e913] [cursor=pointer]:
              - /url: "https://corporate.spicejet.com/Disclaimer.aspx "
          - generic [ref=e914]:
            - generic [ref=e915]: •
            - link "GST Information" [ref=e916] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/GstInformation.aspx
          - generic [ref=e917]:
            - generic [ref=e918]: •
            - link "Sitemap" [ref=e919] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/Sitemap.aspx
  - generic [ref=e920]: Family and Friends discount is applicable for a minimum of 2 passengers (excluding infant) on a single booking. Terms and conditions apply.
  - generic [ref=e924]: The special discounted fares are applicable to senior citizens, above the age of 60 years. To travel under this fare, the passenger must present a valid age proof at the SpiceJet check-in counter at the airport.
  - generic [ref=e928]: Children between the ages of 5 and 12 travelling alone are considered unaccompanied minors. Charges per minor for each domestic sector are INR 4999, and charges vary for each international sector, starting at INR 9999. This can be bought until 2hrs/3hrs (domestic/international) prior to departure. After booking, please fill out the Unaccompanied Minor Form and carry four printed copies to the airport.
  - generic [ref=e932]: Applicable for all students above the age of 12 years studying with a bonafide school/university. Limited inventory available. Valid photo ID and educational institute I-card need to be presented for verification at check-in. Bookings under this offer are refundable. Conditions apply.
  - generic [ref=e936]: Applicable for all serving and retired Indian Armed Forces personnel, Paramilitary Forces personnel and their dependent families. Limited inventory available. Valid photo ID and relevant military card need to be presented for verification at check-in. Conditions apply.
  - generic [ref=e940]: The fares are extended only to government officials for their official travel (those carrying a valid identity card). A valid identity card issued by the employer is a pre-requisite for travel under this offer and passengers will be required to produce the card at the SpiceJet check-in counter at the airport.
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | 
  4  | export class passengers_Details {
  5  |     
  6  |     readonly page: Page;
  7  |     readonly passengers: Locator;
  8  |     readonly adult_plus: Locator;
  9  |     readonly childrens_plus: Locator;
  10 |     readonly done: Locator;
  11 |     readonly currency: Locator;
  12 |     readonly family_friends: Locator;
  13 |     readonly search_flights: Locator;
  14 | 
  15 |     constructor(page: Page) { 
  16 |         this.page = page;
  17 |         this.passengers = page.locator('//div[text()="Passengers"]');
  18 |         this.adult_plus = page.locator('//div[@data-testid="Adult-testID-plus-one-cta"]');
  19 |         this.childrens_plus = page.locator('//div[@data-testid="Children-testID-plus-one-cta"]');
  20 |         this.done = page.getByText('Done', { exact: true });
  21 |         this.currency = page.getByRole('list', { name: 'Currency' });
  22 |         this.family_friends = page.getByRole('checkbox', { name: 'Family & Friends' });
  23 |         this.search_flights = page.getByRole('button', { name: 'Search Flight' });
  24 | 
  25 |     }
  26 |    
  27 |     async Booking() { 
  28 |        await  this.passengers.click();
  29 |         await this.adult_plus.click();
  30 |         await this.adult_plus.click();
  31 |         await this.childrens_plus.click();
  32 |         await this.childrens_plus.click();
  33 |         await this.done.scrollIntoViewIfNeeded();
  34 |         await this.page.mouse.wheel(0, 300);
> 35 |         await this.done.click();
     |                         ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  36 |         await this.currency.click();
  37 |         await this.family_friends.click();
  38 |         await this.search_flights.click();
  39 |     }
  40 | 
  41 | }
```