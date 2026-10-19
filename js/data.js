/* ============================================================
   PURRVELOUS DATA
   All copy lives here in both languages. Edit text here only.
   ============================================================ */
const STORE = {
  phone: "+8801708546964",
  phoneDisplay: "+880 1708 546964",
  wa: "8801708546964",
  email: "purrvelous@gmail.com",
  facebook: "https://www.facebook.com/",
  delivery: { inside: 70, outside: 100 },
  /* Facebook Pixel: paste your Pixel ID here when the live site goes up */
  pixelId: ""
};

const UI = {
  en: {
    topbar: "Cash on delivery all over Bangladesh",
    notesOn: "Photo notes: ON", notesOff: "Photo notes: OFF",
    nav_shop: "Shop", nav_cats: "Cats", nav_dogs: "Dogs", nav_blog: "Blog", nav_about: "About", nav_faq: "FAQ", nav_contact: "Contact",
    soon: "Soon", comingSoon: "Coming soon", live: "Available",
    search: "Search", searchPh: "Search bags, food, litter, tips...", close: "Close", menu: "Menu",
    wishlist: "Wishlist", account: "Account", cart: "Cart", home: "Home",
    addToCart: "Add to cart", added: "Added to your cart", viewCart: "View cart",
    orderWa: "Order on WhatsApp", buyNow: "Buy now",
    savedWish: "Saved to your wishlist", removedWish: "Removed from wishlist",
    inStock: "In stock", qty: "Quantity", color: "Colour", grey: "Grey",
    tk: "৳",
    // hero
    heroEyebrow: "Pet supplies, delivered across Bangladesh",
    heroTitle: "Because they <em>deserve</em> better",
    heroLede: "Gear we would trust with our own cats. We are starting with a carrier that keeps your hands free, and a full range for every pet is on the way.",
    heroCta1: "Shop the cat bag", heroCta2: "Browse categories",
    heroMeta1: "Cash on delivery", heroMeta2: "Order on WhatsApp",
    newIn: "New in",
    // trust
    t1b: "Cash on delivery", t1s: "Pay when it reaches you",
    t2b: "Delivery from ৳70", t2s: "Inside Dhaka ৳70, outside ৳100",
    t3b: "WhatsApp support", t3s: "Real people, quick replies",
    t4b: "Easy returns", t4s: "7 days on unused items",
    // pets
    shopByPet: "Shop by pet", shopByPetSub: "We started with cats. Dogs and more are next.",
    catsTitle: "Cats", catsSub: "Carriers today. Food, litter, toys and more on the way.",
    dogsTitle: "Dogs", dogsSub: "We are building a dog range now. Get notified the day it opens.",
    shopCats: "Shop for cats", notifyMe: "Notify me",
    // categories
    shopByCat: "Shop by category", shopByCatSub: "One shelf is stocked. The rest are being filled with products we have tested ourselves.",
    allCats: "See all categories", products: "products", product1: "product",
    // spotlight
    spotEyebrow: "Our first product",
    // why
    whyEyebrow: "Why Purrvelous", whyTitle: "Picked by cat parents, for cat parents",
    why1t: "Tested at home first", why1d: "Every product lives with our own cats before it goes on sale. If it fails at home, it never reaches your door.",
    why2t: "Made for Bangladesh", why2d: "Breathable materials for humid days and sizes that fit rickshaws, CNGs and small flats.",
    why3t: "Real help on WhatsApp", why3d: "Not sure about size or fit? Message us and a real person will answer, usually within the hour.",
    // reviews
    revEyebrow: "Reviews", revTitle: "What cat parents say",
    revSub: "Sample layout. Real reviews from your customers will appear here.",
    sampleReview: "Sample",
    // blog
    blogEyebrow: "From the blog", blogTitle: "Cat care, made simple", readMore: "Read all posts", minRead: "min read",
    // newsletter
    nlTitle: "Be first when new shelves open", nlSub: "Food, litter and toys are coming. Get one email when they land, plus cat care tips now and then.",
    nlPh: "Your email address", nlBtn: "Notify me", nlDone: "You are on the list. We will email you when new products arrive.",
    invalidEmail: "Enter a valid email address.",
    // shop
    shopTitle: "Shop", shopSub: "Everything Purrvelous, in one place.",
    pet: "Pet", category: "Category", all: "All", allPets: "All pets", allCategories: "All categories",
    sort: "Sort", sortFeat: "Featured", sortLow: "Price: low to high", sortHigh: "Price: high to low",
    showing: "Showing", results: "results", result1: "result",
    soonShelves: "Coming soon", soonShelvesSub: "These shelves are being stocked. Tap Notify me to hear first.",
    catEmptyT: "This shelf is being stocked", catEmptyD: "We are testing products for this category right now. Leave your email and we will tell you the day it opens.",
    notifyDone: "Thanks. We will email you when this opens.",
    // product
    reviewsTab: "Reviews", descTab: "Description", specsTab: "Specifications", shipTab: "Delivery and returns",
    insideDhaka: "Inside Dhaka", outsideDhaka: "Outside Dhaka", codAvail: "Cash on delivery available",
    noReviews: "No reviews yet", beFirst: "Bought this bag? Be the first to share how your cat liked it.",
    writeReview: "Write a review", yourRating: "Your rating", yourName: "Your name", yourReview: "Your review",
    submitReview: "Post review", reviewThanks: "Thanks! Your review is posted.",
    reviewNeed: "Pick a rating and write a few words.", reviewsCount: "reviews", review1: "review",
    related: "More for your cat, coming soon",
    // cart
    cartTitle: "Your cart", cartEmpty: "Your cart is empty", cartEmptyD: "The cat bag is waiting for you.",
    continueShopping: "Continue shopping", remove: "Remove", subtotal: "Subtotal", delivery: "Delivery", total: "Total",
    deliveryCalc: "Calculated at checkout", checkout: "Go to checkout", each: "each",
    cartNoteCod: "You pay in cash when the parcel arrives.",
    // checkout
    checkoutTitle: "Checkout", coContact: "Your details", coAddress: "Delivery address", coArea: "Delivery area", coPay: "Payment",
    fullName: "Full name", phone: "Phone number", phoneHint: "11 digits, like 01XXXXXXXXX", email: "Email", optional: "optional",
    district: "District", districtPh: "e.g. Dhaka, Chattogram, Sylhet", address: "Full address", addressPh: "House, road, area",
    note: "Order note", notePh: "Anything the rider should know?",
    cod: "Cash on delivery", codD: "Pay the rider in cash when you receive your order.",
    onlineSoon: "bKash, Nagad and cards", onlineSoonD: "Coming soon",
    placeOrder: "Place order", orderSummary: "Order summary", agree: "By placing this order you agree to our",
    terms: "Terms", and: "and", returnsPolicy: "Return policy",
    errName: "Enter your name.", errPhone: "Enter an 11 digit Bangladeshi mobile number.", errDistrict: "Enter your district.", errAddress: "Enter your full address.",
    // confirmation
    thanksTitle: "Order placed. Thank you!", thanksSub: "We will call you to confirm before sending your parcel.",
    orderNo: "Order number", next1t: "We confirm", next1d: "A quick call or WhatsApp to confirm your order.",
    next2t: "We ship", next2d: "Inside Dhaka in 1 to 2 days, outside in 2 to 4 days.",
    next3t: "You pay", next3d: "Pay the rider in cash when it arrives.",
    viewOrders: "View my orders", orderNotFound: "We could not find that order.",
    // auth
    login: "Log in", register: "Create account", logout: "Log out",
    authSideT: "Your Purrvelous account", authSide1: "Track every order", authSide2: "Save favourites to your wishlist", authSide3: "Faster checkout next time", authSide4: "Review what you bought",
    emailOrPhone: "Email or phone", password: "Password", pwHint: "At least 6 characters",
    noAccount: "New here?", haveAccount: "Already have an account?",
    errLogin: "That email or phone and password do not match.", errPw: "Use at least 6 characters.", errExists: "An account with this phone or email already exists.",
    welcome: "Welcome", welcomeBack: "Welcome back",
    // account
    myOrders: "My orders", addresses: "Saved address", profile: "Profile", myReviews: "My reviews",
    noOrders: "No orders yet", noOrdersD: "When you place an order, it will show up here.",
    processing: "Processing", items: "items", item1: "item", save: "Save changes", saved: "Saved",
    noAddress: "No saved address yet. Your address saves automatically after your first order.",
    noMyReviews: "You have not written any reviews yet.",
    // wishlist
    wishTitle: "Your wishlist", wishEmpty: "Nothing saved yet", wishEmptyD: "Tap the heart on any product to save it here.",
    // about
    aboutEyebrow: "Our story",
    // contact
    contactTitle: "Talk to us", contactSub: "Questions about a product, an order or what suits your cat? We reply fastest on WhatsApp.",
    chatWa: "Chat on WhatsApp", emailUs: "Email us", callUs: "Call us", hours: "Support hours", hoursV: "Every day, 10am to 9pm",
    copy: "Copy", copied: "Copied",
    cName: "Your name", cPhoneEmail: "Phone or email", cSubject: "Subject", cMsg: "Message", cSend: "Send message",
    cDone: "Thanks! Your message is in. We usually reply within a few hours.", errMsg: "Write a short message.",
    subjects: ["A product question", "My order", "Returns", "Something else"],
    // faq
    faqTitle: "Questions, answered", faqSub: "Still stuck? Message us on WhatsApp and we will sort it out.",
    // blog
    readArticle: "Read the article", topics: "Topics", allTopics: "All topics", inThisArticle: "In this article", faqShort: "Frequently asked questions", keepReading: "Keep reading",
    seoPanel: "SEO settings for this post", seoKeyword: "Focus keyword", seoTitle: "Meta title", seoDesc: "Meta description",
    vetReview: "Health article: ask a vet to review it before publishing.",
    medDisclaimer: "This article is general information, not veterinary advice. Every cat is different, so talk to your vet about your cat's health.",
    blogPageTitle: "The Purrvelous blog", blogPageSub: "Practical cat care for homes in Bangladesh. Health, food, travel and everyday care.",
    backBlog: "All posts", featuredIn: "Mentioned in this post",
    // search
    searchTitle: "Search results for", searchNone: "Nothing found", searchNoneD: "Try another word, or browse the shop.",
    inCats: "Categories", inProducts: "Products", inPosts: "Blog posts",
    // policies
    policies: "Policies", shipping: "Shipping", returns: "Returns", privacy: "Privacy", termsT: "Terms",
    policyNote: "Template policy. Review and adjust before launch.",
    // footer
    fAbout: "Pet supplies chosen with care, delivered across Bangladesh. Starting with cats, growing for every pet.",
    fShop: "Shop", fHelp: "Help", fContact: "Contact", fRights: "All rights reserved.", fPay: "We accept",
    // 404
    nfTitle: "This page wandered off", nfSub: "Like a cat at bath time. Let us get you back somewhere useful.", goHome: "Go to homepage",
    // pixel
    pixel: "Pixel"
  },
  bn: {
    topbar: "সারা বাংলাদেশে ক্যাশ অন ডেলিভারি",
    notesOn: "ছবির নোট: চালু", notesOff: "ছবির নোট: বন্ধ",
    nav_shop: "শপ", nav_cats: "বিড়াল", nav_dogs: "কুকুর", nav_blog: "ব্লগ", nav_about: "আমাদের কথা", nav_faq: "প্রশ্নোত্তর", nav_contact: "যোগাযোগ",
    soon: "শীঘ্রই", comingSoon: "শীঘ্রই আসছে", live: "পাওয়া যাচ্ছে",
    search: "খুঁজুন", searchPh: "ব্যাগ, খাবার, লিটার, টিপস খুঁজুন...", close: "বন্ধ করুন", menu: "মেনু",
    wishlist: "উইশলিস্ট", account: "অ্যাকাউন্ট", cart: "কার্ট", home: "হোম",
    addToCart: "কার্টে যোগ করুন", added: "কার্টে যোগ হয়েছে", viewCart: "কার্ট দেখুন",
    orderWa: "হোয়াটসঅ্যাপে অর্ডার করুন", buyNow: "এখনই কিনুন",
    savedWish: "উইশলিস্টে সেভ হয়েছে", removedWish: "উইশলিস্ট থেকে সরানো হয়েছে",
    inStock: "স্টকে আছে", qty: "পরিমাণ", color: "রং", grey: "ধূসর",
    tk: "৳",
    heroEyebrow: "পোষা প্রাণীর সব দরকারি জিনিস, সারা বাংলাদেশে ডেলিভারি",
    heroTitle: "কারণ ওরা <em>আরও ভালো</em> কিছুর যোগ্য",
    heroLede: "যে জিনিস আমরা নিজের বিড়ালের জন্য ভরসা করি, শুধু সেটাই আপনার জন্য। শুরু করছি এমন একটা ক্যারিয়ার দিয়ে যেটা আপনার দুই হাত ফ্রি রাখে। সব পোষা প্রাণীর জন্য পুরো কালেকশন আসছে।",
    heroCta1: "ক্যাট ব্যাগ দেখুন", heroCta2: "ক্যাটাগরি দেখুন",
    heroMeta1: "ক্যাশ অন ডেলিভারি", heroMeta2: "হোয়াটসঅ্যাপে অর্ডার",
    newIn: "নতুন",
    t1b: "ক্যাশ অন ডেলিভারি", t1s: "হাতে পেয়ে টাকা দিন",
    t2b: "ডেলিভারি ৳৭০ থেকে", t2s: "ঢাকায় ৳৭০, ঢাকার বাইরে ৳১০০",
    t3b: "হোয়াটসঅ্যাপ সাপোর্ট", t3s: "সত্যিকারের মানুষ, দ্রুত উত্তর",
    t4b: "সহজ রিটার্ন", t4s: "অব্যবহৃত পণ্যে ৭ দিন",
    shopByPet: "পোষা প্রাণী অনুযায়ী কিনুন", shopByPetSub: "শুরু করেছি বিড়াল দিয়ে। এরপর কুকুর এবং আরও অনেক কিছু।",
    catsTitle: "বিড়াল", catsSub: "এখন ক্যারিয়ার। খাবার, লিটার, খেলনা আর আরও অনেক কিছু আসছে।",
    dogsTitle: "কুকুর", dogsSub: "কুকুরের জন্য কালেকশন তৈরি হচ্ছে। চালু হওয়ার দিনই জানিয়ে দেব।",
    shopCats: "বিড়ালের জন্য কিনুন", notifyMe: "আমাকে জানাবেন",
    shopByCat: "ক্যাটাগরি অনুযায়ী কিনুন", shopByCatSub: "একটা তাক এখন পূর্ণ। বাকিগুলো সাজানো হচ্ছে নিজেরা পরীক্ষা করে দেখা পণ্য দিয়ে।",
    allCats: "সব ক্যাটাগরি দেখুন", products: "টি পণ্য", product1: "টি পণ্য",
    spotEyebrow: "আমাদের প্রথম পণ্য",
    whyEyebrow: "কেন পারভেলাস", whyTitle: "বিড়ালপ্রেমীদের বাছাই, বিড়ালপ্রেমীদের জন্য",
    why1t: "আগে ঘরে পরীক্ষা", why1d: "প্রতিটা পণ্য বিক্রির আগে আমাদের নিজের বিড়ালের সাথে ব্যবহার করে দেখি। ঘরে টিকতে না পারলে আপনার দরজায় পৌঁছায় না।",
    why2t: "বাংলাদেশের জন্য বানানো", why2d: "আর্দ্র দিনের জন্য বাতাস চলাচল করে এমন ম্যাটেরিয়াল, আর রিকশা, সিএনজি ও ছোট ফ্ল্যাটে মানানসই সাইজ।",
    why3t: "হোয়াটসঅ্যাপে সত্যিকারের সাহায্য", why3d: "সাইজ বা মাপ নিয়ে দ্বিধা? মেসেজ দিন, একজন মানুষ উত্তর দেবেন, সাধারণত এক ঘণ্টার মধ্যে।",
    revEyebrow: "রিভিউ", revTitle: "বিড়ালপ্রেমীরা যা বলছেন",
    revSub: "নমুনা লেআউট। আপনার ক্রেতাদের আসল রিভিউ এখানে দেখাবে।",
    sampleReview: "নমুনা",
    blogEyebrow: "ব্লগ থেকে", blogTitle: "বিড়ালের যত্ন, সহজ ভাষায়", readMore: "সব লেখা পড়ুন", minRead: "মিনিটে পড়া",
    nlTitle: "নতুন তাক খুললেই সবার আগে জানুন", nlSub: "খাবার, লিটার আর খেলনা আসছে। আসার দিন একটা ইমেইল পাবেন, মাঝে মাঝে বিড়ালের যত্নের টিপসও।",
    nlPh: "আপনার ইমেইল", nlBtn: "আমাকে জানাবেন", nlDone: "আপনি তালিকায় আছেন। নতুন পণ্য এলেই ইমেইল করব।",
    invalidEmail: "সঠিক ইমেইল লিখুন।",
    shopTitle: "শপ", shopSub: "পারভেলাসের সবকিছু, এক জায়গায়।",
    pet: "পোষা প্রাণী", category: "ক্যাটাগরি", all: "সব", allPets: "সব প্রাণী", allCategories: "সব ক্যাটাগরি",
    sort: "সাজান", sortFeat: "বাছাইকৃত", sortLow: "দাম: কম থেকে বেশি", sortHigh: "দাম: বেশি থেকে কম",
    showing: "দেখানো হচ্ছে", results: "টি ফলাফল", result1: "টি ফলাফল",
    soonShelves: "শীঘ্রই আসছে", soonShelvesSub: "এই তাকগুলো সাজানো হচ্ছে। সবার আগে জানতে 'আমাকে জানাবেন' চাপুন।",
    catEmptyT: "এই তাক সাজানো হচ্ছে", catEmptyD: "এই ক্যাটাগরির পণ্য এখন পরীক্ষা করে দেখছি। ইমেইল দিয়ে রাখুন, চালু হওয়ার দিনই জানাব।",
    notifyDone: "ধন্যবাদ। চালু হলেই ইমেইল করব।",
    reviewsTab: "রিভিউ", descTab: "বিবরণ", specsTab: "স্পেসিফিকেশন", shipTab: "ডেলিভারি ও রিটার্ন",
    insideDhaka: "ঢাকার ভেতরে", outsideDhaka: "ঢাকার বাইরে", codAvail: "ক্যাশ অন ডেলিভারি আছে",
    noReviews: "এখনো কোনো রিভিউ নেই", beFirst: "ব্যাগটা কিনেছেন? আপনার বিড়ালের কেমন লেগেছে, প্রথম রিভিউটা আপনিই দিন।",
    writeReview: "রিভিউ লিখুন", yourRating: "আপনার রেটিং", yourName: "আপনার নাম", yourReview: "আপনার রিভিউ",
    submitReview: "রিভিউ পোস্ট করুন", reviewThanks: "ধন্যবাদ! আপনার রিভিউ পোস্ট হয়েছে।",
    reviewNeed: "রেটিং দিন এবং কয়েকটা কথা লিখুন।", reviewsCount: "টি রিভিউ", review1: "টি রিভিউ",
    related: "আপনার বিড়ালের জন্য আরও আসছে",
    cartTitle: "আপনার কার্ট", cartEmpty: "কার্ট খালি", cartEmptyD: "ক্যাট ব্যাগটা আপনার অপেক্ষায়।",
    continueShopping: "কেনাকাটা চালিয়ে যান", remove: "সরান", subtotal: "সাবটোটাল", delivery: "ডেলিভারি", total: "মোট",
    deliveryCalc: "চেকআউটে হিসাব হবে", checkout: "চেকআউটে যান", each: "প্রতিটি",
    cartNoteCod: "পার্সেল হাতে পেয়ে নগদে টাকা দেবেন।",
    checkoutTitle: "চেকআউট", coContact: "আপনার তথ্য", coAddress: "ডেলিভারির ঠিকানা", coArea: "ডেলিভারি এলাকা", coPay: "পেমেন্ট",
    fullName: "পুরো নাম", phone: "মোবাইল নম্বর", phoneHint: "১১ সংখ্যা, যেমন 01XXXXXXXXX", email: "ইমেইল", optional: "ঐচ্ছিক",
    district: "জেলা", districtPh: "যেমন ঢাকা, চট্টগ্রাম, সিলেট", address: "পুরো ঠিকানা", addressPh: "বাসা, রোড, এলাকা",
    note: "অর্ডার নোট", notePh: "রাইডারের কিছু জানা দরকার?",
    cod: "ক্যাশ অন ডেলিভারি", codD: "অর্ডার হাতে পেয়ে রাইডারকে নগদে টাকা দিন।",
    onlineSoon: "বিকাশ, নগদ ও কার্ড", onlineSoonD: "শীঘ্রই আসছে",
    placeOrder: "অর্ডার করুন", orderSummary: "অর্ডারের সারাংশ", agree: "অর্ডার করার মাধ্যমে আপনি আমাদের",
    terms: "শর্তাবলী", and: "এবং", returnsPolicy: "রিটার্ন নীতিতে সম্মতি দিচ্ছেন",
    errName: "আপনার নাম লিখুন।", errPhone: "১১ সংখ্যার বাংলাদেশি মোবাইল নম্বর দিন।", errDistrict: "জেলার নাম লিখুন।", errAddress: "পুরো ঠিকানা লিখুন।",
    thanksTitle: "অর্ডার হয়েছে। ধন্যবাদ!", thanksSub: "পার্সেল পাঠানোর আগে কনফার্ম করতে আমরা ফোন করব।",
    orderNo: "অর্ডার নম্বর", next1t: "আমরা কনফার্ম করি", next1d: "অর্ডার কনফার্ম করতে ছোট্ট একটা কল বা হোয়াটসঅ্যাপ।",
    next2t: "আমরা পাঠাই", next2d: "ঢাকায় ১ থেকে ২ দিনে, ঢাকার বাইরে ২ থেকে ৪ দিনে।",
    next3t: "আপনি টাকা দেন", next3d: "হাতে পেয়ে রাইডারকে নগদে টাকা দিন।",
    viewOrders: "আমার অর্ডার দেখুন", orderNotFound: "অর্ডারটি খুঁজে পাওয়া যায়নি।",
    login: "লগ ইন", register: "অ্যাকাউন্ট খুলুন", logout: "লগ আউট",
    authSideT: "আপনার পারভেলাস অ্যাকাউন্ট", authSide1: "প্রতিটা অর্ডার ট্র্যাক করুন", authSide2: "পছন্দের পণ্য উইশলিস্টে রাখুন", authSide3: "পরের বার আরও দ্রুত চেকআউট", authSide4: "কেনা পণ্যের রিভিউ দিন",
    emailOrPhone: "ইমেইল বা মোবাইল", password: "পাসওয়ার্ড", pwHint: "অন্তত ৬ অক্ষর",
    noAccount: "নতুন?", haveAccount: "আগে থেকেই অ্যাকাউন্ট আছে?",
    errLogin: "ইমেইল বা মোবাইল আর পাসওয়ার্ড মিলছে না।", errPw: "অন্তত ৬ অক্ষর দিন।", errExists: "এই মোবাইল বা ইমেইলে আগেই অ্যাকাউন্ট আছে।",
    welcome: "স্বাগতম", welcomeBack: "আবার স্বাগতম",
    myOrders: "আমার অর্ডার", addresses: "সেভ করা ঠিকানা", profile: "প্রোফাইল", myReviews: "আমার রিভিউ",
    noOrders: "এখনো কোনো অর্ডার নেই", noOrdersD: "অর্ডার করলে এখানে দেখাবে।",
    processing: "প্রসেসিং", items: "টি পণ্য", item1: "টি পণ্য", save: "সেভ করুন", saved: "সেভ হয়েছে",
    noAddress: "এখনো কোনো ঠিকানা সেভ নেই। প্রথম অর্ডারের পর ঠিকানা নিজে থেকেই সেভ হবে।",
    noMyReviews: "আপনি এখনো কোনো রিভিউ লেখেননি।",
    wishTitle: "আপনার উইশলিস্ট", wishEmpty: "এখনো কিছু সেভ করেননি", wishEmptyD: "যেকোনো পণ্যের হার্টে চাপ দিলে এখানে সেভ হবে।",
    aboutEyebrow: "আমাদের গল্প",
    contactTitle: "কথা বলুন আমাদের সাথে", contactSub: "পণ্য, অর্ডার বা আপনার বিড়ালের জন্য কোনটা ভালো, এমন যেকোনো প্রশ্ন? হোয়াটসঅ্যাপে সবচেয়ে দ্রুত উত্তর দিই।",
    chatWa: "হোয়াটসঅ্যাপে চ্যাট", emailUs: "ইমেইল করুন", callUs: "কল করুন", hours: "সাপোর্টের সময়", hoursV: "প্রতিদিন, সকাল ১০টা থেকে রাত ৯টা",
    copy: "কপি", copied: "কপি হয়েছে",
    cName: "আপনার নাম", cPhoneEmail: "মোবাইল বা ইমেইল", cSubject: "বিষয়", cMsg: "মেসেজ", cSend: "মেসেজ পাঠান",
    cDone: "ধন্যবাদ! আপনার মেসেজ পেয়েছি। সাধারণত কয়েক ঘণ্টার মধ্যে উত্তর দিই।", errMsg: "ছোট করে একটা মেসেজ লিখুন।",
    subjects: ["পণ্য নিয়ে প্রশ্ন", "আমার অর্ডার", "রিটার্ন", "অন্য কিছু"],
    faqTitle: "আপনার প্রশ্ন, আমাদের উত্তর", faqSub: "এখনো আটকে আছেন? হোয়াটসঅ্যাপে মেসেজ দিন, আমরা সমাধান করে দেব।",
    readArticle: "পুরো লেখা পড়ুন", topics: "বিষয়", allTopics: "সব বিষয়", inThisArticle: "এই লেখায় যা আছে", faqShort: "সচরাচর জিজ্ঞাসা", keepReading: "আরও পড়ুন",
    seoPanel: "এই লেখার SEO সেটিংস", seoKeyword: "ফোকাস কিওয়ার্ড", seoTitle: "মেটা টাইটেল", seoDesc: "মেটা ডেসক্রিপশন",
    vetReview: "স্বাস্থ্যবিষয়ক লেখা: প্রকাশের আগে একজন ভেটকে দিয়ে দেখিয়ে নিন।",
    medDisclaimer: "এই লেখা সাধারণ তথ্য, পশু চিকিৎসকের পরামর্শ নয়। প্রতিটা বিড়াল আলাদা, তাই আপনার বিড়ালের স্বাস্থ্য নিয়ে ভেটের সাথে কথা বলুন।",
    blogPageTitle: "পারভেলাস ব্লগ", blogPageSub: "বাংলাদেশের ঘরের জন্য কাজের বিড়াল-যত্ন। স্বাস্থ্য, খাবার, যাতায়াত আর রোজকার যত্ন।",
    backBlog: "সব লেখা", featuredIn: "এই লেখায় উল্লেখিত",
    searchTitle: "খোঁজার ফলাফল", searchNone: "কিছু পাওয়া যায়নি", searchNoneD: "অন্য কোনো শব্দে খুঁজুন, অথবা শপ ঘুরে দেখুন।",
    inCats: "ক্যাটাগরি", inProducts: "পণ্য", inPosts: "ব্লগ পোস্ট",
    policies: "নীতিমালা", shipping: "ডেলিভারি", returns: "রিটার্ন", privacy: "গোপনীয়তা", termsT: "শর্তাবলী",
    policyNote: "টেমপ্লেট নীতিমালা। লঞ্চের আগে দেখে নিন ও প্রয়োজনমতো বদলান।",
    fAbout: "যত্ন করে বাছাই করা পোষা প্রাণীর জিনিস, সারা বাংলাদেশে ডেলিভারি। বিড়াল দিয়ে শুরু, সব পোষা প্রাণীর জন্য বড় হচ্ছি।",
    fShop: "শপ", fHelp: "সাহায্য", fContact: "যোগাযোগ", fRights: "সর্বস্বত্ব সংরক্ষিত।", fPay: "পেমেন্ট",
    nfTitle: "এই পেজটা হারিয়ে গেছে", nfSub: "গোসলের সময় বিড়ালের মতো। চলুন কাজের কোথাও ফিরে যাই।", goHome: "হোমপেজে যান",
    pixel: "Pixel"
  }
};

