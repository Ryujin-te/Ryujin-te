# Connecting the free introduction calendar

Create one event in Cal.com or Calendly:

- Name: `Free introduction`
- Length: 20 minutes
- Location: phone or video
- Questions: name, phone, area, and `What are you hoping to get out of it?`

Connect the service to the calendar you actually use so unavailable times cannot be booked.

Copy the public address for that event. In GitHub, open `site-config.js`, select the pencil-shaped edit button, and paste the address between the quotation marks:

`window.RYUJINTE_BOOKING_URL = "https://cal.com/your-name/free-introduction";`

Commit the change. Every `Book a free introduction` or `Book a time` button will then open the calendar. Until an address is entered, those buttons lead to the contact form instead, so none of them are broken.

Only the free introduction should be self-bookable. Private lessons still require a conversation about location and travel time.
