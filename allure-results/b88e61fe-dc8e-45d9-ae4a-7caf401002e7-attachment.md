# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test\spiceJetTestCase.spec.ts >> SpiceJetBooking_Ticket hyd to blr
- Location: tests\test\spiceJetTestCase.spec.ts:9:9

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('xpath=(//div[@class="css-1dbjc4n r-1awozwy r-1pi2tsx r-1777fci r-13qz1uu"])[position() = 20]')

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
          - link [ref=e19] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/VisaServices.aspx
        - generic [ref=e20]:
          - button [ref=e21] [cursor=pointer]
          - button [ref=e22] [cursor=pointer]
          - button [ref=e23] [cursor=pointer]
      - generic [ref=e26]:
        - generic [ref=e28] [cursor=pointer]
        - generic [ref=e30]:
          - generic [ref=e32]:
            - generic [ref=e33] [cursor=pointer]: Add-ons
            - generic:
              - generic [ref=e38] [cursor=pointer]
              - generic [ref=e44] [cursor=pointer]:
                - generic [ref=e46]:
                  - link "SpiceMax" [ref=e47]:
                    - /url: https://corporate.spicejet.com/SpiceMax.aspx
                  - link "SpiceCafé" [ref=e50]:
                    - /url: https://corporate.spicejet.com/spiceCafe.aspx
                - generic [ref=e54]:
                  - link "You1st" [ref=e55]:
                    - /url: https://corporate.spicejet.com/YouFirst.aspx
                  - link "Visa Services" [ref=e58]:
                    - /url: https://corporate.spicejet.com/VisaServices.aspx
                - generic [ref=e62]:
                  - link "SpiceAssurance" [ref=e63]:
                    - /url: https://corporate.spicejet.com/SpiceAssurance.aspx
                  - link "Friends and Family" [ref=e66]:
                    - /url: https://corporate.spicejet.com/FamilyAndFriendOffer.aspx
                - generic [ref=e70]:
                  - link "Senior Citizen Discount" [ref=e71]:
                    - /url: https://corporate.spicejet.com/SeniorCitizen.aspx
                  - link "Student Discount" [ref=e74]:
                    - /url: https://corporate.spicejet.com/StudentDiscountLanding.aspx
                - generic [ref=e78]:
                  - link "Extra Seat" [ref=e79]:
                    - /url: https://corporate.spicejet.com/ExtraSeat.aspx
                  - link "SpiceLock" [ref=e82]:
                    - /url: https://corporate.spicejet.com/spicelock.aspx
                - generic [ref=e86]:
                  - link "Indian Armed Forces Personnel" [ref=e87]:
                    - /url: https://corporate.spicejet.com/IAFPersonnel.aspx
                  - link "SpiceFlex" [ref=e90]:
                    - /url: https://corporate.spicejet.com/SpiceFlexFare.aspx
                - generic [ref=e94]:
                  - link "Govt. Employee" [ref=e95]:
                    - /url: https://corporate.spicejet.com/GovtEmployee.aspx
                  - link "SpicePlus" [ref=e98]:
                    - /url: https://corporate.spicejet.com/spicePlus.aspx
                - generic [ref=e102]:
                  - link "FlyEarly" [ref=e103]:
                    - /url: https://corporate.spicejet.com/FLYEarlyProductatAirports.aspx
                  - link "Excess Baggage" [ref=e106]:
                    - /url: https://corporate.spicejet.com/ExcessBaggage.aspx
          - link "Deals" [ref=e109] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/RedHotOffers.aspx
          - link "GiftCard" [ref=e112] [cursor=pointer]:
            - /url: https://spicejet.woohoo.in/home
          - generic [ref=e116]:
            - generic [ref=e117] [cursor=pointer]: SpiceClub
            - generic:
              - generic [ref=e122] [cursor=pointer]
              - generic [ref=e128] [cursor=pointer]:
                - generic: About SpiceClub
                - generic [ref=e133]:
                  - link "Our Program" [ref=e135]:
                    - /url: https://spiceclub.spicejet.com/home#program
                  - link "Benefits" [ref=e139]:
                    - /url: https://spiceclub.spicejet.com/home#benefits
                  - link "Tiers" [ref=e143]:
                    - /url: https://spiceclub.spicejet.com/home#tiers
                - generic: SpiceClub Points
                - generic [ref=e150]:
                  - link "Earn Points" [ref=e152]:
                    - /url: https://spiceclub.spicejet.com/howToEarn
                  - link "Use Points" [ref=e156]:
                    - /url: https://spiceclub.spicejet.com/howToUse
                - generic: SpiceClub Exclusives
                - generic [ref=e163]:
                  - link "Credit Cards" [ref=e165]:
                    - /url: https://spiceclub.spicejet.com/axisBank
                  - link "Instant Vouchers" [ref=e169]:
                    - /url: https://spiceclub.spicejet.com/instantVouchers
          - link "SpiceScreen" [ref=e172] [cursor=pointer]:
            - /url: https://spicescreen.com/
          - link "Cargo" [ref=e175] [cursor=pointer]:
            - /url: https://www.spicexpress.com
          - link "Charter" [ref=e178] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/CharterLanding.aspx
          - generic [ref=e182]:
            - generic [ref=e183] [cursor=pointer]: Travel Policies
            - generic:
              - generic [ref=e188] [cursor=pointer]
              - generic [ref=e194] [cursor=pointer]:
                - link "Passenger Support" [ref=e196]:
                  - /url: https://corporate.spicejet.com/PassengerSupport.aspx
                - link "Passenger Rights" [ref=e200]:
                  - /url: https://corporate.spicejet.com/PassengerRights.aspx
                - link "Tariffs" [ref=e204]:
                  - /url: https://corporate.spicejet.com/Content/pdf/Tariffs.pdf
                - link "Baggage Information" [ref=e208]:
                  - /url: https://corporate.spicejet.com/Baggage.aspx
        - generic [ref=e211]:
          - generic [ref=e212] [cursor=pointer]: Login
          - link "Signup" [ref=e219] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/signup
      - generic [ref=e220]:
        - generic [ref=e221]:
          - generic [ref=e222] [cursor=pointer]: Flights
          - generic [ref=e227] [cursor=pointer]: check-in
          - generic [ref=e232] [cursor=pointer]: flight status
          - generic [ref=e237] [cursor=pointer]: manage booking
        - generic [ref=e242]:
          - generic [ref=e243]:
            - generic [ref=e245]:
              - generic [ref=e246]: Welcome aboard
              - generic [ref=e247]: Let's go places!
            - link "Book your Charter" [ref=e250] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/CharterLanding.aspx
          - generic [ref=e258]:
            - generic [ref=e259] [cursor=pointer]: one way
            - generic [ref=e267] [cursor=pointer]: round trip
          - generic [ref=e274]:
            - generic [ref=e276] [cursor=pointer]:
              - generic [ref=e277]: From
              - textbox [ref=e279]: Hyderabad (HYD)
            - generic [ref=e280] [cursor=pointer]
            - generic [ref=e286] [cursor=pointer]:
              - generic [ref=e287]: To
              - textbox [ref=e289]: Bengaluru (BLR)
          - generic [ref=e292]:
            - generic [active] [ref=e293] [cursor=pointer]:
              - generic [ref=e294]: Departure Date
              - generic [ref=e295]: Sun, 25 Oct 2026
            - generic [ref=e300] [cursor=pointer]:
              - generic [ref=e301]: Return Date
              - generic [ref=e302]: Select Date
          - generic [ref=e307]:
            - generic [ref=e310] [cursor=pointer]:
              - generic [ref=e311]: Passengers
              - generic [ref=e312]: 1 Adult
            - generic [ref=e318] [cursor=pointer]:
              - generic [ref=e319]: Currency
              - generic [ref=e320]: INR
          - generic [ref=e329]:
            - generic [ref=e330]: Family & Friends
            - generic [ref=e338]: Senior Citizen
            - generic [ref=e346]: Unaccompanied Minor
            - generic [ref=e354]: Students
            - generic [ref=e362]: Armed Forces
            - generic [ref=e370]: Govt. Employee
            - link "Special Assistance" [ref=e378] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/SpecialAssistance.aspx
          - generic [ref=e390]: Search Flight
      - generic [ref=e395]:
        - generic [ref=e397] [cursor=pointer]
        - generic [ref=e403]:
          - generic [ref=e404]:
            - generic [ref=e406]:
              - text: Due to the onset of the summer schedule from 29 March, flight timings may change. Passengers are advised to check their flight status before departure.
              - link [ref=e407] [cursor=pointer]:
                - /url: ""
            - generic [ref=e409]:
              - text: Due to ongoing developments in the Middle East region, some flights may be impacted. Please check your
              - link "flight status" [ref=e410] [cursor=pointer]:
                - /url: https://www.spicejet.com/#status
              - text: for updates.
            - generic [ref=e412]:
              - text: Passengers carrying arms & ammunition must request clearance at least 72 hours before departure. Email custrelations@spicejet.com for assistance.
              - link "Read more" [ref=e413] [cursor=pointer]:
                - /url: " https://corporate.spicejet.com/Tnc.aspx"
              - text: .
            - generic [ref=e415]:
              - text: Use our
              - link "Change Assist" [ref=e416] [cursor=pointer]:
                - /url: https://changes.spicejet.com/index.html#/
              - text: portal for easy rescheduling or refunds for your affected flight.
            - generic [ref=e418]:
              - text: Only 1 piece of hand baggage of up to 7 kg is permitted on all SpiceJet flights. Power banks/portable mobile chargers are ONLY allowed in Cabin Baggage. E-cigarettes are prohibited to be carried in Cabin as well as Checked-in Baggage.
              - link [ref=e419] [cursor=pointer]:
                - /url: ""
            - generic [ref=e421]:
              - text: With DigiYatra, enjoy quick and easy entry to the airport, and pre-security check with your face as your boarding pass for the next SpiceJet flight at select cities.
              - link "Know more." [ref=e422] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Digiyatra.aspx
          - generic [ref=e424]:
            - generic [ref=e425] [cursor=pointer]
            - generic [ref=e426] [cursor=pointer]
            - generic [ref=e427] [cursor=pointer]
            - generic [ref=e428] [cursor=pointer]
            - generic [ref=e429] [cursor=pointer]
            - generic [ref=e430] [cursor=pointer]
        - generic [ref=e432] [cursor=pointer]
      - generic [ref=e435]:
        - generic [ref=e436]: I Am Here For...
        - generic [ref=e437]:
          - link "sjlady Change Assist (Choose alternate flight or refund for changed/cancelled flights)" [ref=e438] [cursor=pointer]:
            - /url: https://changes.spicejet.com/index.html#/
            - generic [ref=e439]:
              - img "sjlady" [ref=e441]
              - generic [ref=e442]:
                - generic [ref=e443]: Change Assist
                - generic [ref=e444]: (Choose alternate flight
                - generic [ref=e445]: or refund for
                - generic [ref=e446]: changed/cancelled flights)
          - link "sjlady SpiceClub" [ref=e447] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/
            - generic [ref=e448]:
              - img "sjlady" [ref=e450]
              - generic [ref=e451]: SpiceClub
          - link "sjlady SpiceJet Axis Bank Credit Card" [ref=e453] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/axisBank
            - generic [ref=e454]:
              - img "sjlady" [ref=e456]
              - generic [ref=e457]: SpiceJet Axis Bank Credit Card
          - link "sjlady Visa Services" [ref=e459] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/VisaServices.aspx
            - generic [ref=e460]:
              - img "sjlady" [ref=e462]
              - generic [ref=e463]: Visa Services
          - link "sjlady GST Invoice" [ref=e465] [cursor=pointer]:
            - /url: ""
            - generic [ref=e466]:
              - img "sjlady" [ref=e468]
              - generic [ref=e469]: GST Invoice
      - link "Spin to Win" [ref=e471] [cursor=pointer]:
        - /url: ""
        - generic [ref=e473]:
          - generic [ref=e474]: Spin to Win
          - generic [ref=e475]:
            - link:
              - /url: ""
      - generic [ref=e478]:
        - generic [ref=e479]: Irresistible Deals
        - generic [ref=e481]:
          - generic [ref=e483]:
            - generic [ref=e484]: SpiceMax
            - generic [ref=e485]: The best seat in the sky at
            - generic [ref=e486]: 30% Off
            - generic [ref=e492]: SMAX30
            - generic [ref=e493]: Valid till:September 30, 2026
          - generic [ref=e495]:
            - generic [ref=e496]: Enjoy ADDONS at
            - generic [ref=e497]: Upto
            - generic [ref=e498]: 25% Off
            - generic [ref=e504]: ADDON25
            - generic [ref=e505]: Valid till:March 31, 2027
        - generic [ref=e506]: Explore More
      - generic [ref=e508]:
        - generic [ref=e509]: Recommended Add-Ons
        - generic [ref=e514]:
          - link "SpiceMax Upgrade your flying experience with more space and a host of convenient services and priority privileges." [ref=e516] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spiceMax.aspx
            - generic [ref=e517]:
              - generic [ref=e521]: SpiceMax
              - generic [ref=e522]: Upgrade your flying experience with more space and a host of convenient services and priority privileges.
          - link "SpiceCafé Pamper your taste buds with our variety of delicious hot meals and sandwiches." [ref=e524] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spiceCafe.aspx
            - generic [ref=e525]:
              - generic [ref=e529]: SpiceCafé
              - generic [ref=e530]: Pamper your taste buds with our variety of delicious hot meals and sandwiches.
          - link "Excess Baggage Avoid last-minute baggage hassles at the airport by pre-booking your excess baggage now and save up to 10%!" [ref=e532] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/ExcessBaggage.aspx
            - generic [ref=e533]:
              - generic [ref=e537]: Excess Baggage
              - generic [ref=e538]: Avoid last-minute baggage hassles at the airport by pre-booking your excess baggage now and save up to 10%!
          - link "You1st Enjoy Priority Check-in, Boarding & Baggage Delivery for just ₹595/₹699 (Domestic/International)!" [ref=e540] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/YouFirst.aspx
            - generic [ref=e541]:
              - generic [ref=e545]: You1st
              - generic [ref=e547]: Enjoy Priority Check-in, Boarding & Baggage Delivery for just ₹595/₹699 (Domestic/International)!
          - link "Extra Seat Enjoy added privacy, extra space, and up to 10kg additional baggage allowance with an extra seat or row!" [ref=e549] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/ExtraSeat.aspx
            - generic [ref=e550]:
              - generic [ref=e554]: Extra Seat
              - generic [ref=e555]: Enjoy added privacy, extra space, and up to 10kg additional baggage allowance with an extra seat or row!
          - link "SpicePlus Enjoy priority services with a meal and beverage at ₹500. Add your preferred seat for an extra cost." [ref=e557] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spicePlus.aspx
            - generic [ref=e558]:
              - generic [ref=e562]: SpicePlus
              - generic [ref=e563]: Enjoy priority services with a meal and beverage at ₹500. Add your preferred seat for an extra cost.
      - generic [ref=e566]:
        - generic [ref=e567]: Tailor-made For You
        - generic [ref=e569]:
          - link "Group Bookings Quick responses, effortless tracking, and a seamless booking journey." [ref=e571] [cursor=pointer]:
            - /url: https://groups.spicejet.com/
            - generic [ref=e572]:
              - generic [ref=e573]: Group Bookings
              - generic [ref=e574]: Quick responses, effortless tracking, and a seamless booking journey.
          - link "SME High Flyer Exclusive fares, flexible changes & premium perks for small and medium enterprises." [ref=e576] [cursor=pointer]:
            - /url: https://sme.spicejet.com/Account/Login?ReturnUrl=%2FHome%2FLandingPage
            - generic [ref=e577]:
              - generic [ref=e578]: SME High Flyer
              - generic [ref=e579]: Exclusive fares, flexible changes & premium perks for small and medium enterprises.
          - link "Corporate Traveller Customised travel solutions for business professionals." [ref=e581] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/CorporateQueries.aspx
            - generic [ref=e582]:
              - generic [ref=e583]: Corporate Traveller
              - generic [ref=e584]: Customised travel solutions for business professionals.
      - generic [ref=e586]:
        - generic [ref=e587]:
          - generic [ref=e588]: SpiceClub Loyalty Program
          - generic [ref=e590]:
            - generic [ref=e593]: Join our frequent flyer program and enjoy unmatched rewards, added comforts and exclusive privileges.
            - link "Know More" [ref=e594] [cursor=pointer]:
              - /url: https://spiceclub.spicejet.com/
        - generic [ref=e597]:
          - generic [ref=e598]:
            - generic [ref=e599]: As a member you get access to
            - generic [ref=e600]:
              - generic [ref=e603]:
                - generic [ref=e604]: Free
                - generic [ref=e605]: Flight Vouchers
              - generic [ref=e609]:
                - generic [ref=e610]: Earn
                - generic [ref=e611]: SC Points
              - generic [ref=e615]:
                - generic [ref=e616]: Complimentary
                - generic [ref=e617]: Upgrades
          - link "Join SpiceClub" [ref=e623] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/signup
      - generic [ref=e626]:
        - generic [ref=e631]:
          - generic [ref=e632]: Cargo
          - generic [ref=e634]: Small, Medium, Large & X-Large
          - generic [ref=e635]: Get your cargo shipped from one place to another at a convenient and cost-effective manner.
          - generic [ref=e636]: Book Now!
        - generic [ref=e642]:
          - generic [ref=e643]: Charter
          - generic [ref=e645]: Your private space in the sky
          - generic [ref=e646]: Now book a private charter for small groups or big.
          - generic [ref=e647]: Book Now!
    - generic [ref=e650]:
      - generic [ref=e651]:
        - generic [ref=e653]:
          - generic [ref=e654]:
            - generic [ref=e655]: About Us
            - generic [ref=e658]:
              - link "Spice Route Magazine" [ref=e660] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/SpiceRoute.aspx
              - link "Corporate Overview" [ref=e664] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/CorporateOverview.aspx
              - link "Fleet" [ref=e668] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Fleet.aspx
              - link "Careers" [ref=e672] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/careers.aspx
              - link "Media Center" [ref=e676] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/PressReleaseNews.aspx
              - link "Awards and Applaud" [ref=e680] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/AwardsandApplaud.aspx
          - generic [ref=e683]:
            - generic [ref=e684]: Contact Us
            - generic [ref=e687]:
              - link "Airports" [ref=e689] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Airports.aspx
              - link "International Offices" [ref=e693] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InternationalOffices.aspx
              - link "Corporate Head Office" [ref=e697] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/ContactUs.aspx
              - link "Advertise with Us" [ref=e701] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/MediaSale.aspx
              - link "RFP" [ref=e705] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Content/pdf/GSA-RFP.pdf
          - generic [ref=e708]:
            - generic [ref=e709]: Travel Info
            - generic [ref=e712]:
              - link "Citizen's Charter" [ref=e714] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Charter.aspx
              - link "FAQ" [ref=e718] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/GeneralAirTravelFaq.aspx
              - link "Fitness To Fly Guideline" [ref=e722] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Content/pdf/FitnessFlyGuidelines.pdf
              - link "Flight Schedules" [ref=e726] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Schedules.aspx
              - link "Terms of Carriage" [ref=e730] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Tnc.aspx
              - link "Fees and Charges" [ref=e734] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/FeesCharges.aspx
              - link "Know Your Rights" [ref=e738] [cursor=pointer]:
                - /url: https://www.civilaviation.gov.in/ministry-documents/passenger-charter-of-rights
              - link "Book Any Test From Any Lab" [ref=e742] [cursor=pointer]:
                - /url: http://flebo.in/
              - link "Book Any Test From Any Lab in Delhi" [ref=e746] [cursor=pointer]:
                - /url: https://flebo.in/health/delhi/
          - generic [ref=e749]:
            - generic [ref=e750]: Investors
            - generic [ref=e753]:
              - link "Corporate Governance" [ref=e755] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsCorporateGovernance.aspx
              - link "Financial Information" [ref=e759] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsFinancialInformation.aspx
              - link "Notices" [ref=e763] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsNotices.aspx
              - link "Corporate Announcements" [ref=e767] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorCorporateAnnouncements.aspx
              - link "Shareholding Pattern" [ref=e771] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsShareholdingPattern.aspx
              - link "Investor Services" [ref=e775] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorServices.aspx
              - link "Disclosure Regulation 46" [ref=e779] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Regulation46.aspx
        - generic [ref=e782]:
          - generic [ref=e784]:
            - generic [ref=e785]: "For Reservations or Customer Support:"
            - generic [ref=e786]:
              - generic [ref=e787]:
                - generic [ref=e788]: 📞
                - generic [ref=e789]: +91 (0)124 4983410 / +91 (0)124 7101600
              - generic [ref=e790]:
                - generic [ref=e791]: 📧
                - link "custrelations@spicejet.com" [ref=e793] [cursor=pointer]:
                  - /url: mailto:custrelations@spicejet.com
          - generic [ref=e794]:
            - generic [ref=e795]: Follow us
            - link [ref=e796] [cursor=pointer]:
              - /url: https://www.facebook.com/FlySpiceJet/
            - link [ref=e799] [cursor=pointer]:
              - /url: https://twitter.com/flyspicejet
            - link [ref=e802] [cursor=pointer]:
              - /url: "https://www.linkedin.com/company/spicejet-limited/ "
            - link [ref=e805] [cursor=pointer]:
              - /url: https://www.instagram.com/spicejetairlines/?hl=en
            - link [ref=e808] [cursor=pointer]:
              - /url: https://www.youtube.com/channel/UCldnpuM5Q-y11XGNpfh3k-A
          - generic [ref=e811]:
            - generic [ref=e812]: Download our mobile app
            - generic [ref=e814]:
              - link [ref=e815] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.vl.spicejet&hl=en
              - link [ref=e818] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/spicejet/id998319513?mt=8
      - generic [ref=e821]:
        - generic [ref=e822]: "Note:"
        - generic [ref=e823]: We log the IP addresses of the visitors on our website for security reasons.
      - generic [ref=e826]:
        - generic [ref=e827]:
          - generic [ref=e845]: © Copyright Spicejet India. All Rights Reserved
          - generic [ref=e846]: "Registered Office: SpiceJet Ltd, 319, Udyog Vihar, Phase IV, Gurgaon, Haryana - 122016"
        - generic [ref=e847]:
          - generic [ref=e848]: Home
          - generic [ref=e851]:
            - generic [ref=e852]: •
            - link "Privacy Policy" [ref=e853] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/PrivacyPolicy.aspx
          - generic [ref=e854]:
            - generic [ref=e855]: •
            - link "Disclaimer" [ref=e856] [cursor=pointer]:
              - /url: "https://corporate.spicejet.com/Disclaimer.aspx "
          - generic [ref=e857]:
            - generic [ref=e858]: •
            - link "GST Information" [ref=e859] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/GstInformation.aspx
          - generic [ref=e860]:
            - generic [ref=e861]: •
            - link "Sitemap" [ref=e862] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/Sitemap.aspx
  - generic [ref=e863]: Family and Friends discount is applicable for a minimum of 2 passengers (excluding infant) on a single booking. Terms and conditions apply.
  - generic [ref=e867]: The special discounted fares are applicable to senior citizens, above the age of 60 years. To travel under this fare, the passenger must present a valid age proof at the SpiceJet check-in counter at the airport.
  - generic [ref=e871]: Children between the ages of 5 and 12 travelling alone are considered unaccompanied minors. Charges per minor for each domestic sector are INR 4999, and charges vary for each international sector, starting at INR 9999. This can be bought until 2hrs/3hrs (domestic/international) prior to departure. After booking, please fill out the Unaccompanied Minor Form and carry four printed copies to the airport.
  - generic [ref=e875]: Applicable for all students above the age of 12 years studying with a bonafide school/university. Limited inventory available. Valid photo ID and educational institute I-card need to be presented for verification at check-in. Bookings under this offer are refundable. Conditions apply.
  - generic [ref=e879]: Applicable for all serving and retired Indian Armed Forces personnel, Paramilitary Forces personnel and their dependent families. Limited inventory available. Valid photo ID and relevant military card need to be presented for verification at check-in. Conditions apply.
  - generic [ref=e883]: The fares are extended only to government officials for their official travel (those carrying a valid identity card). A valid identity card issued by the employer is a pre-requisite for travel under this offer and passengers will be required to produce the card at the SpiceJet check-in counter at the airport.