/* ---------- Pets and categories ----------
   status: "live" shows products, "soon" shows the Coming Soon state.
   Add a new pet or category here and it appears everywhere. */
const PETS = [
  { id: "cats", status: "live", name: { en: "Cats", bn: "বিড়াল" } },
  { id: "dogs", status: "soon", name: { en: "Dogs", bn: "কুকুর" } }
];

const CATEGORIES = [
  { id: "bags", pet: "cats", status: "live", icon: "bag",
    name: { en: "Bags and Carriers", bn: "ব্যাগ ও ক্যারিয়ার" },
    desc: { en: "Carry your cat to the vet, home or anywhere in between, safely and comfortably.", bn: "ভেট, বাসা বা যেকোনো জায়গায় বিড়ালকে নিরাপদে ও আরামে নিয়ে যান।" } },
  { id: "food", pet: "cats", status: "soon", icon: "food",
    name: { en: "Food and Treats", bn: "খাবার ও ট্রিট" },
    desc: { en: "Dry food, wet food and treats from brands we trust.", bn: "ভরসাযোগ্য ব্র্যান্ডের ড্রাই ফুড, ওয়েট ফুড ও ট্রিট।" } },
  { id: "litter", pet: "cats", status: "soon", icon: "litter",
    name: { en: "Litter and Hygiene", bn: "লিটার ও পরিচ্ছন্নতা" },
    desc: { en: "Clumping litter, litter boxes and scoops for a fresher home.", bn: "ক্লাম্পিং লিটার, লিটার বক্স ও স্কুপ, ঘর থাকবে পরিষ্কার।" } },
  { id: "toys", pet: "cats", status: "soon", icon: "toy",
    name: { en: "Toys", bn: "খেলনা" },
    desc: { en: "Wands, balls and puzzle toys to keep indoor cats busy.", bn: "ঘরের বিড়ালকে ব্যস্ত রাখতে ওয়ান্ড, বল ও পাজল খেলনা।" } },
  { id: "grooming", pet: "cats", status: "soon", icon: "brush",
    name: { en: "Grooming", bn: "গ্রুমিং" },
    desc: { en: "Brushes, nail clippers and gentle shampoos.", bn: "ব্রাশ, নেইল ক্লিপার ও কোমল শ্যাম্পু।" } },
  { id: "beds", pet: "cats", status: "soon", icon: "bed",
    name: { en: "Beds and Scratchers", bn: "বেড ও স্ক্র্যাচার" },
    desc: { en: "Cosy beds and scratch posts that save your sofa.", bn: "আরামদায়ক বেড আর সোফা বাঁচানো স্ক্র্যাচ পোস্ট।" } },
  { id: "bowls", pet: "cats", status: "soon", icon: "bowl",
    name: { en: "Bowls and Feeders", bn: "বাটি ও ফিডার" },
    desc: { en: "Raised bowls, water fountains and slow feeders.", bn: "উঁচু বাটি, পানির ফাউন্টেন ও স্লো ফিডার।" } },
  { id: "dog-food", pet: "dogs", status: "soon", icon: "food",
    name: { en: "Dog Food", bn: "কুকুরের খাবার" }, desc: { en: "Coming soon.", bn: "শীঘ্রই আসছে।" } },
  { id: "dog-walk", pet: "dogs", status: "soon", icon: "leash",
    name: { en: "Leashes and Collars", bn: "লিশ ও কলার" }, desc: { en: "Coming soon.", bn: "শীঘ্রই আসছে।" } },
  { id: "dog-toys", pet: "dogs", status: "soon", icon: "toy",
    name: { en: "Dog Toys", bn: "কুকুরের খেলনা" }, desc: { en: "Coming soon.", bn: "শীঘ্রই আসছে।" } },
  { id: "dog-beds", pet: "dogs", status: "soon", icon: "bed",
    name: { en: "Dog Beds", bn: "কুকুরের বেড" }, desc: { en: "Coming soon.", bn: "শীঘ্রই আসছে।" } }
];

