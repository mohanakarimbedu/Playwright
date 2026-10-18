# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test\spiceJetTestCase.spec.ts >> SpiceJetBooking_Ticket
- Location: tests\test\spiceJetTestCase.spec.ts:6:5

# Error details

```
TimeoutError: locator.check: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('checkbox', { name: 'one way' })

```

# Page snapshot

```yaml
- generic [active] [ref=f6e1]:
  - generic [ref=f6e4]:
    - generic [ref=f6e5]:
      - generic [ref=f6e6]:
        - generic [ref=f6e8]:
          - link [ref=f6e11] [cursor=pointer]:
            - /url: /
            - img "sjlady" [ref=f6e13]
          - link [ref=f6e16] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/SpiceMax.aspx
          - link [ref=f6e19] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/VisaServices.aspx
        - generic [ref=f6e20]:
          - button [ref=f6e21] [cursor=pointer]
          - button [ref=f6e22] [cursor=pointer]
          - button [ref=f6e23] [cursor=pointer]
      - generic [ref=f6e26]:
        - generic [ref=f6e28] [cursor=pointer]
        - generic [ref=f6e30]:
          - generic [ref=f6e32]:
            - generic [ref=f6e33] [cursor=pointer]: Add-ons
            - generic:
              - generic [ref=f6e38] [cursor=pointer]
              - generic [ref=f6e44] [cursor=pointer]:
                - generic [ref=f6e46]:
                  - link "SpiceMax" [ref=f6e47]:
                    - /url: https://corporate.spicejet.com/SpiceMax.aspx
                  - link "SpiceCafé" [ref=f6e50]:
                    - /url: https://corporate.spicejet.com/spiceCafe.aspx
                - generic [ref=f6e54]:
                  - link "You1st" [ref=f6e55]:
                    - /url: https://corporate.spicejet.com/YouFirst.aspx
                  - link "Visa Services" [ref=f6e58]:
                    - /url: https://corporate.spicejet.com/VisaServices.aspx
                - generic [ref=f6e62]:
                  - link "SpiceAssurance" [ref=f6e63]:
                    - /url: https://corporate.spicejet.com/SpiceAssurance.aspx
                  - link "Friends and Family" [ref=f6e66]:
                    - /url: https://corporate.spicejet.com/FamilyAndFriendOffer.aspx
                - generic [ref=f6e70]:
                  - link "Senior Citizen Discount" [ref=f6e71]:
                    - /url: https://corporate.spicejet.com/SeniorCitizen.aspx
                  - link "Student Discount" [ref=f6e74]:
                    - /url: https://corporate.spicejet.com/StudentDiscountLanding.aspx
                - generic [ref=f6e78]:
                  - link "Extra Seat" [ref=f6e79]:
                    - /url: https://corporate.spicejet.com/ExtraSeat.aspx
                  - link "SpiceLock" [ref=f6e82]:
                    - /url: https://corporate.spicejet.com/spicelock.aspx
                - generic [ref=f6e86]:
                  - link "Indian Armed Forces Personnel" [ref=f6e87]:
                    - /url: https://corporate.spicejet.com/IAFPersonnel.aspx
                  - link "SpiceFlex" [ref=f6e90]:
                    - /url: https://corporate.spicejet.com/SpiceFlexFare.aspx
                - generic [ref=f6e94]:
                  - link "Govt. Employee" [ref=f6e95]:
                    - /url: https://corporate.spicejet.com/GovtEmployee.aspx
                  - link "SpicePlus" [ref=f6e98]:
                    - /url: https://corporate.spicejet.com/spicePlus.aspx
                - generic [ref=f6e102]:
                  - link "FlyEarly" [ref=f6e103]:
                    - /url: https://corporate.spicejet.com/FLYEarlyProductatAirports.aspx
                  - link "Excess Baggage" [ref=f6e106]:
                    - /url: https://corporate.spicejet.com/ExcessBaggage.aspx
          - link "Deals" [ref=f6e109] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/RedHotOffers.aspx
          - link "GiftCard" [ref=f6e112] [cursor=pointer]:
            - /url: https://spicejet.woohoo.in/home
          - generic [ref=f6e116]:
            - generic [ref=f6e117] [cursor=pointer]: SpiceClub
            - generic:
              - generic [ref=f6e122] [cursor=pointer]
              - generic [ref=f6e128] [cursor=pointer]:
                - generic: About SpiceClub
                - generic [ref=f6e133]:
                  - link "Our Program" [ref=f6e135]:
                    - /url: https://spiceclub.spicejet.com/home#program
                  - link "Benefits" [ref=f6e139]:
                    - /url: https://spiceclub.spicejet.com/home#benefits
                  - link "Tiers" [ref=f6e143]:
                    - /url: https://spiceclub.spicejet.com/home#tiers
                - generic: SpiceClub Points
                - generic [ref=f6e150]:
                  - link "Earn Points" [ref=f6e152]:
                    - /url: https://spiceclub.spicejet.com/howToEarn
                  - link "Use Points" [ref=f6e156]:
                    - /url: https://spiceclub.spicejet.com/howToUse
                - generic: SpiceClub Exclusives
                - generic [ref=f6e163]:
                  - link "Credit Cards" [ref=f6e165]:
                    - /url: https://spiceclub.spicejet.com/axisBank
                  - link "Instant Vouchers" [ref=f6e169]:
                    - /url: https://spiceclub.spicejet.com/instantVouchers
          - link "SpiceScreen" [ref=f6e172] [cursor=pointer]:
            - /url: https://spicescreen.com/
          - link "Cargo" [ref=f6e175] [cursor=pointer]:
            - /url: https://www.spicexpress.com
          - link "Charter" [ref=f6e178] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/CharterLanding.aspx
          - generic [ref=f6e182]:
            - generic [ref=f6e183] [cursor=pointer]: Travel Policies
            - generic:
              - generic [ref=f6e188] [cursor=pointer]
              - generic [ref=f6e194] [cursor=pointer]:
                - link "Passenger Support" [ref=f6e196]:
                  - /url: https://corporate.spicejet.com/PassengerSupport.aspx
                - link "Passenger Rights" [ref=f6e200]:
                  - /url: https://corporate.spicejet.com/PassengerRights.aspx
                - link "Tariffs" [ref=f6e204]:
                  - /url: https://corporate.spicejet.com/Content/pdf/Tariffs.pdf
                - link "Baggage Information" [ref=f6e208]:
                  - /url: https://corporate.spicejet.com/Baggage.aspx
        - generic [ref=f6e211]:
          - generic [ref=f6e212] [cursor=pointer]: Login
          - link "Signup" [ref=f6e219] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/signup
      - generic [ref=f6e220]:
        - generic [ref=f6e221]:
          - generic [ref=f6e222] [cursor=pointer]: Flights
          - generic [ref=f6e227] [cursor=pointer]: check-in
          - generic [ref=f6e232] [cursor=pointer]: flight status
          - generic [ref=f6e237] [cursor=pointer]: manage booking
        - generic [ref=f6e242]:
          - generic [ref=f6e243]:
            - generic [ref=f6e245]:
              - generic [ref=f6e246]: Welcome aboard
              - generic [ref=f6e247]: Let's go places!
            - link "Book your Charter" [ref=f6e250] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/CharterLanding.aspx
          - generic [ref=f6e258]:
            - generic [ref=f6e259] [cursor=pointer]: one way
            - generic [ref=f6e267] [cursor=pointer]: round trip
          - generic [ref=f6e274]:
            - generic [ref=f6e276] [cursor=pointer]:
              - generic [ref=f6e277]: From
              - textbox [ref=f6e279]: Delhi (DEL)
            - generic [ref=f6e280] [cursor=pointer]
            - generic [ref=f6e286] [cursor=pointer]:
              - generic [ref=f6e287]: To
              - textbox [ref=f6e289]: Select Destination
          - generic [ref=f6e292]:
            - generic [ref=f6e293] [cursor=pointer]:
              - generic [ref=f6e294]: Departure Date
              - generic [ref=f6e295]: Thu, 22 Oct 2026
            - generic [ref=f6e300] [cursor=pointer]:
              - generic [ref=f6e301]: Return Date
              - generic [ref=f6e302]: Select Date
          - generic [ref=f6e307]:
            - generic [ref=f6e310] [cursor=pointer]:
              - generic [ref=f6e311]: Passengers
              - generic [ref=f6e312]: 1 Adult
            - generic [ref=f6e318] [cursor=pointer]:
              - generic [ref=f6e319]: Currency
              - generic [ref=f6e320]: INR
          - generic [ref=f6e329]:
            - generic [ref=f6e330]: Family & Friends
            - generic [ref=f6e338]: Senior Citizen
            - generic [ref=f6e346]: Unaccompanied Minor
            - generic [ref=f6e354]: Students
            - generic [ref=f6e362]: Armed Forces
            - generic [ref=f6e370]: Govt. Employee
            - link "Special Assistance" [ref=f6e378] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/SpecialAssistance.aspx
          - generic [ref=f6e390]: Search Flight
      - generic [ref=f6e395]:
        - generic [ref=f6e397] [cursor=pointer]
        - generic [ref=f6e403]:
          - generic [ref=f6e404]:
            - generic [ref=f6e406]:
              - text: Due to the onset of the summer schedule from 29 March, flight timings may change. Passengers are advised to check their flight status before departure.
              - link [ref=f6e407] [cursor=pointer]:
                - /url: ""
            - generic [ref=f6e409]:
              - text: Due to ongoing developments in the Middle East region, some flights may be impacted. Please check your
              - link "flight status" [ref=f6e410] [cursor=pointer]:
                - /url: https://www.spicejet.com/#status
              - text: for updates.
            - generic [ref=f6e412]:
              - text: Passengers carrying arms & ammunition must request clearance at least 72 hours before departure. Email custrelations@spicejet.com for assistance.
              - link "Read more" [ref=f6e413] [cursor=pointer]:
                - /url: " https://corporate.spicejet.com/Tnc.aspx"
              - text: .
            - generic [ref=f6e415]:
              - text: Use our
              - link "Change Assist" [ref=f6e416] [cursor=pointer]:
                - /url: https://changes.spicejet.com/index.html#/
              - text: portal for easy rescheduling or refunds for your affected flight.
            - generic [ref=f6e418]:
              - text: Only 1 piece of hand baggage of up to 7 kg is permitted on all SpiceJet flights. Power banks/portable mobile chargers are ONLY allowed in Cabin Baggage. E-cigarettes are prohibited to be carried in Cabin as well as Checked-in Baggage.
              - link [ref=f6e419] [cursor=pointer]:
                - /url: ""
            - generic [ref=f6e421]:
              - text: With DigiYatra, enjoy quick and easy entry to the airport, and pre-security check with your face as your boarding pass for the next SpiceJet flight at select cities.
              - link "Know more." [ref=f6e422] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Digiyatra.aspx
          - generic [ref=f6e424]:
            - generic [ref=f6e425] [cursor=pointer]
            - generic [ref=f6e426] [cursor=pointer]
            - generic [ref=f6e427] [cursor=pointer]
            - generic [ref=f6e428] [cursor=pointer]
            - generic [ref=f6e429] [cursor=pointer]
            - generic [ref=f6e430] [cursor=pointer]
        - generic [ref=f6e432] [cursor=pointer]
      - generic [ref=f6e435]:
        - generic [ref=f6e436]: I Am Here For...
        - generic [ref=f6e437]:
          - link "sjlady Change Assist (Choose alternate flight or refund for changed/cancelled flights)" [ref=f6e438] [cursor=pointer]:
            - /url: https://changes.spicejet.com/index.html#/
            - generic [ref=f6e439]:
              - img "sjlady" [ref=f6e441]
              - generic [ref=f6e442]:
                - generic [ref=f6e443]: Change Assist
                - generic [ref=f6e444]: (Choose alternate flight
                - generic [ref=f6e445]: or refund for
                - generic [ref=f6e446]: changed/cancelled flights)
          - link "sjlady SpiceClub" [ref=f6e447] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/
            - generic [ref=f6e448]:
              - img "sjlady" [ref=f6e450]
              - generic [ref=f6e451]: SpiceClub
          - link "sjlady SpiceJet Axis Bank Credit Card" [ref=f6e453] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/axisBank
            - generic [ref=f6e454]:
              - img "sjlady" [ref=f6e456]
              - generic [ref=f6e457]: SpiceJet Axis Bank Credit Card
          - link "sjlady Visa Services" [ref=f6e459] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/VisaServices.aspx
            - generic [ref=f6e460]:
              - img "sjlady" [ref=f6e462]
              - generic [ref=f6e463]: Visa Services
          - link "sjlady GST Invoice" [ref=f6e465] [cursor=pointer]:
            - /url: ""
            - generic [ref=f6e466]:
              - img "sjlady" [ref=f6e468]
              - generic [ref=f6e469]: GST Invoice
      - link "Spin to Win" [ref=f6e471] [cursor=pointer]:
        - /url: ""
        - generic [ref=f6e473]:
          - generic [ref=f6e474]: Spin to Win
          - generic [ref=f6e475]:
            - link:
              - /url: ""
      - generic [ref=f6e478]:
        - generic [ref=f6e479]: Irresistible Deals
        - generic [ref=f6e481]:
          - generic [ref=f6e483]:
            - generic [ref=f6e484]: SpiceMax
            - generic [ref=f6e485]: The best seat in the sky at
            - generic [ref=f6e486]: 30% Off
            - generic [ref=f6e492]: SMAX30
            - generic [ref=f6e493]: Valid till:September 30, 2026
          - generic [ref=f6e495]:
            - generic [ref=f6e496]: Enjoy ADDONS at
            - generic [ref=f6e497]: Upto
            - generic [ref=f6e498]: 25% Off
            - generic [ref=f6e504]: ADDON25
            - generic [ref=f6e505]: Valid till:March 31, 2027
        - generic [ref=f6e506]: Explore More
      - generic [ref=f6e508]:
        - generic [ref=f6e509]: Recommended Add-Ons
        - generic [ref=f6e514]:
          - link "SpiceMax Upgrade your flying experience with more space and a host of convenient services and priority privileges." [ref=f6e516] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spiceMax.aspx
            - generic [ref=f6e517]:
              - generic [ref=f6e521]: SpiceMax
              - generic [ref=f6e522]: Upgrade your flying experience with more space and a host of convenient services and priority privileges.
          - link "SpiceCafé Pamper your taste buds with our variety of delicious hot meals and sandwiches." [ref=f6e524] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spiceCafe.aspx
            - generic [ref=f6e525]:
              - generic [ref=f6e529]: SpiceCafé
              - generic [ref=f6e530]: Pamper your taste buds with our variety of delicious hot meals and sandwiches.
          - link "Excess Baggage Avoid last-minute baggage hassles at the airport by pre-booking your excess baggage now and save up to 10%!" [ref=f6e532] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/ExcessBaggage.aspx
            - generic [ref=f6e533]:
              - generic [ref=f6e537]: Excess Baggage
              - generic [ref=f6e538]: Avoid last-minute baggage hassles at the airport by pre-booking your excess baggage now and save up to 10%!
          - link "You1st Enjoy Priority Check-in, Boarding & Baggage Delivery for just ₹595/₹699 (Domestic/International)!" [ref=f6e540] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/YouFirst.aspx
            - generic [ref=f6e541]:
              - generic [ref=f6e545]: You1st
              - generic [ref=f6e547]: Enjoy Priority Check-in, Boarding & Baggage Delivery for just ₹595/₹699 (Domestic/International)!
          - link "Extra Seat Enjoy added privacy, extra space, and up to 10kg additional baggage allowance with an extra seat or row!" [ref=f6e549] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/ExtraSeat.aspx
            - generic [ref=f6e550]:
              - generic [ref=f6e554]: Extra Seat
              - generic [ref=f6e555]: Enjoy added privacy, extra space, and up to 10kg additional baggage allowance with an extra seat or row!
          - link "SpicePlus Enjoy priority services with a meal and beverage at ₹500. Add your preferred seat for an extra cost." [ref=f6e557] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spicePlus.aspx
            - generic [ref=f6e558]:
              - generic [ref=f6e562]: SpicePlus
              - generic [ref=f6e563]: Enjoy priority services with a meal and beverage at ₹500. Add your preferred seat for an extra cost.
      - generic [ref=f6e566]:
        - generic [ref=f6e567]: Tailor-made For You
        - generic [ref=f6e569]:
          - link "Group Bookings Quick responses, effortless tracking, and a seamless booking journey." [ref=f6e571] [cursor=pointer]:
            - /url: https://groups.spicejet.com/
            - generic [ref=f6e572]:
              - generic [ref=f6e573]: Group Bookings
              - generic [ref=f6e574]: Quick responses, effortless tracking, and a seamless booking journey.
          - link "SME High Flyer Exclusive fares, flexible changes & premium perks for small and medium enterprises." [ref=f6e576] [cursor=pointer]:
            - /url: https://sme.spicejet.com/Account/Login?ReturnUrl=%2FHome%2FLandingPage
            - generic [ref=f6e577]:
              - generic [ref=f6e578]: SME High Flyer
              - generic [ref=f6e579]: Exclusive fares, flexible changes & premium perks for small and medium enterprises.
          - link "Corporate Traveller Customised travel solutions for business professionals." [ref=f6e581] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/CorporateQueries.aspx
            - generic [ref=f6e582]:
              - generic [ref=f6e583]: Corporate Traveller
              - generic [ref=f6e584]: Customised travel solutions for business professionals.
      - generic [ref=f6e586]:
        - generic [ref=f6e587]:
          - generic [ref=f6e588]: SpiceClub Loyalty Program
          - generic [ref=f6e590]:
            - generic [ref=f6e593]: Join our frequent flyer program and enjoy unmatched rewards, added comforts and exclusive privileges.
            - link "Know More" [ref=f6e594] [cursor=pointer]:
              - /url: https://spiceclub.spicejet.com/
        - generic [ref=f6e597]:
          - generic [ref=f6e598]:
            - generic [ref=f6e599]: As a member you get access to
            - generic [ref=f6e600]:
              - generic [ref=f6e603]:
                - generic [ref=f6e604]: Free
                - generic [ref=f6e605]: Flight Vouchers
              - generic [ref=f6e609]:
                - generic [ref=f6e610]: Earn
                - generic [ref=f6e611]: SC Points
              - generic [ref=f6e615]:
                - generic [ref=f6e616]: Complimentary
                - generic [ref=f6e617]: Upgrades
          - link "Join SpiceClub" [ref=f6e623] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/signup
      - generic [ref=f6e626]:
        - generic [ref=f6e631]:
          - generic [ref=f6e632]: Cargo
          - generic [ref=f6e634]: Small, Medium, Large & X-Large
          - generic [ref=f6e635]: Get your cargo shipped from one place to another at a convenient and cost-effective manner.
          - generic [ref=f6e636]: Book Now!
        - generic [ref=f6e642]:
          - generic [ref=f6e643]: Charter
          - generic [ref=f6e645]: Your private space in the sky
          - generic [ref=f6e646]: Now book a private charter for small groups or big.
          - generic [ref=f6e647]: Book Now!
    - generic [ref=f6e650]:
      - generic [ref=f6e651]:
        - generic [ref=f6e653]:
          - generic [ref=f6e654]:
            - generic [ref=f6e655]: About Us
            - generic [ref=f6e658]:
              - link "Spice Route Magazine" [ref=f6e660] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/SpiceRoute.aspx
              - link "Corporate Overview" [ref=f6e664] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/CorporateOverview.aspx
              - link "Fleet" [ref=f6e668] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Fleet.aspx
              - link "Careers" [ref=f6e672] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/careers.aspx
              - link "Media Center" [ref=f6e676] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/PressReleaseNews.aspx
              - link "Awards and Applaud" [ref=f6e680] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/AwardsandApplaud.aspx
          - generic [ref=f6e683]:
            - generic [ref=f6e684]: Contact Us
            - generic [ref=f6e687]:
              - link "Airports" [ref=f6e689] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Airports.aspx
              - link "International Offices" [ref=f6e693] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InternationalOffices.aspx
              - link "Corporate Head Office" [ref=f6e697] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/ContactUs.aspx
              - link "Advertise with Us" [ref=f6e701] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/MediaSale.aspx
              - link "RFP" [ref=f6e705] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Content/pdf/GSA-RFP.pdf
          - generic [ref=f6e708]:
            - generic [ref=f6e709]: Travel Info
            - generic [ref=f6e712]:
              - link "Citizen's Charter" [ref=f6e714] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Charter.aspx
              - link "FAQ" [ref=f6e718] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/GeneralAirTravelFaq.aspx
              - link "Fitness To Fly Guideline" [ref=f6e722] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Content/pdf/FitnessFlyGuidelines.pdf
              - link "Flight Schedules" [ref=f6e726] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Schedules.aspx
              - link "Terms of Carriage" [ref=f6e730] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Tnc.aspx
              - link "Fees and Charges" [ref=f6e734] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/FeesCharges.aspx
              - link "Know Your Rights" [ref=f6e738] [cursor=pointer]:
                - /url: https://www.civilaviation.gov.in/ministry-documents/passenger-charter-of-rights
              - link "Book Any Test From Any Lab" [ref=f6e742] [cursor=pointer]:
                - /url: http://flebo.in/
              - link "Book Any Test From Any Lab in Delhi" [ref=f6e746] [cursor=pointer]:
                - /url: https://flebo.in/health/delhi/
          - generic [ref=f6e749]:
            - generic [ref=f6e750]: Investors
            - generic [ref=f6e753]:
              - link "Corporate Governance" [ref=f6e755] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsCorporateGovernance.aspx
              - link "Financial Information" [ref=f6e759] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsFinancialInformation.aspx
              - link "Notices" [ref=f6e763] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsNotices.aspx
              - link "Corporate Announcements" [ref=f6e767] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorCorporateAnnouncements.aspx
              - link "Shareholding Pattern" [ref=f6e771] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsShareholdingPattern.aspx
              - link "Investor Services" [ref=f6e775] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorServices.aspx
              - link "Disclosure Regulation 46" [ref=f6e779] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Regulation46.aspx
        - generic [ref=f6e782]:
          - generic [ref=f6e784]:
            - generic [ref=f6e785]: "For Reservations or Customer Support:"
            - generic [ref=f6e786]:
              - generic [ref=f6e787]:
                - generic [ref=f6e788]: 📞
                - generic [ref=f6e789]: +91 (0)124 4983410 / +91 (0)124 7101600
              - generic [ref=f6e790]:
                - generic [ref=f6e791]: 📧
                - link "custrelations@spicejet.com" [ref=f6e793] [cursor=pointer]:
                  - /url: mailto:custrelations@spicejet.com
          - generic [ref=f6e794]:
            - generic [ref=f6e795]: Follow us
            - link [ref=f6e796] [cursor=pointer]:
              - /url: https://www.facebook.com/FlySpiceJet/
            - link [ref=f6e799] [cursor=pointer]:
              - /url: https://twitter.com/flyspicejet
            - link [ref=f6e802] [cursor=pointer]:
              - /url: "https://www.linkedin.com/company/spicejet-limited/ "
            - link [ref=f6e805] [cursor=pointer]:
              - /url: https://www.instagram.com/spicejetairlines/?hl=en
            - link [ref=f6e808] [cursor=pointer]:
              - /url: https://www.youtube.com/channel/UCldnpuM5Q-y11XGNpfh3k-A
          - generic [ref=f6e811]:
            - generic [ref=f6e812]: Download our mobile app
            - generic [ref=f6e814]:
              - link [ref=f6e815] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.vl.spicejet&hl=en
              - link [ref=f6e818] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/spicejet/id998319513?mt=8
      - generic [ref=f6e821]:
        - generic [ref=f6e822]: "Note:"
        - generic [ref=f6e823]: We log the IP addresses of the visitors on our website for security reasons.
      - generic [ref=f6e826]:
        - generic [ref=f6e827]:
          - generic [ref=f6e845]: © Copyright Spicejet India. All Rights Reserved
          - generic [ref=f6e846]: "Registered Office: SpiceJet Ltd, 319, Udyog Vihar, Phase IV, Gurgaon, Haryana - 122016"
        - generic [ref=f6e847]:
          - generic [ref=f6e848]: Home
          - generic [ref=f6e851]:
            - generic [ref=f6e852]: •
            - link "Privacy Policy" [ref=f6e853] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/PrivacyPolicy.aspx
          - generic [ref=f6e854]:
            - generic [ref=f6e855]: •
            - link "Disclaimer" [ref=f6e856] [cursor=pointer]:
              - /url: "https://corporate.spicejet.com/Disclaimer.aspx "
          - generic [ref=f6e857]:
            - generic [ref=f6e858]: •
            - link "GST Information" [ref=f6e859] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/GstInformation.aspx
          - generic [ref=f6e860]:
            - generic [ref=f6e861]: •
            - link "Sitemap" [ref=f6e862] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/Sitemap.aspx
  - generic [ref=f6e863]: Family and Friends discount is applicable for a minimum of 2 passengers (excluding infant) on a single booking. Terms and conditions apply.
  - generic [ref=f6e867]: The special discounted fares are applicable to senior citizens, above the age of 60 years. To travel under this fare, the passenger must present a valid age proof at the SpiceJet check-in counter at the airport.
  - generic [ref=f6e871]: Children between the ages of 5 and 12 travelling alone are considered unaccompanied minors. Charges per minor for each domestic sector are INR 4999, and charges vary for each international sector, starting at INR 9999. This can be bought until 2hrs/3hrs (domestic/international) prior to departure. After booking, please fill out the Unaccompanied Minor Form and carry four printed copies to the airport.
  - generic [ref=f6e875]: Applicable for all students above the age of 12 years studying with a bonafide school/university. Limited inventory available. Valid photo ID and educational institute I-card need to be presented for verification at check-in. Bookings under this offer are refundable. Conditions apply.
  - generic [ref=f6e879]: Applicable for all serving and retired Indian Armed Forces personnel, Paramilitary Forces personnel and their dependent families. Limited inventory available. Valid photo ID and relevant military card need to be presented for verification at check-in. Conditions apply.
  - generic [ref=f6e883]: The fares are extended only to government officials for their official travel (those carrying a valid identity card). A valid identity card issued by the employer is a pre-requisite for travel under this offer and passengers will be required to produce the card at the SpiceJet check-in counter at the airport.
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
  18 |         if (process.env.TEST_EXECUTION_ENV_QA == 'qa') {
  19 |             await this.page.goto(`${process.env.url}`);
  20 |             // await this.page.keyboard.press('Escape');
  21 |             console.log(`${process.env.Test_Execution_Env}`);
  22 |         }
  23 |         else if (process.env.TEST_EXECUTION_ENV_DEV == 'dev') {
  24 |             await this.page.goto(`${process.env.devurl}`);
  25 |             // await this.page.keyboard.press('Escape');
  26 |         }
  27 |        
  28 |     }
  29 | 
  30 |     async Allround() { 
  31 |         await this.page.keyboard.press('Escape');
> 32 |         await this.oneWay.check();
     |                           ^ TimeoutError: locator.check: Timeout 10000ms exceeded.
  33 |        await this.round_trip.check();
  34 | 
  35 |     }
  36 | } 
```