```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | import path from 'path';
  3  | import { readExcelFile } from '../../src/Utils/ExcelHelper';
  4  | 
  5  |    const filepath = path.resolve(process.cwd(), 'test_data', 'qa', 'Test_Data1.xlsx');
  6  | 
  7  | export interface BookingRecord {
  8  |     fromCity: string;
  9  |     toCity: string;
  10 | }       
  11 | export const records = readExcelFile(filepath) as unknown as BookingRecord[];
  12 | 
  13 | export class CheckInandOutCompleted {
  14 | 
  15 |     readonly page: Page;
  16 |     readonly from: Locator;
  17 |     readonly To: Locator;
  18 |     readonly departure: Locator;
  19 |     readonly from_Select_Date: Locator;
  20 |     readonly returing: Locator;
  21 |     readonly to_Select_Date: Locator;
  22 | 
  23 |     constructor(page: Page) {
  24 |         this.page = page;
  25 |         // this.from = page.locator('//*[@id="main-container"]/div/div[1]/div[3]/div[2]/div[3]/div/div[1]/div[1]/div[2]/input');
  26 |         this.from = page.locator('[data-testid="to-testID-origin"] input');
  27 |         // this.To = page.locator('[data-testid="to-testID-destination"]');
  28 |         this.To = page.locator('[data-testid="to-testID-destination"] input');
  29 |         this.departure = page.locator('(//div[@class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep"])[3]');
  30 |         this.from_Select_Date = page.locator('(//div[@class="css-1dbjc4n r-1awozwy r-1pi2tsx r-1777fci r-13qz1uu"])[position() = 20]');
  31 |         this.returing = page.locator('(//div[@class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep"])[4]');
  32 |         this.to_Select_Date = page.locator('(//div[starts-with(@class,"css-76zvg2 r-homxoj r-ubezar r-16dba41")])[position() = 32]');
  33 |     }
  34 | 
  35 |     async spiceJet_Booking(fromCity: string, toCity: string) {
  36 |         await this.from.fill(fromCity);
  37 |         // await this.page.keyboard.press('Enter');
  38 |         await this.To.fill(toCity);
  39 |         // await this.page.keyboard.press('Enter');
  40 |     }
  41 | 
  42 |     async dates_Selection() {
  43 |         await this.departure.click();
> 44 |         await this.from_Select_Date.click();
     |                                     ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  45 |         await this.returing.click();
  46 |         await this.to_Select_Date.click();
  47 |     }
  48 | }
```