/* ---------- Products ----------
   "s: true" on a spec marks it as sample data to replace. */
const PRODUCTS = [
  {
    id: "hands-free-cat-bag", cat: "bags", pet: "cats", price: 2000, stock: true,
    name: { en: "Hands Free Lightweight Cat Bag", bn: "হ্যান্ডস ফ্রি লাইটওয়েট ক্যাট ব্যাগ" },
    short: {
      en: "Wear your cat like a backpack and keep both hands free. Breathable mesh, padded straps and only 480g empty.",
      bn: "বিড়ালকে ব্যাকপ্যাকের মতো পিঠে নিন, দুই হাত থাকুক ফ্রি। বাতাস চলাচলের মেশ, নরম প্যাডেড স্ট্র্যাপ, খালি ওজন মাত্র ৪৮০ গ্রাম।"
    },
    features: [
      { t: { en: "Truly hands free", bn: "সত্যিই হ্যান্ডস ফ্রি" }, d: { en: "Padded shoulder straps and a chest buckle share the weight, so you can hold a phone, an umbrella or a rickshaw rail.", bn: "প্যাডেড স্ট্র্যাপ আর চেস্ট বাকল ওজন ভাগ করে নেয়, তাই হাতে ফোন, ছাতা বা রিকশার হাতল ধরতে পারবেন।" } },
      { t: { en: "Breathes in Dhaka heat", bn: "গরমেও বাতাস চলে" }, d: { en: "Mesh panels on three sides keep air moving and let your cat see out.", bn: "তিন দিকের মেশ প্যানেলে বাতাস চলে, আর বিড়ালও বাইরে দেখতে পায়।" } },
      { t: { en: "Built-in safety clip", bn: "ভেতরে সেফটি ক্লিপ" }, d: { en: "An inner leash clip attaches to your cat's harness, so no surprise escapes when you open it.", bn: "ভেতরের লিশ ক্লিপ বিড়ালের হারনেসে আটকে থাকে, খুললেও হঠাৎ লাফিয়ে পালাতে পারবে না।" } },
      { t: { en: "Only 480g", bn: "মাত্র ৪৮০ গ্রাম" }, d: { en: "Light enough that the only weight you notice is your cat.", bn: "এত হালকা যে শুধু বিড়ালের ওজনটাই টের পাবেন।" } }
    ],
    specs: [
      { k: { en: "Colour", bn: "রং" }, v: { en: "Grey", bn: "ধূসর" } },
      { k: { en: "Empty weight", bn: "খালি ওজন" }, v: { en: "480 g", bn: "৪৮০ গ্রাম" } },
      { k: { en: "Size", bn: "মাপ" }, v: { en: "32 × 25 × 42 cm", bn: "৩২ × ২৫ × ৪২ সেমি" }, s: true },
      { k: { en: "Fits cats up to", bn: "বিড়ালের সর্বোচ্চ ওজন" }, v: { en: "7 kg", bn: "৭ কেজি" }, s: true },
      { k: { en: "Material", bn: "ম্যাটেরিয়াল" }, v: { en: "Water resistant Oxford fabric with breathable mesh", bn: "পানি-প্রতিরোধী অক্সফোর্ড ফ্যাব্রিক ও শ্বাস-প্রশ্বাসযোগ্য মেশ" }, s: true },
      { k: { en: "Ventilation", bn: "বাতাস চলাচল" }, v: { en: "Mesh on 3 sides", bn: "৩ দিকে মেশ" }, s: true },
      { k: { en: "Closure", bn: "বন্ধ করার ব্যবস্থা" }, v: { en: "Lockable double zips", bn: "লক করা যায় এমন ডাবল জিপার" }, s: true },
      { k: { en: "Inside", bn: "ভেতরে" }, v: { en: "Removable soft pad, safety leash clip", bn: "খোলা যায় এমন নরম প্যাড, সেফটি লিশ ক্লিপ" }, s: true },
      { k: { en: "Care", bn: "যত্ন" }, v: { en: "Wipe clean, hand wash the pad", bn: "মুছে পরিষ্কার করুন, প্যাড হাতে ধুয়ে নিন" }, s: true }
    ],
    desc: {
      en: [
        "Getting a cat to the vet in Dhaka usually means juggling a hard plastic box, an umbrella and a rickshaw at the same time. This bag fixes that. Your cat rides on your back, your hands stay free and the trip feels calmer for both of you.",
        "The frame holds its shape so your cat has room to sit, turn and lie down. Mesh windows on three sides let air through on humid days and let your cat watch the world go by, which helps nervous cats settle.",
        "Inside, a soft removable pad and a safety clip keep things secure. Clip it to your cat's harness before you open the zip and there is no chance of a sudden dash out the door."
      ],
      bn: [
        "ঢাকায় বিড়ালকে ভেটের কাছে নেওয়া মানে একসাথে প্লাস্টিকের শক্ত বক্স, ছাতা আর রিকশা সামলানো। এই ব্যাগ সেই ঝামেলা মিটিয়ে দেয়। বিড়াল থাকবে আপনার পিঠে, হাত থাকবে ফ্রি, আর যাত্রাটা দুজনের জন্যই হবে শান্ত।",
        "ব্যাগের কাঠামো নিজের আকার ধরে রাখে, তাই বিড়াল বসতে, ঘুরতে আর শুতে পারে। তিন দিকের মেশ জানালা দিয়ে আর্দ্র দিনেও বাতাস চলে, আর বিড়াল বাইরে দেখতে পায়। ভীতু বিড়ালও এতে সহজে শান্ত হয়।",
        "ভেতরে আছে খোলা যায় এমন নরম প্যাড আর সেফটি ক্লিপ। জিপার খোলার আগে ক্লিপটা বিড়ালের হারনেসে আটকে দিন, তাহলে হঠাৎ দরজা দিয়ে দৌড়ে পালানোর কোনো সুযোগ নেই।"
      ]
    },
    photos: [
      { en: "Hero: bag on a clean light background, front three-quarter angle, mesh window visible. Soft daylight, no harsh shadows.",
        bn: "মূল ছবি: হালকা রঙের পরিষ্কার ব্যাকগ্রাউন্ডে ব্যাগ, সামনে থেকে তিন-চতুর্থাংশ কোণে, মেশ জানালা দেখা যাবে। নরম দিনের আলো, কড়া ছায়া নয়।" },
      { en: "Worn: person wearing the bag on their back with a cat peeking through the mesh. Shot from behind and slightly to the side.",
        bn: "পরা অবস্থায়: একজন পিঠে ব্যাগ পরে আছেন, মেশ দিয়ে বিড়াল উঁকি দিচ্ছে। পেছন থেকে, একটু পাশ থেকে তোলা।" },
      { en: "Detail: close-up of padded straps and chest buckle. Show the stitching and texture.",
        bn: "ডিটেইল: প্যাডেড স্ট্র্যাপ ও চেস্ট বাকলের ক্লোজআপ। সেলাই আর টেক্সচার যেন বোঝা যায়।" },
      { en: "Inside: bag open from the top showing the soft pad and safety leash clip.",
        bn: "ভেতর: ওপর থেকে খোলা ব্যাগ, নরম প্যাড আর সেফটি লিশ ক্লিপ দেখা যাবে।" },
      { en: "Scale: cat sitting comfortably inside with the side flap open, so buyers can judge the size.",
        bn: "মাপ বোঝাতে: পাশের ঢাকনা খোলা, ভেতরে বিড়াল আরাম করে বসে আছে, যাতে ক্রেতা সাইজ বুঝতে পারেন।" }
    ]
  }
];

