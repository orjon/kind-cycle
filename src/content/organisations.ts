import { OrganisationsDirectory } from '../types/types'

export const organisations: OrganisationsDirectory = {
  lloydPark: {
    id: 'lloydPark',
    name: "Lloyd Park Children's Charity",
    about:
      'Lloyd Park Children’s Charity provides vital services and support for children and families in the Waltham Forest community.',
    howItWorks:
      'Their Baby Bank project offers essentials like baby clothes, equipment, and toiletries to families in need. They collect items for children aged 0-5. For up to date list of items accepted, drop-off locations and times, check out the website and send an email.',
    website: { url: 'https://www.tlpcc.org.uk/baby-bank' }
  },
  pramDepot: {
    id: 'pramDepot',
    name: 'Pram Depot',
    about:
      'PramDepot is an arts-led recycling project that supports vulnerable new mums by providing recycled baby clothes and equipment.',
    howItWorks:
      'Gently used baby gear can be donated at the Wood Green location. A list of accepted items is available on the website. To arrange a drop-off, simply schedule a time using the online donation form.',
    website: { url: 'https://pramdepot.com/donate-items' }
  },
  olio: {
    id: 'olio',
    name: 'Olio',
    about:
      'Olio is a mobile app that connects communities to share items for free, helping reduce household and food waste.',
    howItWorks:
      'Download the app and create an account. Once registered, you can post items you want to give away, such as food, household goods. You can also browse listings from others in your local area to request or borrow items. Users communicate directly through the app to arrange pick-up or collection.',
    website: { url: 'https://olioapp.com' }
  },
  freecycle: {
    id: 'freecycle',
    name: 'Freecycle',
    about:
      'Freecycle is a platform where people give away items they no longer need for free, promoting reuse and reducing waste.',
    howItWorks:
      'Sign up, create an account, and join your borough group and nearby ones. You can post listings of items you want to give away, such as furniture, electronics, or clothes, and arrange collection through direct messages. Freecycle promotes community-driven exchanges with no financial transactions. Users can also post wanted ads for specific items.',
    website: { url: 'https://www.freecycle.org' }
  },
  facebookMarketplace: {
    id: 'facebookMarketplace',
    name: 'Facebook Marketplace',
    about:
      'Facebook Marketplace is an online platform where users can buy, sell, and give away items within their local community.',
    howItWorks:
      'To donate items on Facebook Marketplace, log into Facebook and go to the Marketplace section. Click "Create New Listing", select "Item for Sale", and set the price to £0. Add photos, descriptions, location and item details. Local users can message you directly to arrange collection.',
    website: { url: 'https://www.facebook.com/marketplace' }
  },
  britishHeartFoundation: {
    id: 'britishHeartFoundation',
    name: 'British Heart Foundation',
    about:
      'The British Heart Foundation is a charity dedicated to funding research into heart disease and supporting those affected by cardiovascular conditions.',
    howItWorks:
      'The British Heart Foundation accepts donations of clothing, books, electrical goods, and furniture. They offer free collection for larger items, which you can arrange through an online form. Just provide the item details, preferred collection date, address, and contact info.',
    website: {
      url: 'https://www.bhf.org.uk/shop/donating-goods/book-furniture-collection-near-me',
      label: 'www.bhf.org.uk'
    }
  },
  encouragingReuse: {
    id: 'encouragingReuse',
    name: 'Encouraging Reuse',
    address: 'xxxx',
    about: '',
    howItWorks:
      'The "Encouraging Reuse" shop is a community-focused space dedicated to promoting sustainability through the donation and reuse of items.',
    website: {
      url: 'https://maps.app.goo.gl/LQ8JtGr7xecFteKH9',
      label: 'Google maps location'
    }
  },
  traid: {
    id: 'traid',
    name: 'TRAID',
    about:
      'TRAID is a UK charity focused on reducing textile waste by turning unwanted clothes into resources for global development projects.',
    howItWorks:
      'Donated clothing are collect and resold to fund their initiatives. You can donate clean, wearable clothes by dropping them off at TRAID donation banks or their charity shops. For larger donations, TRAID offers a free home collection service, which can be arranged through their website.',
    website: {
      url: 'https://traid.org.uk/clothes-donations/find-a-bank',
      label: 'www.traid.org.uk'
    }
  },
  weCollectWeDonate: {
    id: 'weCollectWeDonate',
    name: 'WeCollectWeDonate',
    about:
      'WeCollectWeDonate is a social enterprise that collects unwanted items such as clothes, books, and home goods directly from your doorstep, free of charge.',
    howItWorks:
      'They resell or donate these items to charities, helping raise funds for causes like homelessness, mental health, and education. You can arrange a collection easily through their website, where they accept items in good, reusable condition.',
    website: { url: 'https://wecollectwedonate.co.uk/faq' }
  },
  haringeyFixers: {
    id: 'haringeyFixers',
    name: 'Haringey Fixers',
    about:
      'Haringey Fixers is a community-led charity promoting repair and reuse.They offer monthly Repair Cafés, where local residents can bring items to repair, helping reduce waste and teach repair skills.',
    howItWorks:
      'A Repair Café is a community event where locals fix household items and reduce waste. Volunteers help repair things like appliances, furniture, and clothing. Held several weekends a month in Haringey, these free sessions aim to promote sustainability. Check the calendar for upcoming events and book a free weekend slot.',
    website: { url: 'https://haringeyfixers.org' }
  },
  northLondonWasteAuthority: {
    id: 'northLondonWasteAuthority',
    name: 'North London Waste Authority',
    about:
      'The North London Waste Authority (NLWA) manages waste disposal and recycling services for seven north London boroughs, and delivers multiple projects aiming to reduce waste and improve sustainability.',
    howItWorks:
      'NLWA promotes repair initiatives to reduce waste, offering a repair directory on their website. This directory includes resources like repair services, DIY repair tips, and guides to extend the life of household items.',
    website: {
      url: 'https://www.nlwa.gov.uk/article/repair',
      label: 'www.nlwa.gov.uk'
    }
  },
  clothesBanks: {
    id: 'clothesBanks',
    name: 'Clothes Banks',
    about:
      'Several charities, including TRAID and The Salvation Army, have clothes banks located throughout the city, where you can drop off unwanted clothes, textiles, and shoes at any time.',
    howItWorks:
      'Simply bag your items and place them in the designated recycling bins. These banks are conveniently located in multiple spots. Here’s a map to help you find the nearest one.',
    website: {
      url: 'https://maps.app.goo.gl/z6gtYme6YuGxYCuA7',
      label: 'Google maps location'
    }
  }
}
