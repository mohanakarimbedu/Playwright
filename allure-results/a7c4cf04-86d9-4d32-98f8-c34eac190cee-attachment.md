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
  - waiting for getByRole('button', { name: 'Search Flight' })

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
            - img "sjlady" [ref=e23]
        - generic [ref=e24]:
          - button [ref=e25] [cursor=pointer]
          - button [ref=e26] [cursor=pointer]
          - button [ref=e27] [cursor=pointer]
      - generic [ref=e30]:
        - generic [ref=e32] [cursor=pointer]
        - generic [ref=e34]:
          - generic [ref=e36]:
            - generic [ref=e37] [cursor=pointer]: Add-ons
            - generic:
              - generic [ref=e42] [cursor=pointer]
              - generic [ref=e48] [cursor=pointer]:
                - generic [ref=e50]:
                  - link "SpiceMax" [ref=e51]:
                    - /url: https://corporate.spicejet.com/SpiceMax.aspx
                  - link "SpiceCafé" [ref=e54]:
                    - /url: https://corporate.spicejet.com/spiceCafe.aspx
                - generic [ref=e58]:
                  - link "You1st" [ref=e59]:
                    - /url: https://corporate.spicejet.com/YouFirst.aspx
                  - link "Visa Services" [ref=e62]:
                    - /url: https://corporate.spicejet.com/VisaServices.aspx
                - generic [ref=e66]:
                  - link "SpiceAssurance" [ref=e67]:
                    - /url: https://corporate.spicejet.com/SpiceAssurance.aspx
                  - link "Friends and Family" [ref=e70]:
                    - /url: https://corporate.spicejet.com/FamilyAndFriendOffer.aspx
                - generic [ref=e74]:
                  - link "Senior Citizen Discount" [ref=e75]:
                    - /url: https://corporate.spicejet.com/SeniorCitizen.aspx
                  - link "Student Discount" [ref=e78]:
                    - /url: https://corporate.spicejet.com/StudentDiscountLanding.aspx
                - generic [ref=e82]:
                  - link "Extra Seat" [ref=e83]:
                    - /url: https://corporate.spicejet.com/ExtraSeat.aspx
                  - link "SpiceLock" [ref=e86]:
                    - /url: https://corporate.spicejet.com/spicelock.aspx
                - generic [ref=e90]:
                  - link "Indian Armed Forces Personnel" [ref=e91]:
                    - /url: https://corporate.spicejet.com/IAFPersonnel.aspx
                  - link "SpiceFlex" [ref=e94]:
                    - /url: https://corporate.spicejet.com/SpiceFlexFare.aspx
                - generic [ref=e98]:
                  - link "Govt. Employee" [ref=e99]:
                    - /url: https://corporate.spicejet.com/GovtEmployee.aspx
                  - link "SpicePlus" [ref=e102]:
                    - /url: https://corporate.spicejet.com/spicePlus.aspx
                - generic [ref=e106]:
                  - link "FlyEarly" [ref=e107]:
                    - /url: https://corporate.spicejet.com/FLYEarlyProductatAirports.aspx
                  - link "Excess Baggage" [ref=e110]:
                    - /url: https://corporate.spicejet.com/ExcessBaggage.aspx
          - link "Deals" [ref=e113] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/RedHotOffers.aspx
          - link "GiftCard" [ref=e116] [cursor=pointer]:
            - /url: https://spicejet.woohoo.in/home
          - generic [ref=e120]:
            - generic [ref=e121] [cursor=pointer]: SpiceClub
            - generic:
              - generic [ref=e126] [cursor=pointer]
              - generic [ref=e132] [cursor=pointer]:
                - generic: About SpiceClub
                - generic [ref=e137]:
                  - link "Our Program" [ref=e139]:
                    - /url: https://spiceclub.spicejet.com/home#program
                  - link "Benefits" [ref=e143]:
                    - /url: https://spiceclub.spicejet.com/home#benefits
                  - link "Tiers" [ref=e147]:
                    - /url: https://spiceclub.spicejet.com/home#tiers
                - generic: SpiceClub Points
                - generic [ref=e154]:
                  - link "Earn Points" [ref=e156]:
                    - /url: https://spiceclub.spicejet.com/howToEarn
                  - link "Use Points" [ref=e160]:
                    - /url: https://spiceclub.spicejet.com/howToUse
                - generic: SpiceClub Exclusives
                - generic [ref=e167]:
                  - link "Credit Cards" [ref=e169]:
                    - /url: https://spiceclub.spicejet.com/axisBank
                  - link "Instant Vouchers" [ref=e173]:
                    - /url: https://spiceclub.spicejet.com/instantVouchers
          - link "SpiceScreen" [ref=e176] [cursor=pointer]:
            - /url: https://spicescreen.com/
          - link "Cargo" [ref=e179] [cursor=pointer]:
            - /url: https://www.spicexpress.com
          - link "Charter" [ref=e182] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/CharterLanding.aspx
          - generic [ref=e186]:
            - generic [ref=e187] [cursor=pointer]: Travel Policies
            - generic:
              - generic [ref=e192] [cursor=pointer]
              - generic [ref=e198] [cursor=pointer]:
                - link "Passenger Support" [ref=e200]:
                  - /url: https://corporate.spicejet.com/PassengerSupport.aspx
                - link "Passenger Rights" [ref=e204]:
                  - /url: https://corporate.spicejet.com/PassengerRights.aspx
                - link "Tariffs" [ref=e208]:
                  - /url: https://corporate.spicejet.com/Content/pdf/Tariffs.pdf
                - link "Baggage Information" [ref=e212]:
                  - /url: https://corporate.spicejet.com/Baggage.aspx
        - generic [ref=e215]:
          - generic [ref=e216] [cursor=pointer]: Login
          - link "Signup" [ref=e223] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/signup
      - generic [ref=e224]:
        - generic [ref=e225]:
          - generic [ref=e226] [cursor=pointer]: Flights
          - generic [ref=e231] [cursor=pointer]: check-in
          - generic [ref=e236] [cursor=pointer]: flight status
          - generic [ref=e241] [cursor=pointer]: manage booking
        - generic [ref=e246]:
          - generic [ref=e247]:
            - generic [ref=e249]:
              - generic [ref=e250]: Welcome aboard
              - generic [ref=e251]: Let's go places!
            - link "Book your Charter" [ref=e254] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/CharterLanding.aspx
          - generic [ref=e262]:
            - generic [ref=e263] [cursor=pointer]: one way
            - generic [ref=e269] [cursor=pointer]: round trip
          - generic [ref=e278]:
            - generic [ref=e280] [cursor=pointer]:
              - generic [ref=e281]: From
              - textbox [ref=e283]: Hyderabad (HYD)
            - generic [ref=e284] [cursor=pointer]
            - generic [ref=e290] [cursor=pointer]:
              - generic [ref=e291]: To
              - textbox [ref=e293]: Bengaluru (BLR)
          - generic [ref=e296]:
            - generic [ref=e297] [cursor=pointer]:
              - generic [ref=e298]: Departure Date
              - generic [ref=e299]: Sun, 25 Oct 2026
            - generic [ref=e304] [cursor=pointer]:
              - generic [ref=e305]: Return Date
              - generic [ref=e306]: Mon, 2 Nov 2026
          - generic [ref=e311]:
            - generic [ref=e313]:
              - generic [ref=e314] [cursor=pointer]:
                - generic [ref=e315]: Passengers
                - generic [ref=e316]: 3 Adults
              - generic [ref=e327]:
                - generic [ref=e328]:
                  - generic [ref=e329]:
                    - generic [ref=e330]:
                      - generic [ref=e331]: Adult
                      - generic [ref=e332]: more than 12 years
                    - generic [ref=e333]:
                      - generic [ref=e334] [cursor=pointer]
                      - generic [ref=e337]: "3"
                      - generic [ref=e339] [cursor=pointer]
                  - generic [ref=e342]:
                    - generic [ref=e343]:
                      - generic [ref=e344]: Children
                      - generic [ref=e345]: 2 - 12 years
                    - generic [ref=e346]:
                      - generic [ref=e350]: "0"
                      - generic [ref=e352] [cursor=pointer]
                  - generic [ref=e355]:
                    - generic [ref=e356]:
                      - generic [ref=e357]: Infant
                      - generic [ref=e358]: less than 2 years
                    - generic [ref=e359]:
                      - generic [ref=e363]: "0"
                      - generic [ref=e365] [cursor=pointer]
                  - generic [ref=e369]:
                    - text: For group bookings of more than 9 passengers, click
                    - link "here." [ref=e370] [cursor=pointer]:
                      - /url: https://groups.spicejet.com/
                - generic [ref=e371]: Done
            - generic [ref=e374] [cursor=pointer]:
              - generic [ref=e375]: Currency
              - generic [ref=e376]: USD
          - generic [ref=e385]:
            - generic [active] [ref=e388] [cursor=pointer]: Family & Friends
            - generic [ref=e396]: Senior Citizen
            - generic [ref=e404]: Unaccompanied Minor
            - generic [ref=e412]: Students
            - generic [ref=e420]: Armed Forces
            - generic [ref=e428]: Govt. Employee
            - link "Special Assistance" [ref=e436] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/SpecialAssistance.aspx
          - generic [ref=e448]: Search Flight
      - generic [ref=e453]:
        - generic [ref=e455] [cursor=pointer]
        - generic [ref=e461]:
          - generic [ref=e462]:
            - generic [ref=e464]:
              - text: Due to the onset of the summer schedule from 29 March, flight timings may change. Passengers are advised to check their flight status before departure.
              - link [ref=e465] [cursor=pointer]:
                - /url: ""
            - generic [ref=e467]:
              - text: Due to ongoing developments in the Middle East region, some flights may be impacted. Please check your
              - link "flight status" [ref=e468] [cursor=pointer]:
                - /url: https://www.spicejet.com/#status
              - text: for updates.
            - generic [ref=e470]:
              - text: Passengers carrying arms & ammunition must request clearance at least 72 hours before departure. Email custrelations@spicejet.com for assistance.
              - link "Read more" [ref=e471] [cursor=pointer]:
                - /url: " https://corporate.spicejet.com/Tnc.aspx"
              - text: .
            - generic [ref=e473]:
              - text: Use our
              - link "Change Assist" [ref=e474] [cursor=pointer]:
                - /url: https://changes.spicejet.com/index.html#/
              - text: portal for easy rescheduling or refunds for your affected flight.
            - generic [ref=e476]:
              - text: Only 1 piece of hand baggage of up to 7 kg is permitted on all SpiceJet flights. Power banks/portable mobile chargers are ONLY allowed in Cabin Baggage. E-cigarettes are prohibited to be carried in Cabin as well as Checked-in Baggage.
              - link [ref=e477] [cursor=pointer]:
                - /url: ""
            - generic [ref=e479]:
              - text: With DigiYatra, enjoy quick and easy entry to the airport, and pre-security check with your face as your boarding pass for the next SpiceJet flight at select cities.
              - link "Know more." [ref=e480] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Digiyatra.aspx
          - generic [ref=e482]:
            - generic [ref=e483] [cursor=pointer]
            - generic [ref=e484] [cursor=pointer]
            - generic [ref=e485] [cursor=pointer]
            - generic [ref=e486] [cursor=pointer]
            - generic [ref=e487] [cursor=pointer]
            - generic [ref=e488] [cursor=pointer]
        - generic [ref=e490] [cursor=pointer]
      - generic [ref=e493]:
        - generic [ref=e494]: I Am Here For...
        - generic [ref=e495]:
          - link "sjlady Change Assist (Choose alternate flight or refund for changed/cancelled flights)" [ref=e496] [cursor=pointer]:
            - /url: https://changes.spicejet.com/index.html#/
            - generic [ref=e497]:
              - img "sjlady" [ref=e499]
              - generic [ref=e500]:
                - generic [ref=e501]: Change Assist
                - generic [ref=e502]: (Choose alternate flight
                - generic [ref=e503]: or refund for
                - generic [ref=e504]: changed/cancelled flights)
          - link "sjlady SpiceClub" [ref=e505] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/
            - generic [ref=e506]:
              - img "sjlady" [ref=e508]
              - generic [ref=e509]: SpiceClub
          - link "sjlady SpiceJet Axis Bank Credit Card" [ref=e511] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/axisBank
            - generic [ref=e512]:
              - img "sjlady" [ref=e514]
              - generic [ref=e515]: SpiceJet Axis Bank Credit Card
          - link "sjlady Visa Services" [ref=e517] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/VisaServices.aspx
            - generic [ref=e518]:
              - img "sjlady" [ref=e520]
              - generic [ref=e521]: Visa Services
          - link "sjlady GST Invoice" [ref=e523] [cursor=pointer]:
            - /url: ""
            - generic [ref=e524]:
              - img "sjlady" [ref=e526]
              - generic [ref=e527]: GST Invoice
      - link "Spin to Win" [ref=e529] [cursor=pointer]:
        - /url: ""
        - generic [ref=e531]:
          - generic [ref=e532]: Spin to Win
          - generic [ref=e533]:
            - link:
              - /url: ""
      - generic [ref=e536]:
        - generic [ref=e537]: Irresistible Deals
        - generic [ref=e539]:
          - generic [ref=e541]:
            - generic [ref=e542]: SpiceMax
            - generic [ref=e543]: The best seat in the sky at
            - generic [ref=e544]: 30% Off
            - generic [ref=e550]: SMAX30
            - generic [ref=e551]: Valid till:September 30, 2026
          - generic [ref=e553]:
            - generic [ref=e554]: Enjoy ADDONS at
            - generic [ref=e555]: Upto
            - generic [ref=e556]: 25% Off
            - generic [ref=e562]: ADDON25
            - generic [ref=e563]: Valid till:March 31, 2027
        - generic [ref=e564]: Explore More
      - generic [ref=e566]:
        - generic [ref=e567]: Recommended Add-Ons
        - generic [ref=e572]:
          - link "SpiceMax Upgrade your flying experience with more space and a host of convenient services and priority privileges." [ref=e574] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spiceMax.aspx
            - generic [ref=e575]:
              - generic [ref=e579]: SpiceMax
              - generic [ref=e580]: Upgrade your flying experience with more space and a host of convenient services and priority privileges.
          - link "SpiceCafé Pamper your taste buds with our variety of delicious hot meals and sandwiches." [ref=e582] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spiceCafe.aspx
            - generic [ref=e583]:
              - generic [ref=e587]: SpiceCafé
              - generic [ref=e588]: Pamper your taste buds with our variety of delicious hot meals and sandwiches.
          - link "Excess Baggage Avoid last-minute baggage hassles at the airport by pre-booking your excess baggage now and save up to 10%!" [ref=e590] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/ExcessBaggage.aspx
            - generic [ref=e591]:
              - generic [ref=e595]: Excess Baggage
              - generic [ref=e596]: Avoid last-minute baggage hassles at the airport by pre-booking your excess baggage now and save up to 10%!
          - link "You1st Enjoy Priority Check-in, Boarding & Baggage Delivery for just ₹595/₹699 (Domestic/International)!" [ref=e598] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/YouFirst.aspx
            - generic [ref=e599]:
              - generic [ref=e603]: You1st
              - generic [ref=e605]: Enjoy Priority Check-in, Boarding & Baggage Delivery for just ₹595/₹699 (Domestic/International)!
          - link "Extra Seat Enjoy added privacy, extra space, and up to 10kg additional baggage allowance with an extra seat or row!" [ref=e607] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/ExtraSeat.aspx
            - generic [ref=e608]:
              - generic [ref=e612]: Extra Seat
              - generic [ref=e613]: Enjoy added privacy, extra space, and up to 10kg additional baggage allowance with an extra seat or row!
          - link "SpicePlus Enjoy priority services with a meal and beverage at ₹500. Add your preferred seat for an extra cost." [ref=e615] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/spicePlus.aspx
            - generic [ref=e616]:
              - generic [ref=e620]: SpicePlus
              - generic [ref=e621]: Enjoy priority services with a meal and beverage at ₹500. Add your preferred seat for an extra cost.
      - generic [ref=e624]:
        - generic [ref=e625]: Tailor-made For You
        - generic [ref=e627]:
          - link "Group Bookings Quick responses, effortless tracking, and a seamless booking journey." [ref=e629] [cursor=pointer]:
            - /url: https://groups.spicejet.com/
            - generic [ref=e630]:
              - generic [ref=e631]: Group Bookings
              - generic [ref=e632]: Quick responses, effortless tracking, and a seamless booking journey.
          - link "SME High Flyer Exclusive fares, flexible changes & premium perks for small and medium enterprises." [ref=e634] [cursor=pointer]:
            - /url: https://sme.spicejet.com/Account/Login?ReturnUrl=%2FHome%2FLandingPage
            - generic [ref=e635]:
              - generic [ref=e636]: SME High Flyer
              - generic [ref=e637]: Exclusive fares, flexible changes & premium perks for small and medium enterprises.
          - link "Corporate Traveller Customised travel solutions for business professionals." [ref=e639] [cursor=pointer]:
            - /url: https://corporate.spicejet.com/CorporateQueries.aspx
            - generic [ref=e640]:
              - generic [ref=e641]: Corporate Traveller
              - generic [ref=e642]: Customised travel solutions for business professionals.
      - generic [ref=e644]:
        - generic [ref=e645]:
          - generic [ref=e646]: SpiceClub Loyalty Program
          - generic [ref=e648]:
            - generic [ref=e651]: Join our frequent flyer program and enjoy unmatched rewards, added comforts and exclusive privileges.
            - link "Know More" [ref=e652] [cursor=pointer]:
              - /url: https://spiceclub.spicejet.com/
        - generic [ref=e655]:
          - generic [ref=e656]:
            - generic [ref=e657]: As a member you get access to
            - generic [ref=e658]:
              - generic [ref=e661]:
                - generic [ref=e662]: Free
                - generic [ref=e663]: Flight Vouchers
              - generic [ref=e667]:
                - generic [ref=e668]: Earn
                - generic [ref=e669]: SC Points
              - generic [ref=e673]:
                - generic [ref=e674]: Complimentary
                - generic [ref=e675]: Upgrades
          - link "Join SpiceClub" [ref=e681] [cursor=pointer]:
            - /url: https://spiceclub.spicejet.com/signup
      - generic [ref=e684]:
        - generic [ref=e689]:
          - generic [ref=e690]: Cargo
          - generic [ref=e692]: Small, Medium, Large & X-Large
          - generic [ref=e693]: Get your cargo shipped from one place to another at a convenient and cost-effective manner.
          - generic [ref=e694]: Book Now!
        - generic [ref=e700]:
          - generic [ref=e701]: Charter
          - generic [ref=e703]: Your private space in the sky
          - generic [ref=e704]: Now book a private charter for small groups or big.
          - generic [ref=e705]: Book Now!
    - generic [ref=e708]:
      - generic [ref=e709]:
        - generic [ref=e711]:
          - generic [ref=e712]:
            - generic [ref=e713]: About Us
            - generic [ref=e716]:
              - link "Spice Route Magazine" [ref=e718] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/SpiceRoute.aspx
              - link "Corporate Overview" [ref=e722] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/CorporateOverview.aspx
              - link "Fleet" [ref=e726] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Fleet.aspx
              - link "Careers" [ref=e730] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/careers.aspx
              - link "Media Center" [ref=e734] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/PressReleaseNews.aspx
              - link "Awards and Applaud" [ref=e738] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/AwardsandApplaud.aspx
          - generic [ref=e741]:
            - generic [ref=e742]: Contact Us
            - generic [ref=e745]:
              - link "Airports" [ref=e747] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Airports.aspx
              - link "International Offices" [ref=e751] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InternationalOffices.aspx
              - link "Corporate Head Office" [ref=e755] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/ContactUs.aspx
              - link "Advertise with Us" [ref=e759] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/MediaSale.aspx
              - link "RFP" [ref=e763] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Content/pdf/GSA-RFP.pdf
          - generic [ref=e766]:
            - generic [ref=e767]: Travel Info
            - generic [ref=e770]:
              - link "Citizen's Charter" [ref=e772] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Charter.aspx
              - link "FAQ" [ref=e776] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/GeneralAirTravelFaq.aspx
              - link "Fitness To Fly Guideline" [ref=e780] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Content/pdf/FitnessFlyGuidelines.pdf
              - link "Flight Schedules" [ref=e784] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Schedules.aspx
              - link "Terms of Carriage" [ref=e788] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Tnc.aspx
              - link "Fees and Charges" [ref=e792] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/FeesCharges.aspx
              - link "Know Your Rights" [ref=e796] [cursor=pointer]:
                - /url: https://www.civilaviation.gov.in/ministry-documents/passenger-charter-of-rights
              - link "Book Any Test From Any Lab" [ref=e800] [cursor=pointer]:
                - /url: http://flebo.in/
              - link "Book Any Test From Any Lab in Delhi" [ref=e804] [cursor=pointer]:
                - /url: https://flebo.in/health/delhi/
          - generic [ref=e807]:
            - generic [ref=e808]: Investors
            - generic [ref=e811]:
              - link "Corporate Governance" [ref=e813] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsCorporateGovernance.aspx
              - link "Financial Information" [ref=e817] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsFinancialInformation.aspx
              - link "Notices" [ref=e821] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsNotices.aspx
              - link "Corporate Announcements" [ref=e825] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorCorporateAnnouncements.aspx
              - link "Shareholding Pattern" [ref=e829] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorsShareholdingPattern.aspx
              - link "Investor Services" [ref=e833] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/InvestorServices.aspx
              - link "Disclosure Regulation 46" [ref=e837] [cursor=pointer]:
                - /url: https://corporate.spicejet.com/Regulation46.aspx
        - generic [ref=e840]:
          - generic [ref=e842]:
            - generic [ref=e843]: "For Reservations or Customer Support:"
            - generic [ref=e844]:
              - generic [ref=e845]:
                - generic [ref=e846]: 📞
                - generic [ref=e847]: +91 (0)124 4983410 / +91 (0)124 7101600
              - generic [ref=e848]:
                - generic [ref=e849]: 📧
                - link "custrelations@spicejet.com" [ref=e851] [cursor=pointer]:
                  - /url: mailto:custrelations@spicejet.com
          - generic [ref=e852]:
            - generic [ref=e853]: Follow us
            - link [ref=e854] [cursor=pointer]:
              - /url: https://www.facebook.com/FlySpiceJet/
            - link [ref=e857] [cursor=pointer]:
              - /url: https://twitter.com/flyspicejet
            - link [ref=e860] [cursor=pointer]:
              - /url: "https://www.linkedin.com/company/spicejet-limited/ "
            - link [ref=e863] [cursor=pointer]:
              - /url: https://www.instagram.com/spicejetairlines/?hl=en
            - link [ref=e866] [cursor=pointer]:
              - /url: https://www.youtube.com/channel/UCldnpuM5Q-y11XGNpfh3k-A
          - generic [ref=e869]:
            - generic [ref=e870]: Download our mobile app
            - generic [ref=e872]:
              - link [ref=e873] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.vl.spicejet&hl=en
              - link [ref=e876] [cursor=pointer]:
                - /url: https://itunes.apple.com/us/app/spicejet/id998319513?mt=8
      - generic [ref=e879]:
        - generic [ref=e880]: "Note:"
        - generic [ref=e881]: We log the IP addresses of the visitors on our website for security reasons.
      - generic [ref=e884]:
        - generic [ref=e885]:
          - generic [ref=e903]: © Copyright Spicejet India. All Rights Reserved
          - generic [ref=e904]: "Registered Office: SpiceJet Ltd, 319, Udyog Vihar, Phase IV, Gurgaon, Haryana - 122016"
        - generic [ref=e905]:
          - generic [ref=e906]: Home
          - generic [ref=e909]:
            - generic [ref=e910]: •
            - link "Privacy Policy" [ref=e911] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/PrivacyPolicy.aspx
          - generic [ref=e912]:
            - generic [ref=e913]: •
            - link "Disclaimer" [ref=e914] [cursor=pointer]:
              - /url: "https://corporate.spicejet.com/Disclaimer.aspx "
          - generic [ref=e915]:
            - generic [ref=e916]: •
            - link "GST Information" [ref=e917] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/GstInformation.aspx
          - generic [ref=e918]:
            - generic [ref=e919]: •
            - link "Sitemap" [ref=e920] [cursor=pointer]:
              - /url: https://corporate.spicejet.com/Sitemap.aspx
  - generic [ref=e921]: Family and Friends discount is applicable for a minimum of 2 passengers (excluding infant) on a single booking. Terms and conditions apply.
  - generic [ref=e925]: The special discounted fares are applicable to senior citizens, above the age of 60 years. To travel under this fare, the passenger must present a valid age proof at the SpiceJet check-in counter at the airport.
  - generic [ref=e929]: Children between the ages of 5 and 12 travelling alone are considered unaccompanied minors. Charges per minor for each domestic sector are INR 4999, and charges vary for each international sector, starting at INR 9999. This can be bought until 2hrs/3hrs (domestic/international) prior to departure. After booking, please fill out the Unaccompanied Minor Form and carry four printed copies to the airport.
  - generic [ref=e933]: Applicable for all students above the age of 12 years studying with a bonafide school/university. Limited inventory available. Valid photo ID and educational institute I-card need to be presented for verification at check-in. Bookings under this offer are refundable. Conditions apply.
  - generic [ref=e937]: Applicable for all serving and retired Indian Armed Forces personnel, Paramilitary Forces personnel and their dependent families. Limited inventory available. Valid photo ID and relevant military card need to be presented for verification at check-in. Conditions apply.
  - generic [ref=e941]: The fares are extended only to government officials for their official travel (those carrying a valid identity card). A valid identity card issued by the employer is a pre-requisite for travel under this offer and passengers will be required to produce the card at the SpiceJet check-in counter at the airport.
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
  12 |     readonly currency_usd: Locator;
  13 |     readonly family_friends: Locator;
  14 |     readonly search_flights: Locator;
  15 | 
  16 |     constructor(page: Page) { 
  17 |         this.page = page;
  18 |         this.passengers = page.locator('//div[text()="Passengers"]');
  19 |         this.adult_plus = page.locator('//div[@data-testid="Adult-testID-plus-one-cta"]');
  20 |         this.childrens_plus = page.locator('//div[@data-testid="Children-testID-plus-one-cta"]');
  21 |         // this.done = page.getByText('Done', { exact: true });
  22 |         this.done = page.locator('//div[@data-testid="home-page-travellers-done-cta"]');
  23 |         this.currency = page.locator('[data-testid="application-id"]').getByText('Currency');
  24 |         this.currency_usd = page.locator('//div[text()="USD"]');
  25 | 
  26 |         this.family_friends = page.getByText('Family & Friends')
  27 |         this.search_flights = page.getByRole('button', { name: 'Search Flight' });
  28 | 
  29 |     }
  30 |    
  31 |     async Booking() { 
  32 |        await  this.passengers.click();
  33 |         await this.adult_plus.click();
  34 |         await this.adult_plus.click();
  35 |         await this.childrens_plus.click();
  36 |         await this.childrens_plus.click();
  37 |         await this.done.scrollIntoViewIfNeeded();
  38 |         await this.page.mouse.wheel(0, 300);
  39 |         await this.done.click();
  40 |         await this.currency.click();
  41 |         await this.currency_usd.click();
  42 |         await this.family_friends.click();
> 43 |         await this.search_flights.click();
     |                                   ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  44 |     }
  45 | 
  46 | }
```