/* ---------- Sample reviews (homepage layout only, clearly labelled) ---------- */
const SAMPLE_REVIEWS = [
  { r: 5, who: "A. R.", city: { en: "Dhaka", bn: "ঢাকা" },
    t: { en: "Replace this with a real customer review. Keep it short and specific, like how the cat reacted on the first trip.", bn: "এখানে আসল ক্রেতার রিভিউ বসান। ছোট আর নির্দিষ্ট রাখুন, যেমন প্রথম যাত্রায় বিড়াল কেমন ছিল।" } },
  { r: 5, who: "S. K.", city: { en: "Chattogram", bn: "চট্টগ্রাম" },
    t: { en: "Replace this with a review that mentions delivery or packaging. Buyers outside Dhaka look for this.", bn: "এখানে ডেলিভারি বা প্যাকেজিং নিয়ে একটা রিভিউ বসান। ঢাকার বাইরের ক্রেতারা এটা খোঁজেন।" } },
  { r: 4, who: "N. H.", city: { en: "Sylhet", bn: "সিলেট" },
    t: { en: "Replace this with a review that mentions comfort, heat or size. Honest 4 star reviews build trust too.", bn: "এখানে আরাম, গরম বা সাইজ নিয়ে একটা রিভিউ বসান। সৎ ৪ স্টার রিভিউও আস্থা তৈরি করে।" } }
];

/* Blog posts live in blog.js */

/* ---------- FAQ ---------- */
const FAQ = [
  { g: { en: "Orders", bn: "অর্ডার" }, id: "orders", q: [
    { q: { en: "How do I place an order?", bn: "কীভাবে অর্ডার করব?" }, a: { en: "Add the product to your cart, go to checkout, fill in your name, phone and address, then tap Place order. We will call to confirm before shipping.", bn: "পণ্যটি কার্টে যোগ করুন, চেকআউটে যান, নাম, মোবাইল আর ঠিকানা দিন, তারপর 'অর্ডার করুন' চাপুন। পাঠানোর আগে আমরা ফোন করে কনফার্ম করব।" } },
    { q: { en: "Can I order on WhatsApp instead?", bn: "হোয়াটসঅ্যাপে কি অর্ডার করা যায়?" }, a: { en: "Yes. Tap Order on WhatsApp on any product page, or message us at +880 1708 546964 with the product name and your address.", bn: "হ্যাঁ। যেকোনো পণ্যের পেজে 'হোয়াটসঅ্যাপে অর্ডার করুন' চাপুন, অথবা +880 1708 546964 নম্বরে পণ্যের নাম আর ঠিকানা লিখে মেসেজ দিন।" } },
    { q: { en: "Do I need an account to order?", bn: "অর্ডার করতে কি অ্যাকাউন্ট লাগবে?" }, a: { en: "No. An account just lets you track orders, save your address and keep a wishlist.", bn: "না। অ্যাকাউন্ট থাকলে অর্ডার ট্র্যাক করা, ঠিকানা সেভ রাখা আর উইশলিস্ট রাখা সহজ হয়, এইটুকুই।" } }
  ]},
  { g: { en: "Delivery", bn: "ডেলিভারি" }, id: "delivery", q: [
    { q: { en: "How much is delivery?", bn: "ডেলিভারি চার্জ কত?" }, a: { en: "৳70 inside Dhaka and ৳100 anywhere else in Bangladesh.", bn: "ঢাকার ভেতরে ৳৭০, বাংলাদেশের অন্য যেকোনো জায়গায় ৳১০০।" } },
    { q: { en: "How long does delivery take?", bn: "ডেলিভারিতে কত দিন লাগে?" }, a: { en: "Usually 1 to 2 days inside Dhaka and 2 to 4 days outside Dhaka after we confirm your order.", bn: "অর্ডার কনফার্ম হওয়ার পর সাধারণত ঢাকায় ১ থেকে ২ দিন, ঢাকার বাইরে ২ থেকে ৪ দিন।" }, s: true },
    { q: { en: "Do you deliver everywhere in Bangladesh?", bn: "সারা বাংলাদেশে কি ডেলিভারি দেন?" }, a: { en: "Yes, to all 64 districts through our courier partner.", bn: "হ্যাঁ, কুরিয়ার পার্টনারের মাধ্যমে ৬৪ জেলাতেই।" } }
  ]},
  { g: { en: "Payment", bn: "পেমেন্ট" }, id: "payment", q: [
    { q: { en: "How can I pay?", bn: "কীভাবে টাকা দেব?" }, a: { en: "Right now we take cash on delivery only. You pay the rider when the parcel arrives. bKash, Nagad and cards are coming soon.", bn: "এখন শুধু ক্যাশ অন ডেলিভারি। পার্সেল হাতে পেয়ে রাইডারকে টাকা দেবেন। বিকাশ, নগদ ও কার্ড শীঘ্রই আসছে।" } },
    { q: { en: "Can I check the product before paying?", bn: "টাকা দেওয়ার আগে কি পণ্য দেখে নিতে পারব?" }, a: { en: "Yes. You can open the parcel in front of the rider and check the item before you pay.", bn: "হ্যাঁ। রাইডারের সামনে পার্সেল খুলে পণ্য দেখে তারপর টাকা দিতে পারবেন।" }, s: true }
  ]},
  { g: { en: "Returns", bn: "রিটার্ন" }, id: "returns", q: [
    { q: { en: "What is your return policy?", bn: "রিটার্ন নীতি কী?" }, a: { en: "You can return unused items in their original packaging within 7 days of delivery. Message us on WhatsApp to start a return.", bn: "ডেলিভারির ৭ দিনের মধ্যে অব্যবহৃত পণ্য মূল প্যাকেজিংসহ ফেরত দিতে পারবেন। রিটার্ন শুরু করতে হোয়াটসঅ্যাপে মেসেজ দিন।" }, s: true },
    { q: { en: "What if my item arrives damaged?", bn: "পণ্য যদি নষ্ট অবস্থায় আসে?" }, a: { en: "Take a photo and message us within 48 hours. We will replace it at no cost to you.", bn: "ছবি তুলে ৪৮ ঘণ্টার মধ্যে আমাদের মেসেজ দিন। কোনো খরচ ছাড়াই বদলে দেব।" }, s: true }
  ]},
  { g: { en: "Products", bn: "পণ্য" }, id: "products", q: [
    { q: { en: "Will the bag fit my cat?", bn: "ব্যাগটা কি আমার বিড়ালের হবে?" }, a: { en: "It fits most adult cats up to 7 kg. If your cat is long or heavy, send us a photo on WhatsApp and we will tell you honestly.", bn: "৭ কেজি পর্যন্ত বেশিরভাগ প্রাপ্তবয়স্ক বিড়ালের জন্য ঠিক আছে। আপনার বিড়াল লম্বা বা ভারী হলে হোয়াটসঅ্যাপে ছবি পাঠান, আমরা সৎভাবে জানাব।" }, s: true },
    { q: { en: "Is it safe in hot weather?", bn: "গরমে কি নিরাপদ?" }, a: { en: "Mesh on three sides keeps air moving. On very hot days, travel in the morning or evening and never leave your cat in a parked vehicle.", bn: "তিন দিকের মেশে বাতাস চলে। খুব গরমের দিনে সকাল বা সন্ধ্যায় চলাফেরা করুন, আর পার্ক করা গাড়িতে বিড়ালকে কখনো রেখে যাবেন না।" } },
    { q: { en: "When will food, litter and toys arrive?", bn: "খাবার, লিটার আর খেলনা কবে আসবে?" }, a: { en: "We are testing products now. Tap Notify me on any Coming Soon category and we will email you the day it opens.", bn: "এখন পণ্য পরীক্ষা করছি। যেকোনো 'শীঘ্রই আসছে' ক্যাটাগরিতে 'আমাকে জানাবেন' চাপুন, চালু হওয়ার দিনই ইমেইল করব।" } }
  ]}
];

/* ---------- About ---------- */
const ABOUT = {
  title: { en: "We started with one cat and one bad carrier", bn: "শুরুটা একটা বিড়াল আর একটা বাজে ক্যারিয়ার দিয়ে" },
  lede: { en: "Purrvelous began the way a lot of good ideas do: with a small problem we could not stop thinking about.", bn: "পারভেলাসের শুরু অনেক ভালো আইডিয়ার মতোই: একটা ছোট সমস্যা, যেটা মাথা থেকে যাচ্ছিল না।" },
  body: {
    en: [
      "Every vet visit meant a hard plastic box, a sweating cat, an umbrella in one hand and a rickshaw that would not wait. We went looking for something better and found very little made for life in Bangladesh.",
      "So we started importing and testing products ourselves. Our first is a hands free carrier bag that lets you wear your cat on your back. It is the bag we wished we had.",
      "Purrvelous is growing into a full pet store. Food, litter, toys and grooming are next, followed by a range for dogs. The rule stays the same: if it does not work with our own pets at home, we do not sell it."
    ],
    bn: [
      "প্রতিবার ভেটে যাওয়া মানে ছিল প্লাস্টিকের শক্ত বক্স, ঘেমে যাওয়া বিড়াল, এক হাতে ছাতা আর একটা রিকশা যেটা অপেক্ষা করতে চায় না। ভালো কিছু খুঁজতে গিয়ে দেখলাম, বাংলাদেশের জীবনের কথা ভেবে বানানো জিনিস প্রায় নেই।",
      "তাই নিজেরাই পণ্য আমদানি করে পরীক্ষা করা শুরু করলাম। আমাদের প্রথম পণ্য একটা হ্যান্ডস ফ্রি ক্যারিয়ার ব্যাগ, যেটা দিয়ে বিড়ালকে পিঠে নেওয়া যায়। এই ব্যাগটাই আমরা চেয়েছিলাম।",
      "পারভেলাস এখন পুরো একটা পেট স্টোর হয়ে উঠছে। এরপর আসছে খাবার, লিটার, খেলনা আর গ্রুমিং, তারপর কুকুরের কালেকশন। নিয়ম একটাই: নিজেদের পোষা প্রাণীর সাথে ঘরে কাজ না করলে আমরা সেটা বিক্রি করি না।"
    ]
  },
  photo: { en: "Founder at home with their cat, candid and relaxed, natural window light. Warm, not posed.", bn: "নিজের বিড়ালের সাথে ঘরে প্রতিষ্ঠাতা, স্বাভাবিক ও আরামদায়ক মুহূর্ত, জানালার আলো। উষ্ণ, পোজ দেওয়া নয়।" },
  values: [
    { icon: "home", t: { en: "Tested at home", bn: "ঘরে পরীক্ষিত" }, d: { en: "Nothing goes on sale until it has lived with our own pets.", bn: "নিজেদের পোষা প্রাণীর সাথে ব্যবহার না করে কিছুই বিক্রি করি না।" } },
    { icon: "chat", t: { en: "Straight answers", bn: "সোজা উত্তর" }, d: { en: "If a product is wrong for your pet, we will tell you, even if it costs us the sale.", bn: "কোনো পণ্য আপনার পোষা প্রাণীর জন্য ঠিক না হলে বলে দেব, বিক্রি হারালেও।" } },
    { icon: "paw", t: { en: "Built to grow", bn: "বড় হওয়ার জন্য তৈরি" }, d: { en: "Cats first, then dogs and beyond. One store for every pet you love.", bn: "প্রথমে বিড়াল, তারপর কুকুর ও আরও। আপনার সব প্রিয় পোষা প্রাণীর জন্য একটাই স্টোর।" } }
  ],
  quote: { en: "Because they deserve better. That is not a slogan for us. It is the test every product has to pass.", bn: "কারণ ওরা আরও ভালো কিছুর যোগ্য। আমাদের কাছে এটা শুধু স্লোগান নয়। প্রতিটা পণ্যকে এই পরীক্ষায় পাস করতে হয়।" }
};

/* ---------- Policies (templates) ---------- */
const POLICIES = {
  shipping: { t: { en: "Shipping policy", bn: "ডেলিভারি নীতি" }, body: {
    en: [["h","Delivery charges"],["ul",["Inside Dhaka: ৳70","Outside Dhaka: ৳100"]],["h","Delivery time"],["p","After we confirm your order by phone or WhatsApp, delivery usually takes 1 to 2 days inside Dhaka and 2 to 4 days outside Dhaka. Public holidays and weather can add a day or two."],["h","Coverage"],["p","We deliver to all 64 districts through our courier partner."],["h","Order confirmation"],["p","We call or message every customer before shipping. If we cannot reach you after two attempts, we may cancel the order."]],
    bn: [["h","ডেলিভারি চার্জ"],["ul",["ঢাকার ভেতরে: ৳৭০","ঢাকার বাইরে: ৳১০০"]],["h","ডেলিভারির সময়"],["p","ফোন বা হোয়াটসঅ্যাপে অর্ডার কনফার্ম হওয়ার পর সাধারণত ঢাকায় ১ থেকে ২ দিন, ঢাকার বাইরে ২ থেকে ৪ দিন লাগে। সরকারি ছুটি বা আবহাওয়ার কারণে এক-দুই দিন বেশি লাগতে পারে।"],["h","কোথায় দিই"],["p","কুরিয়ার পার্টনারের মাধ্যমে ৬৪ জেলাতেই ডেলিভারি দিই।"],["h","অর্ডার কনফার্মেশন"],["p","পাঠানোর আগে প্রত্যেক ক্রেতাকে ফোন বা মেসেজ করি। দুবার চেষ্টা করেও যোগাযোগ না হলে অর্ডার বাতিল হতে পারে।"]] } },
  returns: { t: { en: "Return and refund policy", bn: "রিটার্ন ও রিফান্ড নীতি" }, body: {
    en: [["h","7 day returns"],["p","You can return unused items in their original packaging within 7 days of delivery."],["h","Damaged or wrong items"],["p","Send a photo on WhatsApp within 48 hours of delivery. We will replace the item or refund you in full, including delivery."],["h","How refunds work"],["p","Once we receive and check the returned item, we refund through bKash or Nagad within 5 working days."],["h","What we cannot accept"],["ul",["Items that have been used or washed","Items without original packaging","Food and litter once opened"]]],
    bn: [["h","৭ দিনের রিটার্ন"],["p","ডেলিভারির ৭ দিনের মধ্যে অব্যবহৃত পণ্য মূল প্যাকেজিংসহ ফেরত দিতে পারবেন।"],["h","নষ্ট বা ভুল পণ্য"],["p","ডেলিভারির ৪৮ ঘণ্টার মধ্যে হোয়াটসঅ্যাপে ছবি পাঠান। পণ্য বদলে দেব অথবা ডেলিভারি চার্জসহ পুরো টাকা ফেরত দেব।"],["h","রিফান্ড যেভাবে হয়"],["p","ফেরত পণ্য হাতে পেয়ে যাচাই করার পর ৫ কর্মদিবসের মধ্যে বিকাশ বা নগদে টাকা ফেরত দিই।"],["h","যা ফেরত নিতে পারি না"],["ul",["ব্যবহৃত বা ধোয়া পণ্য","মূল প্যাকেজিং ছাড়া পণ্য","খোলা খাবার ও লিটার"]]] } },
  privacy: { t: { en: "Privacy policy", bn: "গোপনীয়তা নীতি" }, body: {
    en: [["h","What we collect"],["p","Your name, phone number, email if you give it, delivery address and order history."],["h","Why we collect it"],["p","To deliver your orders, contact you about them and, if you agree, tell you about new products."],["h","Cookies and ads"],["p","We use cookies and the Meta Pixel to understand which pages are useful and to show relevant ads. You can block cookies in your browser settings."],["h","Sharing"],["p","We share your name, phone and address with our courier only to deliver your order. We never sell your information."],["h","Your choices"],["p","Email or message us any time to see, change or delete your information."]],
    bn: [["h","যে তথ্য নিই"],["p","আপনার নাম, মোবাইল নম্বর, ইমেইল (দিলে), ডেলিভারির ঠিকানা আর অর্ডারের ইতিহাস।"],["h","কেন নিই"],["p","অর্ডার পৌঁছে দিতে, অর্ডার নিয়ে যোগাযোগ করতে, আর আপনি রাজি থাকলে নতুন পণ্যের খবর দিতে।"],["h","কুকি ও বিজ্ঞাপন"],["p","কোন পেজ কাজে লাগছে বুঝতে আর প্রাসঙ্গিক বিজ্ঞাপন দেখাতে আমরা কুকি ও মেটা পিক্সেল ব্যবহার করি। ব্রাউজার সেটিংস থেকে কুকি বন্ধ করতে পারেন।"],["h","তথ্য শেয়ার"],["p","শুধু অর্ডার পৌঁছাতে কুরিয়ারকে নাম, মোবাইল ও ঠিকানা দিই। আপনার তথ্য কখনো বিক্রি করি না।"],["h","আপনার অধিকার"],["p","যেকোনো সময় ইমেইল বা মেসেজ করে নিজের তথ্য দেখতে, বদলাতে বা মুছে ফেলতে পারবেন।"]] } },
  terms: { t: { en: "Terms of service", bn: "সেবার শর্তাবলী" }, body: {
    en: [["h","Orders"],["p","An order is confirmed only after we call or message you. We may cancel an order if a product is out of stock or details cannot be verified."],["h","Prices"],["p","All prices are in Bangladeshi Taka and include VAT where applicable. Delivery is charged separately at checkout."],["h","Product information"],["p","We describe products as accurately as we can. Colours may look slightly different on your screen."],["h","Contact"],["p","Questions about these terms? Email purrvelous@gmail.com or message +880 1708 546964 on WhatsApp."]],
    bn: [["h","অর্ডার"],["p","আমরা ফোন বা মেসেজ করে কনফার্ম করার পরেই অর্ডার নিশ্চিত হয়। পণ্য স্টকে না থাকলে বা তথ্য যাচাই করা না গেলে অর্ডার বাতিল হতে পারে।"],["h","দাম"],["p","সব দাম বাংলাদেশি টাকায় এবং প্রযোজ্য ক্ষেত্রে ভ্যাটসহ। ডেলিভারি চার্জ চেকআউটে আলাদা যোগ হয়।"],["h","পণ্যের তথ্য"],["p","পণ্যের বিবরণ যতটা সম্ভব সঠিক দিই। স্ক্রিনে রং সামান্য ভিন্ন দেখাতে পারে।"],["h","যোগাযোগ"],["p","শর্তাবলী নিয়ে প্রশ্ন? purrvelous@gmail.com এ ইমেইল করুন বা +880 1708 546964 নম্বরে হোয়াটসঅ্যাপ করুন।"]] } }
};
