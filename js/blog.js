/* ============================================================
   BLOG POSTS
   Block types: ["p", text] ["h", h2] ["h3", h3] ["ul", [items]]
   ["ol", [items]] ["tip", text] ["table", {head:[], rows:[[]]}]
   Inline: **bold** and [link text](#/path)
   medical: true shows a "have a vet review this" note in notes mode.
   ============================================================ */
const POSTS = [];

/* ---------- 1. Carrier training ---------- */
POSTS.push({
  id: "carrier-training", date: "2026-10-15", product: "hands-free-cat-bag",
  tag: { en: "Travel", bn: "যাতায়াত" },
  keyword: { en: "cat carrier training", bn: "বিড়ালকে ক্যারিয়ারে অভ্যস্ত করা" },
  title: { en: "How to Train Your Cat to Love the Carrier: A 7 Day Plan", bn: "বিড়ালকে ক্যারিয়ারে অভ্যস্ত করার ৭ দিনের সহজ পরিকল্পনা" },
  metaTitle: { en: "Cat Carrier Training: A Simple 7 Day Plan | Purrvelous", bn: "বিড়ালকে ক্যারিয়ারে অভ্যস্ত করার ৭ দিনের প্ল্যান | Purrvelous" },
  metaDesc: { en: "Does your cat hide when the carrier comes out? Follow this simple 7 day plan to make carrier time calm, with tips for vet visits and travel in Bangladesh.", bn: "ক্যারিয়ার দেখলেই বিড়াল লুকিয়ে পড়ে? এই ৭ দিনের সহজ পরিকল্পনায় ক্যারিয়ারকে বানান বিড়ালের নিরাপদ জায়গা। ভেটে যাওয়া ও যাতায়াতের টিপসসহ।" },
  ex: { en: "Does your cat hide when the carrier comes out? This 7 day plan turns the carrier from a threat into a safe spot.", bn: "ক্যারিয়ার বের করলেই কি বিড়াল লুকায়? এই ৭ দিনের পরিকল্পনায় ক্যারিয়ার হয়ে উঠবে ভয়ের বদলে নিরাপদ জায়গা।" },
  photo: { en: "Cat stepping into an open carrier on a living room floor, shot at the cat's eye level, warm indoor light.", bn: "বসার ঘরের মেঝেতে খোলা ক্যারিয়ারে ঢুকছে বিড়াল, বিড়ালের চোখের লেভেল থেকে তোলা, ঘরের উষ্ণ আলো।" },
  body: {
    en: [
      ["p", "If your cat vanishes under the bed the second the carrier comes out, you are not dealing with a stubborn cat. You are dealing with a smart one. Cats link objects to what happens next. When the carrier only appears before a needle at the vet, it quickly becomes the scariest thing in the house."],
      ["p", "The good news is that carrier fear is learned, so it can be unlearned. Most cats get comfortable in about a week if you go slowly and keep every step pleasant. This guide walks you through a simple day by day plan that works with any carrier, including soft backpack style bags."],
      ["h", "Why cats are afraid of carriers"],
      ["ul", [
        "**It predicts bad things.** Vet visits, car rides and strange smells all start with the carrier.",
        "**It smells wrong.** A carrier stored in a dusty storeroom smells nothing like home.",
        "**Being pushed in.** Being grabbed and squeezed through a small door feels like being trapped.",
        "**Noise and motion.** Rickshaw bumps, horns and engine sounds are a lot for an animal with sensitive hearing."
      ]],
      ["p", "Every step below takes away one of these triggers."],
      ["h", "Before you start: pick the right carrier"],
      ["p", "Your cat should be able to stand up, turn around and lie down inside. Look for ventilation on more than one side, a top or side opening so you can lower your cat in instead of pushing and a way to secure your cat inside, like an inner leash clip. For city travel, a bag you can wear keeps both hands free for an umbrella, shopping or a rickshaw rail, like our [Hands Free Lightweight Cat Bag](#/p/hands-free-cat-bag)."],
      ["h", "Day 1 to 2: make the carrier part of the furniture"],
      ["p", "Take the carrier out of storage and leave it open in a room where your cat already relaxes. Put something that smells like home inside: a T-shirt you have worn or the blanket your cat sleeps on."],
      ["ul", ["Leave the door or zip fully open", "Do not try to put your cat in", "Act like it is no big deal"]],
      ["p", "Your only goal for these two days is for the carrier to stop being a warning sign."],
      ["h", "Day 3 to 4: fill it with good things"],
      ["p", "Drop a few treats or pieces of kibble inside once or twice a day. If your cat has a favourite toy, leave it inside too. You can also serve one meal a day next to the carrier, then just inside the opening, then fully inside."],
      ["p", "Many cats start napping in the carrier at this stage. That is exactly the sign you want."],
      ["h", "Day 5: close it for a few seconds"],
      ["p", "When your cat walks in for a treat, gently close the zip or door for 5 to 10 seconds. Open it, give another treat and let your cat leave whenever they want. Repeat a few times across the day and slowly build up to a full minute."],
      ["p", "If your cat panics, go back a step. Rushing is the most common reason carrier training fails."],
      ["h", "Day 6: lift and move"],
      ["p", "With your cat inside and calm, lift the carrier smoothly and walk around the room. Put it down, open it and reward. Hold it close to your body and keep it level. Swinging a carrier by its handle feels like an earthquake to the cat inside."],
      ["h", "Day 7: a short trip that ends well"],
      ["p", "Take a two to five minute walk outside, or sit in a parked car, then come straight home. Open the carrier in a quiet room and offer treats. The point is to teach your cat that not every trip ends at the vet."],
      ["h", "Tips for the day of a real vet visit"],
      ["ul", [
        "Leave the carrier out for at least a day before, so it is not a surprise.",
        "Clip the inner safety leash to your cat's harness before you open the carrier anywhere outside home.",
        "If your cat is nervous, cover part of the carrier with a light cloth but keep at least one mesh side open for air.",
        "Talk to your cat calmly. Your voice and smell are reassuring.",
        "Back home, open the carrier and let your cat come out on their own."
      ]],
      ["p", "Planning the vet trip itself? Our [cat vaccination schedule](#/blog/cat-vaccination-schedule-bangladesh) explains what happens at each visit."],
      ["h", "What if my cat still refuses?"],
      ["p", "Some cats, especially adult rescues, need two or three weeks instead of one. Go at their pace. If you have to travel before training is done, lower your cat into a top opening carrier back end first instead of pushing them head first through a front door. It is far less stressful."],
      ["p", "If your cat shows extreme fear, like hiding for hours, refusing food or lashing out, talk to your vet. Some cats need extra help to stay calm on vet trips."],
      ["tip", "If you have the space, leave the carrier out all the time. A carrier that is always there is just another bed."]
    ],
    bn: [
      ["p", "ক্যারিয়ার বের করার সাথে সাথেই যদি আপনার বিড়াল খাটের নিচে উধাও হয়ে যায়, তাহলে বুঝবেন আপনার বিড়াল জেদি নয়, বুদ্ধিমান। বিড়াল কোনো জিনিসকে তার পরে কী ঘটে তার সাথে মিলিয়ে মনে রাখে। ক্যারিয়ার যদি শুধু ভেটের ইনজেকশনের আগেই দেখা দেয়, খুব দ্রুত সেটাই হয়ে যায় ঘরের সবচেয়ে ভয়ের জিনিস।"],
      ["p", "সুখবর হলো, এই ভয় শেখা, তাই ভোলানোও যায়। ধীরে ধীরে এগোলে আর প্রতিটা ধাপ আনন্দের রাখলে বেশিরভাগ বিড়াল মোটামুটি এক সপ্তাহেই ক্যারিয়ারে স্বস্তি পায়। এই গাইডে দিন ধরে ধরে একটা সহজ পরিকল্পনা দেওয়া হলো, যেটা যেকোনো ক্যারিয়ারে কাজ করে, নরম ব্যাকপ্যাক ব্যাগেও।"],
      ["h", "বিড়াল কেন ক্যারিয়ার ভয় পায়"],
      ["ul", [
        "**খারাপ কিছুর সংকেত।** ভেটে যাওয়া, গাড়িতে চড়া, অচেনা গন্ধ, সবকিছুর শুরু হয় ক্যারিয়ার দিয়ে।",
        "**গন্ধ অচেনা।** স্টোররুমে ধুলায় পড়ে থাকা ক্যারিয়ারে ঘরের কোনো গন্ধ থাকে না।",
        "**জোর করে ঢোকানো।** ধরে চেপে ছোট দরজা দিয়ে ঢোকালে বিড়ালের মনে হয় সে আটকা পড়ছে।",
        "**শব্দ আর ঝাঁকুনি।** রিকশার ঝাঁকুনি, হর্ন আর ইঞ্জিনের শব্দ সংবেদনশীল কানের প্রাণীর জন্য অনেক বেশি।"
      ]],
      ["p", "নিচের প্রতিটা ধাপ এর কোনো একটা কারণ দূর করে।"],
      ["h", "শুরুর আগে: সঠিক ক্যারিয়ার বেছে নিন"],
      ["p", "ক্যারিয়ারের ভেতরে বিড়াল যেন দাঁড়াতে, ঘুরতে আর শুতে পারে। খেয়াল করুন একাধিক দিকে বাতাস চলাচলের ব্যবস্থা আছে কি না, ওপর বা পাশ থেকে খোলা যায় কি না যাতে ঠেলে না ঢুকিয়ে আস্তে নামিয়ে দিতে পারেন, আর ভেতরে লিশ ক্লিপের মতো নিরাপত্তার ব্যবস্থা আছে কি না। শহরে চলাফেরার জন্য পিঠে পরা যায় এমন ব্যাগ ছাতা, বাজারের ব্যাগ বা রিকশার হাতল ধরার জন্য দুই হাত ফ্রি রাখে, যেমন আমাদের [হ্যান্ডস ফ্রি লাইটওয়েট ক্যাট ব্যাগ](#/p/hands-free-cat-bag)।"],
      ["h", "দিন ১ থেকে ২: ক্যারিয়ারকে আসবাবের অংশ বানান"],
      ["p", "ক্যারিয়ার বের করে বিড়াল যে ঘরে আরাম করে সেখানে খোলা অবস্থায় রেখে দিন। ভেতরে ঘরের গন্ধওয়ালা কিছু দিন: আপনার পরা একটা টি-শার্ট বা বিড়াল যে কম্বলে ঘুমায় সেটা।"],
      ["ul", ["দরজা বা জিপ পুরো খোলা রাখুন", "বিড়ালকে ভেতরে ঢোকানোর চেষ্টা করবেন না", "এমন ভাব করুন যেন এটা কোনো ব্যাপারই না"]],
      ["p", "এই দুই দিনের একটাই লক্ষ্য: ক্যারিয়ার যেন আর বিপদের সংকেত না থাকে।"],
      ["h", "দিন ৩ থেকে ৪: ভেতরে ভালো কিছু রাখুন"],
      ["p", "দিনে এক-দুবার ভেতরে কয়েকটা ট্রিট বা কয়েক দানা খাবার রাখুন। বিড়ালের প্রিয় কোনো খেলনা থাকলে সেটাও রেখে দিন। চাইলে দিনের একবেলার খাবার প্রথমে ক্যারিয়ারের পাশে, তারপর মুখের কাছে, শেষে পুরো ভেতরে দিতে পারেন।"],
      ["p", "এই সময়ে অনেক বিড়াল ক্যারিয়ারের ভেতরে ঘুমাতে শুরু করে। ঠিক এই লক্ষণটাই আপনি চান।"],
      ["h", "দিন ৫: কয়েক সেকেন্ডের জন্য বন্ধ করুন"],
      ["p", "ট্রিটের জন্য বিড়াল ভেতরে ঢুকলে আস্তে করে ৫ থেকে ১০ সেকেন্ডের জন্য জিপ বা দরজা বন্ধ করুন। তারপর খুলে আরেকটা ট্রিট দিন, আর বিড়াল যখন খুশি বের হয়ে যাক। দিনে কয়েকবার এভাবে করুন, ধীরে ধীরে সময়টা এক মিনিটে নিয়ে যান।"],
      ["p", "বিড়াল ভয় পেলে এক ধাপ পিছিয়ে যান। তাড়াহুড়াই ক্যারিয়ার ট্রেনিং ব্যর্থ হওয়ার সবচেয়ে বড় কারণ।"],
      ["h", "দিন ৬: তুলুন আর হাঁটুন"],
      ["p", "বিড়াল ভেতরে শান্ত থাকলে ক্যারিয়ারটা আস্তে করে তুলুন আর ঘরের ভেতর একটু হাঁটুন। নামিয়ে খুলে দিন, ট্রিট দিন। ক্যারিয়ার শরীরের কাছে আর সমান করে ধরুন। হাতলে ধরে দোলালে ভেতরের বিড়ালের মনে হয় ভূমিকম্প হচ্ছে।"],
      ["h", "দিন ৭: ছোট একটা যাত্রা, শেষটা আনন্দের"],
      ["p", "বাইরে দুই থেকে পাঁচ মিনিট হেঁটে আসুন, অথবা পার্ক করা গাড়িতে একটু বসে সোজা বাসায় ফিরুন। শান্ত একটা ঘরে ক্যারিয়ার খুলে ট্রিট দিন। উদ্দেশ্য হলো বিড়ালকে শেখানো যে প্রতিটা যাত্রা ভেটে গিয়ে শেষ হয় না।"],
      ["h", "আসল ভেট ভিজিটের দিনের টিপস"],
      ["ul", [
        "অন্তত এক দিন আগে ক্যারিয়ার বের করে রাখুন, যাতে হঠাৎ চমকে না যায়।",
        "বাসার বাইরে কোথাও ক্যারিয়ার খোলার আগে ভেতরের সেফটি লিশ বিড়ালের হারনেসে আটকে নিন।",
        "বিড়াল ভয় পেলে ক্যারিয়ারের কিছু অংশ হালকা কাপড়ে ঢেকে দিন, তবে বাতাসের জন্য অন্তত একটা মেশের দিক খোলা রাখুন।",
        "শান্ত গলায় বিড়ালের সাথে কথা বলুন। আপনার গলা আর গন্ধ ওকে ভরসা দেয়।",
        "বাসায় ফিরে ক্যারিয়ার খুলে দিন, বিড়াল নিজে থেকে বের হোক।"
      ]],
      ["p", "ভেটে যাওয়ার পরিকল্পনা করছেন? প্রতিটা ভিজিটে কী হয় জানতে পড়ুন আমাদের [বিড়ালের টিকার সময়সূচি](#/blog/cat-vaccination-schedule-bangladesh)।"],
      ["h", "এরপরও যদি বিড়াল রাজি না হয়?"],
      ["p", "কিছু বিড়ালের, বিশেষ করে বড় বয়সে উদ্ধার করা বিড়ালের, এক সপ্তাহের বদলে দুই-তিন সপ্তাহ লাগে। ওদের গতিতেই এগোন। ট্রেনিং শেষ হওয়ার আগেই যেতে হলে সামনের দরজা দিয়ে মাথা আগে ঠেলে না ঢুকিয়ে, ওপর থেকে খোলা ক্যারিয়ারে পেছনের দিক আগে দিয়ে আস্তে নামিয়ে দিন। এতে চাপ অনেক কম হয়।"],
      ["p", "বিড়াল যদি খুব বেশি ভয় দেখায়, যেমন ঘণ্টার পর ঘণ্টা লুকিয়ে থাকা, খাওয়া বন্ধ করা বা আঁচড়ে দেওয়া, তাহলে ভেটের সাথে কথা বলুন। কিছু বিড়ালের ভেটে যাওয়ার সময় শান্ত থাকতে বাড়তি সাহায্য লাগে।"],
      ["tip", "জায়গা থাকলে ক্যারিয়ারটা সবসময় বের করে রাখুন। যে ক্যারিয়ার সবসময় থাকে, সেটা বিড়ালের কাছে আরেকটা বিছানা ছাড়া কিছু না।"]
    ]
  },
  faq: [
    { q: { en: "How long does it take to carrier train a cat?", bn: "বিড়ালকে ক্যারিয়ারে অভ্যস্ত করতে কত দিন লাগে?" }, a: { en: "Most cats get comfortable within one to two weeks of short daily practice. Older or very nervous cats may need longer.", bn: "প্রতিদিন অল্প অল্প অনুশীলন করলে বেশিরভাগ বিড়াল এক থেকে দুই সপ্তাহে অভ্যস্ত হয়ে যায়। বয়স্ক বা খুব ভীতু বিড়ালের আরও বেশি সময় লাগতে পারে।" } },
    { q: { en: "Should I put food inside the carrier?", bn: "ক্যারিয়ারের ভেতরে কি খাবার দেওয়া উচিত?" }, a: { en: "Yes. Treats and small meals inside the carrier are one of the fastest ways to build a good association. Skip a big meal right before a trip if your cat gets travel sick.", bn: "হ্যাঁ। ভেতরে ট্রিট বা অল্প খাবার দেওয়া ভালো সম্পর্ক তৈরির সবচেয়ে দ্রুত উপায়। তবে যাত্রায় বমি হলে বের হওয়ার ঠিক আগে পেট ভরে খাওয়াবেন না।" } },
    { q: { en: "Is a backpack carrier safe for cats?", bn: "ব্যাকপ্যাক ক্যারিয়ার কি বিড়ালের জন্য নিরাপদ?" }, a: { en: "Yes, if it has good ventilation, enough room for your cat to turn around and an inner leash clip. Check the zips are secure before every trip.", bn: "হ্যাঁ, যদি বাতাস চলাচলের ভালো ব্যবস্থা থাকে, বিড়াল ঘুরতে পারার মতো জায়গা থাকে আর ভেতরে লিশ ক্লিপ থাকে। প্রতিবার বের হওয়ার আগে জিপার ঠিকমতো লাগছে কি না দেখে নিন।" } }
  ]
});

/* ---------- 2. Vaccination schedule ---------- */
POSTS.push({
  id: "cat-vaccination-schedule-bangladesh", date: "2026-10-10", product: "hands-free-cat-bag", medical: true,
  tag: { en: "Health", bn: "স্বাস্থ্য" },
  keyword: { en: "cat vaccine schedule Bangladesh", bn: "বিড়ালের টিকা" },
  title: { en: "Cat Vaccination Schedule in Bangladesh: A Simple Guide for Cat Parents", bn: "বিড়ালের টিকার সময়সূচি: বাংলাদেশের বিড়ালপ্রেমীদের জন্য সহজ গাইড" },
  metaTitle: { en: "Cat Vaccine Schedule in Bangladesh | Purrvelous", bn: "বিড়ালের টিকার সময়সূচি: সম্পূর্ণ গাইড | Purrvelous" },
  metaDesc: { en: "Which vaccines does your cat need and when? A clear kitten and adult cat vaccination and deworming schedule for Bangladesh, plus what to ask your vet.", bn: "আপনার বিড়ালের কোন টিকা লাগবে, কখন লাগবে? বাংলাদেশের জন্য বাচ্চা ও প্রাপ্তবয়স্ক বিড়ালের টিকা ও কৃমিনাশকের সহজ সময়সূচি, সাথে ভেটকে কী জিজ্ঞেস করবেন।" },
  ex: { en: "The core vaccines every cat needs, a kitten and adult schedule you can follow and how deworming fits in.", bn: "প্রতিটা বিড়ালের যে টিকাগুলো লাগে, বাচ্চা ও বড় বিড়ালের সময়সূচি, আর কৃমিনাশক কখন দেবেন।" },
  photo: { en: "Vet gently examining a calm cat on a clinic table, owner's hand on the cat. Bright, clean light. Avoid showing needles.", bn: "ক্লিনিকের টেবিলে শান্ত একটা বিড়ালকে ভেট আলতো করে দেখছেন, মালিকের হাত বিড়ালের গায়ে। উজ্জ্বল পরিষ্কার আলো। সুঁই দেখাবেন না।" },
  body: {
    en: [
      ["p", "Vaccines are the simplest way to protect your cat from diseases that are common, spread easily and can kill. In Bangladesh, rabies is still present and many cats meet strays through windows, rooftops or balconies, so keeping up with vaccines matters even for indoor cats."],
      ["p", "This guide explains the core vaccines, a typical schedule for kittens and adult cats and how deworming fits in. Your vet will adjust it for your cat's age, health and lifestyle, so use it as a starting point for that conversation."],
      ["h", "The core vaccines every cat should get"],
      ["p", "Vets split vaccines into core vaccines, recommended for every cat, and non-core vaccines, given depending on risk. The core vaccines are:"],
      ["ul", [
        "**FVRCP, often called the 3 in 1 or tricat vaccine.** It protects against feline viral rhinotracheitis and calicivirus, two common causes of cat flu, and panleukopenia, also called feline distemper. Panleukopenia spreads easily and is often fatal in kittens.",
        "**Rabies.** Rabies is always fatal once symptoms start and it can pass to people. Because it is present in Bangladesh, rabies vaccination is strongly recommended for every cat, including indoor cats."
      ]],
      ["p", "Your vet may also talk about non-core vaccines such as feline leukaemia (FeLV), especially for cats that go outdoors or live with several other cats."],
      ["h", "Kitten vaccination schedule"],
      ["p", "Kittens get some protection from their mother's milk, but it fades over the first few months. That is why kittens need a series of shots, not just one. A typical schedule looks like this:"],
      ["table", { head: ["Age", "Vaccine", "Notes"], rows: [
        ["6 to 8 weeks", "FVRCP, 1st dose", "Usually with a first health check and deworming"],
        ["10 to 12 weeks", "FVRCP, 2nd dose", "Keep doses about 3 to 4 weeks apart"],
        ["14 to 16 weeks", "FVRCP, 3rd dose + Rabies", "Many vets give rabies from 12 weeks"],
        ["About 1 year", "FVRCP + Rabies boosters", "Completes the first year of protection"],
        ["Adult", "Boosters every 1 to 3 years", "Your vet sets the interval for each vaccine"]
      ] }],
      ["p", "Exact timing differs between vets and vaccine brands. What matters most is finishing the full series. A kitten that only gets one dose may not be protected at all."],
      ["h", "Adult cat vaccination schedule"],
      ["p", "After the first year boosters, adult cats need regular boosters. Depending on the vaccine and your cat's risk, your vet may recommend some every year and others every three years. Rabies boosters are often given every year, or as the vaccine label says."],
      ["p", "Adopted an adult cat with no vaccine history? Don't worry. Your vet will usually give two doses of FVRCP three to four weeks apart, plus rabies, and then move your cat onto the adult schedule."],
      ["h", "Deworming: the other half of prevention"],
      ["p", "Worms are very common in kittens and in cats that hunt, eat raw food or meet other animals. A common deworming plan looks like this, though your vet may suggest something different:"],
      ["ul", [
        "**Kittens:** every 2 weeks from about 2 to 3 weeks old until 8 weeks, then monthly until 6 months",
        "**Adult cats:** every 3 months",
        "**Newly adopted cats:** before or soon after meeting your other pets"
      ]],
      ["p", "Ask your vet about flea prevention too. Fleas can spread tapeworm, so the two go hand in hand."],
      ["h", "Before and after the vaccine"],
      ["ul", [
        "Only vaccinate when your cat is healthy. Tell your vet about any sneezing, diarrhoea or poor appetite.",
        "Bring your cat's vaccination card to every visit. If you don't have one, ask the vet to start one.",
        "Mild tiredness, a small lump at the injection site or a slight fever for a day or two is common.",
        "Go back to the vet straight away if you see facial swelling, repeated vomiting, trouble breathing or collapse.",
        "Keep your cat calm and indoors for the rest of the day."
      ]],
      ["p", "Getting your cat to the clinic is half the battle. Our [carrier training plan](#/blog/carrier-training) makes vet days much easier."],
      ["h", "Questions to ask your vet"],
      ["ul", [
        "Which vaccines does my cat need based on how they live?",
        "When is the next dose due?",
        "Which vaccine did you use and how long does it last?",
        "How often should I deworm and with which product?",
        "When is the right time to spay or neuter?"
      ]],
      ["tip", "Set a phone reminder for every booster and deworming date before you leave the clinic. Missed boosters are the most common gap in a cat's protection."]
    ],
    bn: [
      ["p", "সাধারণ, সহজে ছড়ায় আর প্রাণঘাতী হতে পারে এমন রোগ থেকে বিড়ালকে বাঁচানোর সবচেয়ে সহজ উপায় হলো টিকা। বাংলাদেশে এখনো জলাতঙ্ক আছে, আর অনেক বিড়ালের জানালা, ছাদ বা বারান্দায় রাস্তার বিড়ালের সাথে দেখা হয়। তাই ঘরের বিড়ালের জন্যও নিয়মিত টিকা জরুরি।"],
      ["p", "এই গাইডে মূল টিকাগুলো কী, বাচ্চা ও বড় বিড়ালের সাধারণ সময়সূচি কেমন আর কৃমিনাশক কখন দেবেন, সেটা বোঝানো হলো। আপনার বিড়ালের বয়স, স্বাস্থ্য আর জীবনযাপন অনুযায়ী ভেট এটা ঠিক করে দেবেন, তাই এটাকে ভেটের সাথে আলোচনার শুরু হিসেবে ধরুন।"],
      ["h", "প্রতিটা বিড়ালের যে মূল টিকাগুলো লাগে"],
      ["p", "ভেটরা টিকাকে দুই ভাগে ভাগ করেন: মূল টিকা, যা প্রতিটা বিড়ালের জন্য সুপারিশ করা হয়, আর ঐচ্ছিক টিকা, যা ঝুঁকি অনুযায়ী দেওয়া হয়। মূল টিকাগুলো হলো:"],
      ["ul", [
        "**FVRCP, যাকে অনেকে ৩-ইন-১ বা ট্রাইক্যাট টিকা বলেন।** এটা ফেলাইন ভাইরাল রাইনোট্রাকিয়াইটিস ও ক্যালিসিভাইরাস থেকে রক্ষা করে, যা বিড়ালের সর্দি-জ্বরের সাধারণ কারণ। আর রক্ষা করে প্যানলিউকোপেনিয়া বা ফেলাইন ডিস্টেম্পার থেকে, যা সহজে ছড়ায় এবং বাচ্চা বিড়ালের জন্য প্রায়ই প্রাণঘাতী।",
        "**জলাতঙ্ক (র‍্যাবিস)।** লক্ষণ দেখা দিলে জলাতঙ্ক সবসময় প্রাণঘাতী, আর এটা মানুষের মধ্যেও ছড়াতে পারে। বাংলাদেশে জলাতঙ্ক থাকায় ঘরের বিড়ালসহ প্রতিটা বিড়ালকে এই টিকা দেওয়ার জোর পরামর্শ দেওয়া হয়।"
      ]],
      ["p", "বিশেষ করে যে বিড়াল বাইরে যায় বা অনেক বিড়ালের সাথে থাকে, তার জন্য ভেট ফেলাইন লিউকেমিয়া (FeLV)-এর মতো ঐচ্ছিক টিকার কথাও বলতে পারেন।"],
      ["h", "বাচ্চা বিড়ালের টিকার সময়সূচি"],
      ["p", "মায়ের দুধ থেকে বাচ্চা বিড়াল কিছুটা সুরক্ষা পায়, কিন্তু প্রথম কয়েক মাসে তা কমে যায়। তাই একটা নয়, কয়েকটা ডোজের একটা সিরিজ লাগে। সাধারণ সময়সূচি এমন:"],
      ["table", { head: ["বয়স", "টিকা", "মন্তব্য"], rows: [
        ["৬ থেকে ৮ সপ্তাহ", "FVRCP, ১ম ডোজ", "সাধারণত প্রথম স্বাস্থ্য পরীক্ষা ও কৃমিনাশকের সাথে"],
        ["১০ থেকে ১২ সপ্তাহ", "FVRCP, ২য় ডোজ", "ডোজগুলোর মাঝে ৩ থেকে ৪ সপ্তাহ বিরতি"],
        ["১৪ থেকে ১৬ সপ্তাহ", "FVRCP, ৩য় ডোজ + জলাতঙ্ক", "অনেক ভেট ১২ সপ্তাহ থেকেই জলাতঙ্কের টিকা দেন"],
        ["প্রায় ১ বছর", "FVRCP + জলাতঙ্ক বুস্টার", "প্রথম বছরের সুরক্ষা সম্পূর্ণ হয়"],
        ["প্রাপ্তবয়স্ক", "প্রতি ১ থেকে ৩ বছরে বুস্টার", "প্রতিটা টিকার বিরতি ভেট ঠিক করবেন"]
      ] }],
      ["p", "ভেট ও টিকার ব্র্যান্ডভেদে সময় একটু আলাদা হয়। সবচেয়ে জরুরি হলো পুরো সিরিজ শেষ করা। একটা মাত্র ডোজ পাওয়া বাচ্চা বিড়াল হয়তো একেবারেই সুরক্ষিত নয়।"],
      ["h", "প্রাপ্তবয়স্ক বিড়ালের টিকার সময়সূচি"],
      ["p", "প্রথম বছরের বুস্টারের পর বড় বিড়ালের নিয়মিত বুস্টার লাগে। টিকা আর বিড়ালের ঝুঁকি অনুযায়ী ভেট কোনোটা প্রতি বছর, কোনোটা তিন বছর পরপর দিতে বলতে পারেন। জলাতঙ্কের বুস্টার সাধারণত প্রতি বছর বা টিকার লেবেলে যেমন লেখা থাকে তেমন দেওয়া হয়।"],
      ["p", "টিকার কোনো রেকর্ড ছাড়া বড় বিড়াল দত্তক নিয়েছেন? চিন্তা নেই। ভেট সাধারণত ৩ থেকে ৪ সপ্তাহ পরপর দুই ডোজ FVRCP আর জলাতঙ্কের টিকা দিয়ে তারপর বড় বিড়ালের সময়সূচিতে নিয়ে যান।"],
      ["h", "কৃমিনাশক: সুরক্ষার বাকি অর্ধেক"],
      ["p", "বাচ্চা বিড়াল আর যে বিড়াল শিকার করে, কাঁচা খাবার খায় বা অন্য প্রাণীর সংস্পর্শে আসে, তাদের কৃমি খুব সাধারণ। একটা প্রচলিত কৃমিনাশক পরিকল্পনা এমন, তবে ভেট ভিন্ন কিছু বলতে পারেন:"],
      ["ul", [
        "**বাচ্চা বিড়াল:** ২ থেকে ৩ সপ্তাহ বয়স থেকে ৮ সপ্তাহ পর্যন্ত প্রতি ২ সপ্তাহে, তারপর ৬ মাস পর্যন্ত প্রতি মাসে",
        "**প্রাপ্তবয়স্ক বিড়াল:** প্রতি ৩ মাসে",
        "**নতুন দত্তক নেওয়া বিড়াল:** অন্য পোষা প্রাণীর সাথে মেশার আগে বা পরপরই"
      ]],
      ["p", "ভেটকে মাছি বা ফ্লি প্রতিরোধের কথাও জিজ্ঞেস করুন। ফ্লি থেকে ফিতাকৃমি ছড়াতে পারে, তাই দুটো একসাথে চলে।"],
      ["h", "টিকার আগে ও পরে"],
      ["ul", [
        "বিড়াল সুস্থ থাকলেই শুধু টিকা দিন। হাঁচি, ডায়রিয়া বা খাওয়ায় অরুচি থাকলে ভেটকে জানান।",
        "প্রতিবার বিড়ালের টিকার কার্ড সাথে নিন। কার্ড না থাকলে ভেটকে নতুন একটা করে দিতে বলুন।",
        "হালকা ক্লান্তি, ইনজেকশনের জায়গায় ছোট্ট ফোলা বা এক-দুই দিন হালকা জ্বর সাধারণ ব্যাপার।",
        "মুখ ফুলে গেলে, বারবার বমি হলে, শ্বাস নিতে কষ্ট হলে বা নেতিয়ে পড়লে সাথে সাথে ভেটের কাছে ফিরে যান।",
        "দিনের বাকি সময় বিড়ালকে শান্ত আর ঘরের ভেতরে রাখুন।"
      ]],
      ["p", "বিড়ালকে ক্লিনিকে নেওয়াটাই অর্ধেক যুদ্ধ। আমাদের [ক্যারিয়ার ট্রেনিং পরিকল্পনা](#/blog/carrier-training) ভেটে যাওয়ার দিনগুলো অনেক সহজ করে দেয়।"],
      ["h", "ভেটকে যে প্রশ্নগুলো করবেন"],
      ["ul", [
        "আমার বিড়ালের জীবনযাপন অনুযায়ী কোন কোন টিকা লাগবে?",
        "পরের ডোজ কবে?",
        "কোন টিকা দিলেন আর এর সুরক্ষা কত দিন থাকে?",
        "কত দিন পরপর কোন কৃমিনাশক দেব?",
        "স্পে বা নিউটার করানোর সঠিক সময় কখন?"
      ]],
      ["tip", "ক্লিনিক থেকে বের হওয়ার আগেই প্রতিটা বুস্টার আর কৃমিনাশকের তারিখ ফোনে রিমাইন্ডার দিয়ে রাখুন। বুস্টার মিস হওয়াই বিড়ালের সুরক্ষায় সবচেয়ে সাধারণ ফাঁক।"]
    ]
  },
  faq: [
    { q: { en: "Do indoor cats need vaccines?", bn: "ঘরের বিড়ালের কি টিকা লাগে?" }, a: { en: "Yes. Viruses like panleukopenia can come in on shoes and clothes, and indoor cats can slip out or meet strays at windows and on rooftops. Rabies vaccination is especially important in Bangladesh.", bn: "হ্যাঁ। প্যানলিউকোপেনিয়ার মতো ভাইরাস জুতা ও কাপড়ে করে ঘরে ঢুকতে পারে, আর ঘরের বিড়ালও বের হয়ে যেতে পারে বা জানালা ও ছাদে রাস্তার বিড়ালের সংস্পর্শে আসতে পারে। বাংলাদেশে জলাতঙ্কের টিকা বিশেষভাবে জরুরি।" } },
    { q: { en: "Can I vaccinate my cat at home?", bn: "বাসায় কি বিড়ালকে টিকা দেওয়া যায়?" }, a: { en: "It is safer at a vet clinic. The vet checks your cat is healthy enough, stores the vaccine correctly and records it on your cat's card.", bn: "ভেট ক্লিনিকে দেওয়াই নিরাপদ। ভেট দেখে নেন বিড়াল টিকার জন্য যথেষ্ট সুস্থ কি না, টিকা সঠিকভাবে সংরক্ষণ করেন আর বিড়ালের কার্ডে লিখে রাখেন।" } },
    { q: { en: "What happens if I miss a booster?", bn: "বুস্টার মিস হলে কী হবে?" }, a: { en: "Talk to your vet. Usually they will give the booster as soon as possible, but after a long gap they may restart part of the series.", bn: "ভেটের সাথে কথা বলুন। সাধারণত যত দ্রুত সম্ভব বুস্টার দিয়ে দেন, তবে অনেক দিনের ফাঁক হলে সিরিজের কিছু অংশ আবার শুরু করতে পারেন।" } }
  ]
});

/* ---------- 3. New kitten checklist ---------- */
POSTS.push({
  id: "new-kitten-checklist", date: "2026-10-05", product: "hands-free-cat-bag",
  tag: { en: "Care", bn: "যত্ন" },
  keyword: { en: "new kitten checklist", bn: "নতুন বিড়ালছানার যত্ন" },
  title: { en: "New Kitten Checklist: Everything You Need Before Bringing Your Kitten Home", bn: "নতুন বিড়ালছানা আনার আগে যা যা লাগবে: সম্পূর্ণ চেকলিস্ট" },
  metaTitle: { en: "New Kitten Checklist: What to Buy and Do | Purrvelous", bn: "নতুন বিড়ালছানার চেকলিস্ট: কী কিনবেন, কী করবেন | Purrvelous" },
  metaDesc: { en: "Bringing home a kitten? The complete checklist of supplies, home safety steps and first week tips, written for cat parents in Bangladesh.", bn: "বিড়ালছানা আনছেন? দরকারি জিনিস, ঘর নিরাপদ করার উপায় আর প্রথম সপ্তাহের টিপস নিয়ে বাংলাদেশের বিড়ালপ্রেমীদের জন্য সম্পূর্ণ চেকলিস্ট।" },
  ex: { en: "Supplies to buy, hazards to fix and how to get through the first week with a new kitten.", bn: "কী কিনবেন, ঘরের কোন বিপদ সরাবেন আর নতুন ছানার প্রথম সপ্তাহ কীভাবে সামলাবেন।" },
  photo: { en: "Small kitten sitting next to a neat set of essentials on the floor: bowls, litter box, bed, toy and carrier. Top-down or low angle, soft daylight.", bn: "মেঝেতে সাজানো দরকারি জিনিসের পাশে ছোট্ট একটা বিড়ালছানা: বাটি, লিটার বক্স, বিছানা, খেলনা আর ক্যারিয়ার। ওপর থেকে বা নিচু কোণে, নরম দিনের আলো।" },
  body: {
    en: [
      ["p", "Bringing home a kitten is exciting, and the first few days shape how your kitten feels about its new home for years. A little preparation means your kitten settles faster and you avoid late night runs to the pet shop."],
      ["p", "Here is everything you need, what to fix around the house before your kitten arrives and how to get through the first week."],
      ["h", "The essentials checklist"],
      ["h3", "Food and water"],
      ["ul", [
        "Kitten food, ideally the same food the shelter, breeder or previous home used",
        "A shallow food bowl and a separate water bowl",
        "Fresh water available all the time, placed away from the litter box"
      ]],
      ["h3", "Litter"],
      ["ul", [
        "A litter box with low sides your kitten can climb into easily",
        "Unscented clumping litter",
        "A litter scoop",
        "One box per cat plus one extra if you have more than one cat"
      ]],
      ["h3", "Sleep and comfort"],
      ["ul", [
        "A soft bed, or a cardboard box lined with an old towel",
        "A scratching post or pad, ideally one upright and one flat"
      ]],
      ["h3", "Play"],
      ["ul", [
        "A wand toy for play together",
        "A few small balls or crinkle toys",
        "Never use string, thread, rubber bands or hair ties as toys. Kittens can swallow them."
      ]],
      ["h3", "Health and travel"],
      ["ul", [
        "A secure carrier for vet visits. Our [Hands Free Lightweight Cat Bag](#/p/hands-free-cat-bag) has an inner safety clip",
        "A soft brush",
        "Small nail clippers made for cats",
        "A folder or phone note for vaccine and deworming records"
      ]],
      ["h", "Kitten-proof your home"],
      ["p", "Kittens explore with their mouths and can squeeze into tiny gaps. Before your kitten arrives, get down to their eye level and look for hazards:"],
      ["ul", [
        "**Windows and balconies.** Fit a net or grill mesh. Falls from upper floors are a common emergency in apartment buildings.",
        "**Wires and chargers.** Tuck them away or cover them.",
        "**Lilies.** Every part of a lily, even the pollen, is extremely toxic to cats. Remove them completely.",
        "**Medicines.** Paracetamol and many other human medicines are poisonous to cats. Keep them in closed cabinets.",
        "**Small objects.** Needles with thread, rubber bands and hair ties get swallowed more often than you would think.",
        "**Washing machines, cupboards and drawers.** Check inside before you close them."
      ]],
      ["p", "For a full list of risky foods, read [what cats can and cannot eat](#/blog/foods-toxic-to-cats)."],
      ["h", "The first day home"],
      ["p", "Start your kitten in one quiet room with food, water, a litter box and a bed. A whole flat is overwhelming at first."],
      ["ul", [
        "Bring your kitten home in a carrier, not in your arms.",
        "Open the carrier in the room and let your kitten come out when ready.",
        "Show your kitten the litter box by placing them in it gently after meals and naps.",
        "Keep visitors and other pets away for the first day or two."
      ]],
      ["h", "The first week"],
      ["ul", [
        "**Book a vet visit** within the first week for a health check, vaccines and deworming. Our [cat vaccination schedule](#/blog/cat-vaccination-schedule-bangladesh) shows what to expect.",
        "**Keep the food the same** for the first week. If you want to change it, switch slowly over 7 to 10 days. Sudden changes upset kitten stomachs.",
        "**Feed little and often.** Kittens usually eat three to four small meals a day until about six months old.",
        "**Play every day.** Two or three short play sessions help your kitten burn energy and bond with you.",
        "**Handle gently.** Touch paws, ears and mouth briefly each day so grooming and vet checks are easier later.",
        "**Introduce other pets slowly,** starting by swapping bedding so they learn each other's smell first."
      ]],
      ["h", "When to call the vet"],
      ["p", "Kittens can get sick quickly. Contact a vet the same day if your kitten:"],
      ["ul", [
        "Refuses food for most of a day",
        "Has diarrhoea or vomits more than once",
        "Seems weak, cold or unusually sleepy",
        "Has trouble breathing, runny eyes or lots of sneezing",
        "Strains in the litter box without passing anything"
      ]],
      ["tip", "Write down your kitten's weight at every vet visit. Steady weight gain is one of the best signs that a kitten is healthy."]
    ],
    bn: [
      ["p", "বাসায় বিড়ালছানা আনা মানে অনেক আনন্দ, আর প্রথম কয়েকটা দিনই ঠিক করে দেয় ছানাটা বছরের পর বছর নতুন ঘরকে কেমন অনুভব করবে। একটু প্রস্তুতি থাকলে ছানা দ্রুত মানিয়ে নেয়, আর আপনাকেও রাত-বিরেতে পেট শপে দৌড়াতে হয় না।"],
      ["p", "এখানে আছে কী কী লাগবে, ছানা আসার আগে ঘরের কী ঠিক করবেন আর প্রথম সপ্তাহটা কীভাবে পার করবেন।"],
      ["h", "দরকারি জিনিসের চেকলিস্ট"],
      ["h3", "খাবার ও পানি"],
      ["ul", [
        "বিড়ালছানার খাবার, সম্ভব হলে শেল্টার, ব্রিডার বা আগের বাসায় যে খাবার খেত সেটাই",
        "খাবারের জন্য একটা অগভীর বাটি আর পানির জন্য আলাদা বাটি",
        "সারাক্ষণ পরিষ্কার পানি, লিটার বক্স থেকে দূরে"
      ]],
      ["h3", "লিটার"],
      ["ul", [
        "নিচু কিনারার লিটার বক্স, যাতে ছানা সহজে ঢুকতে পারে",
        "গন্ধহীন ক্লাম্পিং লিটার",
        "লিটার স্কুপ",
        "একাধিক বিড়াল থাকলে প্রতি বিড়ালের জন্য একটা, সাথে একটা বাড়তি বক্স"
      ]],
      ["h3", "ঘুম ও আরাম"],
      ["ul", [
        "নরম বিছানা, অথবা পুরোনো তোয়ালে বিছানো একটা কার্ডবোর্ডের বাক্স",
        "স্ক্র্যাচিং পোস্ট বা প্যাড, সম্ভব হলে একটা খাড়া আর একটা মেঝেতে বিছানো"
      ]],
      ["h3", "খেলা"],
      ["ul", [
        "একসাথে খেলার জন্য একটা ওয়ান্ড খেলনা",
        "কয়েকটা ছোট বল বা খসখসে শব্দের খেলনা",
        "সুতা, রাবার ব্যান্ড বা চুলের ব্যান্ড কখনো খেলনা হিসেবে দেবেন না। ছানা গিলে ফেলতে পারে।"
      ]],
      ["h3", "স্বাস্থ্য ও যাতায়াত"],
      ["ul", [
        "ভেটে যাওয়ার জন্য নিরাপদ ক্যারিয়ার। আমাদের [হ্যান্ডস ফ্রি লাইটওয়েট ক্যাট ব্যাগে](#/p/hands-free-cat-bag) ভেতরে সেফটি ক্লিপ আছে",
        "নরম ব্রাশ",
        "বিড়ালের জন্য বানানো ছোট নেইল ক্লিপার",
        "টিকা ও কৃমিনাশকের রেকর্ডের জন্য একটা ফাইল বা ফোনে নোট"
      ]],
      ["h", "ঘরকে ছানার জন্য নিরাপদ করুন"],
      ["p", "বিড়ালছানা মুখ দিয়ে সবকিছু পরখ করে আর খুব ছোট ফাঁকেও ঢুকে যেতে পারে। ছানা আসার আগে ওর চোখের উচ্চতায় নেমে ঘর দেখুন আর বিপদগুলো খুঁজুন:"],
      ["ul", [
        "**জানালা ও বারান্দা।** নেট বা গ্রিলে মেশ লাগান। ফ্ল্যাট বাসায় ওপরতলা থেকে পড়ে যাওয়া খুব সাধারণ জরুরি অবস্থা।",
        "**তার ও চার্জার।** সরিয়ে রাখুন বা ঢেকে দিন।",
        "**লিলি ফুল।** লিলির প্রতিটা অংশ, এমনকি পরাগরেণুও বিড়ালের জন্য মারাত্মক বিষাক্ত। পুরোপুরি সরিয়ে ফেলুন।",
        "**ওষুধ।** প্যারাসিটামলসহ মানুষের অনেক ওষুধ বিড়ালের জন্য বিষ। বন্ধ আলমারিতে রাখুন।",
        "**ছোট জিনিস।** সুতাসহ সুঁই, রাবার ব্যান্ড আর চুলের ব্যান্ড যতটা ভাবেন তার চেয়ে বেশি গিলে ফেলে।",
        "**ওয়াশিং মেশিন, আলমারি ও ড্রয়ার।** বন্ধ করার আগে ভেতরে দেখে নিন।"
      ]],
      ["p", "ঝুঁকিপূর্ণ খাবারের পুরো তালিকা পাবেন [বিড়াল কী খেতে পারে আর কী পারে না](#/blog/foods-toxic-to-cats) লেখায়।"],
      ["h", "বাসায় প্রথম দিন"],
      ["p", "শুরুতে ছানাকে খাবার, পানি, লিটার বক্স আর বিছানাসহ একটা শান্ত ঘরে রাখুন। পুরো ফ্ল্যাট শুরুতে ওর জন্য অনেক বেশি।"],
      ["ul", [
        "ছানাকে কোলে নয়, ক্যারিয়ারে করে বাসায় আনুন।",
        "ঘরে এনে ক্যারিয়ার খুলে দিন, ছানা নিজের সময়মতো বের হোক।",
        "খাওয়া আর ঘুমের পর আলতো করে লিটার বক্সে বসিয়ে দিয়ে বক্সটা চিনিয়ে দিন।",
        "প্রথম এক-দুই দিন অতিথি আর অন্য পোষা প্রাণীদের দূরে রাখুন।"
      ]],
      ["h", "প্রথম সপ্তাহ"],
      ["ul", [
        "**ভেটের অ্যাপয়েন্টমেন্ট নিন** প্রথম সপ্তাহের মধ্যেই, স্বাস্থ্য পরীক্ষা, টিকা আর কৃমিনাশকের জন্য। কী হবে জানতে দেখুন আমাদের [বিড়ালের টিকার সময়সূচি](#/blog/cat-vaccination-schedule-bangladesh)।",
        "**প্রথম সপ্তাহ খাবার বদলাবেন না।** বদলাতে চাইলে ৭ থেকে ১০ দিন ধরে ধীরে ধীরে বদলান। হঠাৎ বদলালে ছানার পেট খারাপ হয়।",
        "**অল্প করে বারবার খাওয়ান।** প্রায় ছয় মাস বয়স পর্যন্ত ছানারা সাধারণত দিনে তিন থেকে চারবার অল্প অল্প খায়।",
        "**প্রতিদিন খেলুন।** দিনে দুই-তিনবার ছোট খেলার সময় ছানার শক্তি খরচ করায় আর আপনার সাথে বন্ধন গড়ে।",
        "**আলতো করে ধরুন।** প্রতিদিন অল্প সময় থাবা, কান আর মুখ ছুঁয়ে দিন, তাহলে পরে গ্রুমিং আর ভেট চেকআপ সহজ হবে।",
        "**অন্য পোষা প্রাণীর সাথে ধীরে পরিচয় করান,** প্রথমে বিছানা বদলাবদলি করে একে অপরের গন্ধ চেনান।"
      ]],
      ["h", "কখন ভেটকে ফোন করবেন"],
      ["p", "বিড়ালছানা খুব দ্রুত অসুস্থ হতে পারে। নিচের যেকোনোটা হলে সেদিনই ভেটের সাথে যোগাযোগ করুন:"],
      ["ul", [
        "দিনের বেশিরভাগ সময় কিছু খাচ্ছে না",
        "একাধিকবার ডায়রিয়া বা বমি",
        "দুর্বল, শরীর ঠান্ডা বা অস্বাভাবিক ঘুমকাতুরে",
        "শ্বাস নিতে কষ্ট, চোখ দিয়ে পানি পড়া বা খুব বেশি হাঁচি",
        "লিটার বক্সে চাপ দিচ্ছে কিন্তু কিছু হচ্ছে না"
      ]],
      ["tip", "প্রতিবার ভেটের কাছে গেলে ছানার ওজন লিখে রাখুন। নিয়মিত ওজন বাড়া সুস্থ ছানার সবচেয়ে ভালো লক্ষণগুলোর একটা।"]
    ]
  },
  faq: [
    { q: { en: "What age can a kitten leave its mother?", bn: "কত বয়সে বিড়ালছানা মায়ের কাছ থেকে আলাদা করা যায়?" }, a: { en: "Ideally around 8 to 12 weeks. Kittens learn important social and litter habits from their mother and littermates.", bn: "আদর্শভাবে ৮ থেকে ১২ সপ্তাহ বয়সে। মা আর ভাইবোনদের কাছ থেকে ছানা সামাজিক আচরণ আর লিটার ব্যবহারের মতো জরুরি অভ্যাস শেখে।" } },
    { q: { en: "Can kittens drink cow's milk?", bn: "বিড়ালছানাকে কি গরুর দুধ দেওয়া যায়?" }, a: { en: "It is best not to. Many cats cannot digest lactose well and milk can cause diarrhoea. Fresh water and proper kitten food are all they need.", bn: "না দেওয়াই ভালো। অনেক বিড়াল দুধের ল্যাকটোজ ঠিকমতো হজম করতে পারে না, ফলে ডায়রিয়া হতে পারে। পরিষ্কার পানি আর সঠিক বিড়ালছানার খাবারই যথেষ্ট।" } },
    { q: { en: "How often should a kitten eat?", bn: "বিড়ালছানাকে দিনে কতবার খাওয়াতে হয়?" }, a: { en: "Most kittens eat three to four small meals a day until about six months old, then move to two meals a day.", bn: "প্রায় ছয় মাস বয়স পর্যন্ত বেশিরভাগ ছানা দিনে তিন থেকে চারবার অল্প অল্প খায়, তারপর দিনে দুইবেলায় চলে আসে।" } }
  ]
});

/* ---------- 4. Travel in Dhaka ---------- */
POSTS.push({
  id: "travel-with-cat-dhaka", date: "2026-09-28", product: "hands-free-cat-bag",
  tag: { en: "Travel", bn: "যাতায়াত" },
  keyword: { en: "travel with cat Dhaka", bn: "বিড়াল নিয়ে যাতায়াত" },
  title: { en: "Travelling With Your Cat in Dhaka: Rickshaw, CNG and Car Tips", bn: "ঢাকায় বিড়াল নিয়ে যাতায়াত: রিকশা, সিএনজি ও গাড়িতে নিরাপদ থাকার টিপস" },
  metaTitle: { en: "Travelling With a Cat in Dhaka: Safety Tips | Purrvelous", bn: "ঢাকায় বিড়াল নিয়ে যাতায়াতের টিপস | Purrvelous" },
  metaDesc: { en: "Practical tips for travelling with your cat in Dhaka traffic: choosing a carrier, staying safe on rickshaws and CNGs, handling heat and keeping cats calm.", bn: "ঢাকার যানজটে বিড়াল নিয়ে চলাফেরার কাজের টিপস: ক্যারিয়ার বাছাই, রিকশা ও সিএনজিতে নিরাপত্তা, গরম সামলানো আর বিড়ালকে শান্ত রাখা।" },
  ex: { en: "Horns, potholes and heat. How to keep your cat safe and settled on every kind of Dhaka ride.", bn: "হর্ন, খানাখন্দ আর গরম। ঢাকার যেকোনো বাহনে বিড়ালকে নিরাপদ ও শান্ত রাখার উপায়।" },
  photo: { en: "Owner sitting in a rickshaw with the grey bag on their lap, cat visible through the mesh. Natural street light, background slightly blurred.", bn: "রিকশায় বসা মালিকের কোলে ধূসর ব্যাগ, মেশ দিয়ে বিড়াল দেখা যাচ্ছে। রাস্তার স্বাভাবিক আলো, পেছনটা হালকা ঝাপসা।" },
  body: {
    en: [
      ["p", "Horns, potholes, heat and sudden braking. Dhaka traffic is stressful for people and far more stressful for a cat with sharp hearing and no idea what is going on. Whether you are heading to the vet, moving house or visiting family, a little planning makes the trip calmer and much safer."],
      ["h", "Choose the right carrier for city travel"],
      ["p", "Never carry a cat in your arms or in an open basket on the road. One loud horn is enough for a cat to leap out and run into traffic. Use a secure carrier with:"],
      ["ul", [
        "Ventilation on at least two sides",
        "Enough room for your cat to turn around",
        "A closure your cat cannot push open",
        "An inner leash clip so you can open it safely",
        "A shape or straps that are easy to hold steady in a moving vehicle"
      ]],
      ["p", "A wearable bag like our [Hands Free Lightweight Cat Bag](#/p/hands-free-cat-bag) keeps your hands free to hold on in a rickshaw or carry an umbrella in the rain."],
      ["h", "Before you leave home"],
      ["ul", [
        "Practise with the carrier for a few days first. Our [carrier training plan](#/blog/carrier-training) shows how.",
        "Put a harness on your cat and clip it to the inner leash before you leave.",
        "If your cat gets motion sick, skip a big meal 2 to 3 hours before travel, but always offer water.",
        "Line the carrier with a towel or pee pad in case of accidents.",
        "Pack a small bag: spare towel, wipes, a few treats, the vaccination card and your vet's number.",
        "Make sure your cat wears an ID tag, or ask your vet about microchipping."
      ]],
      ["h", "On a rickshaw"],
      ["ul", [
        "Hold the carrier on your lap or wear it on your back. Never put it on the footboard.",
        "Keep a firm hold over bumps and sharp turns.",
        "Pull the hood up for shade on sunny days.",
        "Keep the zips closed until you are inside a building."
      ]],
      ["h", "In a CNG or taxi"],
      ["ul", [
        "Keep the carrier on your lap or on the seat beside you, held steady with one hand. The floor is hotter, dirtier and much louder.",
        "CNGs heat up fast when stuck in traffic. Travel in the early morning or evening when you can.",
        "Keep a mesh side facing open air, not pressed against your body or the side of the vehicle."
      ]],
      ["h", "In a private car"],
      ["ul", [
        "Put the carrier on the back seat and secure it with a seatbelt, or wedge it on the floor behind the front seat.",
        "Never let your cat loose in the car. A cat under the brake pedal is a real danger.",
        "Run the air conditioning before you bring your cat in.",
        "**Never leave your cat in a parked car,** not even for a few minutes. Car interiors heat up very fast in the sun."
      ]],
      ["h", "Keeping your cat calm on the way"],
      ["ul", [
        "Drape a light cloth over part of the carrier to reduce what your cat sees, while leaving at least one side open for air.",
        "Speak softly. Your voice is familiar and reassuring.",
        "Don't open the carrier mid-journey to comfort your cat.",
        "Expect some meowing. It usually settles once the ride is steady."
      ]],
      ["h", "Watch for heat stress"],
      ["p", "Heat is the biggest risk for cats travelling in Bangladesh. If you see open mouth breathing, panting, drooling, bright red gums or weakness, stop somewhere shaded and cool your cat down. Our guide to [heatstroke in cats](#/blog/cat-heatstroke-summer-care) explains exactly what to do."],
      ["h", "Longer trips between cities"],
      ["ul", [
        "Plan a stop every few hours where you can check on your cat in a closed, quiet space.",
        "Offer water at each stop. Some cats will only drink once they feel settled.",
        "Bring a small disposable litter tray for journeys over six hours.",
        "Never open the carrier at a roadside stop or bus terminal."
      ]],
      ["h", "When you arrive"],
      ["p", "Take your cat to a quiet room, close the door and open the carrier. Let your cat come out in their own time. Offer water, and a small meal once they have settled."],
      ["tip", "Save your vet's number and the nearest 24 hour animal clinic in your phone before any long trip. You won't want to search for them in an emergency."]
    ],
    bn: [
      ["p", "হর্ন, খানাখন্দ, গরম আর হঠাৎ ব্রেক। ঢাকার যানজট মানুষের জন্যই চাপের, আর তীক্ষ্ণ শ্রবণশক্তির একটা বিড়াল, যে বুঝতেই পারছে না কী হচ্ছে, তার জন্য আরও অনেক বেশি। ভেটে যাওয়া, বাসা বদল বা আত্মীয়ের বাসায় বেড়ানো, যেটাই হোক, একটু পরিকল্পনা থাকলে যাত্রা হয় শান্ত আর অনেক বেশি নিরাপদ।"],
      ["h", "শহরে চলার জন্য সঠিক ক্যারিয়ার বেছে নিন"],
      ["p", "রাস্তায় কখনো বিড়ালকে কোলে বা খোলা ঝুড়িতে নেবেন না। জোরে একটা হর্নই যথেষ্ট বিড়ালের লাফিয়ে রাস্তায় দৌড় দেওয়ার জন্য। এমন নিরাপদ ক্যারিয়ার ব্যবহার করুন যাতে আছে:"],
      ["ul", [
        "অন্তত দুই দিকে বাতাস চলাচলের ব্যবস্থা",
        "বিড়াল ঘুরতে পারে এমন জায়গা",
        "এমন বন্ধ করার ব্যবস্থা যা বিড়াল ঠেলে খুলতে পারে না",
        "ভেতরে লিশ ক্লিপ, যাতে নিরাপদে খুলতে পারেন",
        "চলন্ত গাড়িতে সহজে স্থির করে ধরা যায় এমন আকার বা স্ট্র্যাপ"
      ]],
      ["p", "আমাদের [হ্যান্ডস ফ্রি লাইটওয়েট ক্যাট ব্যাগের](#/p/hands-free-cat-bag) মতো পিঠে পরা ব্যাগ রিকশার হাতল ধরা বা বৃষ্টিতে ছাতা নেওয়ার জন্য আপনার হাত ফ্রি রাখে।"],
      ["h", "বাসা থেকে বের হওয়ার আগে"],
      ["ul", [
        "কয়েক দিন আগে থেকে ক্যারিয়ার নিয়ে অনুশীলন করুন। কীভাবে, তা আছে আমাদের [ক্যারিয়ার ট্রেনিং পরিকল্পনায়](#/blog/carrier-training)।",
        "বের হওয়ার আগে বিড়ালকে হারনেস পরিয়ে ভেতরের লিশে আটকে দিন।",
        "যাত্রায় বিড়ালের বমি হলে বের হওয়ার ২ থেকে ৩ ঘণ্টা আগে ভারী খাবার দেবেন না, তবে পানি দিন।",
        "দুর্ঘটনার জন্য ক্যারিয়ারে তোয়ালে বা পি-প্যাড বিছিয়ে দিন।",
        "একটা ছোট ব্যাগ গুছিয়ে নিন: বাড়তি তোয়ালে, ওয়াইপস, কয়েকটা ট্রিট, টিকার কার্ড আর ভেটের নম্বর।",
        "বিড়ালের গলায় আইডি ট্যাগ রাখুন, অথবা মাইক্রোচিপ নিয়ে ভেটকে জিজ্ঞেস করুন।"
      ]],
      ["h", "রিকশায়"],
      ["ul", [
        "ক্যারিয়ার কোলে রাখুন বা পিঠে পরুন। কখনো পাদানিতে রাখবেন না।",
        "ঝাঁকুনি আর মোড় ঘোরার সময় শক্ত করে ধরে রাখুন।",
        "রোদের দিনে ছায়ার জন্য হুড তুলে দিন।",
        "কোনো ভবনের ভেতরে না ঢোকা পর্যন্ত জিপার বন্ধ রাখুন।"
      ]],
      ["h", "সিএনজি বা ট্যাক্সিতে"],
      ["ul", [
        "ক্যারিয়ার কোলে বা পাশের সিটে রেখে এক হাতে স্থির করে ধরুন। মেঝে বেশি গরম, নোংরা আর অনেক বেশি শব্দময়।",
        "যানজটে আটকে থাকলে সিএনজি খুব দ্রুত গরম হয়ে যায়। সম্ভব হলে সকালে বা সন্ধ্যায় বের হন।",
        "মেশের একটা দিক খোলা বাতাসের দিকে রাখুন, শরীর বা গাড়ির দেয়ালে চেপে নয়।"
      ]],
      ["h", "ব্যক্তিগত গাড়িতে"],
      ["ul", [
        "ক্যারিয়ার পেছনের সিটে রেখে সিটবেল্ট দিয়ে আটকান, অথবা সামনের সিটের পেছনে মেঝেতে শক্ত করে বসিয়ে দিন।",
        "গাড়িতে কখনো বিড়ালকে ছেড়ে রাখবেন না। ব্রেক প্যাডেলের নিচে বিড়াল মানে সত্যিকারের বিপদ।",
        "বিড়ালকে তোলার আগে এসি চালিয়ে গাড়ি ঠান্ডা করে নিন।",
        "**পার্ক করা গাড়িতে কখনো বিড়াল রেখে যাবেন না,** কয়েক মিনিটের জন্যও না। রোদে গাড়ির ভেতরটা খুব দ্রুত গরম হয়ে যায়।"
      ]],
      ["h", "পথে বিড়ালকে শান্ত রাখবেন যেভাবে"],
      ["ul", [
        "ক্যারিয়ারের কিছু অংশ হালকা কাপড়ে ঢেকে দিন যাতে বিড়াল কম দেখে, তবে বাতাসের জন্য অন্তত একটা দিক খোলা রাখুন।",
        "নরম গলায় কথা বলুন। আপনার গলা ওর চেনা আর ভরসার।",
        "সান্ত্বনা দিতে যাত্রার মাঝখানে ক্যারিয়ার খুলবেন না।",
        "একটু মিউ মিউ করবেই। গাড়ি স্থিরভাবে চলতে শুরু করলে সাধারণত থেমে যায়।"
      ]],
      ["h", "গরমের চাপের দিকে নজর রাখুন"],
      ["p", "বাংলাদেশে বিড়াল নিয়ে যাতায়াতে সবচেয়ে বড় ঝুঁকি গরম। মুখ খুলে শ্বাস নেওয়া, হাঁপানো, লালা ঝরা, মাড়ি টকটকে লাল হওয়া বা দুর্বলতা দেখলে ছায়ায় থেমে বিড়ালকে ঠান্ডা করুন। ঠিক কী করতে হবে, তা আছে আমাদের [বিড়ালের হিটস্ট্রোক](#/blog/cat-heatstroke-summer-care) গাইডে।"],
      ["h", "এক শহর থেকে আরেক শহরে লম্বা যাত্রা"],
      ["ul", [
        "কয়েক ঘণ্টা পরপর এমন জায়গায় থামার পরিকল্পনা করুন যেখানে বন্ধ, শান্ত পরিবেশে বিড়ালকে দেখতে পারবেন।",
        "প্রতিবার থামলে পানি দিন। কিছু বিড়াল স্বস্তি না পাওয়া পর্যন্ত পানি খায় না।",
        "ছয় ঘণ্টার বেশি যাত্রায় একবার ব্যবহারযোগ্য ছোট লিটার ট্রে নিন।",
        "রাস্তার পাশে বা বাস টার্মিনালে কখনো ক্যারিয়ার খুলবেন না।"
      ]],
      ["h", "পৌঁছানোর পর"],
      ["p", "বিড়ালকে একটা শান্ত ঘরে নিয়ে দরজা বন্ধ করুন, তারপর ক্যারিয়ার খুলে দিন। নিজের সময়মতো বের হতে দিন। পানি দিন, আর একটু থিতু হলে অল্প খাবার দিন।"],
      ["tip", "লম্বা যাত্রার আগে ভেটের নম্বর আর সবচেয়ে কাছের ২৪ ঘণ্টা খোলা পশু হাসপাতালের নম্বর ফোনে সেভ করে রাখুন। জরুরি অবস্থায় খুঁজতে বসতে চাইবেন না।"]
    ]
  },
  faq: [
    { q: { en: "Can I take my cat on a rickshaw?", bn: "রিকশায় কি বিড়াল নেওয়া যায়?" }, a: { en: "Yes, as long as your cat is in a secure, ventilated carrier that you hold firmly or wear. Never carry a cat loose in your arms in traffic.", bn: "হ্যাঁ, যদি বিড়াল বাতাস চলাচলের ব্যবস্থাসহ নিরাপদ ক্যারিয়ারে থাকে আর আপনি সেটা শক্ত করে ধরেন বা পিঠে পরেন। যানজটে কখনো খোলা অবস্থায় কোলে নেবেন না।" } },
    { q: { en: "How do I stop my cat crying during travel?", bn: "যাত্রায় বিড়ালের কান্না থামাব কীভাবে?" }, a: { en: "Practise short trips first, cover part of the carrier and stay calm yourself. Most cats get quieter once they learn the trip ends safely.", bn: "আগে ছোট ছোট যাত্রায় অনুশীলন করুন, ক্যারিয়ারের কিছু অংশ ঢেকে দিন আর নিজে শান্ত থাকুন। যাত্রা নিরাপদে শেষ হয়, এটা শিখে গেলে বেশিরভাগ বিড়াল চুপ হয়ে যায়।" } },
    { q: { en: "Should I sedate my cat for travel?", bn: "যাত্রার জন্য কি বিড়ালকে ঘুমের ওষুধ দেওয়া উচিত?" }, a: { en: "Only on your vet's advice. Never give your cat human medicine or sleeping pills. Many are toxic to cats.", bn: "শুধু ভেটের পরামর্শে। মানুষের ওষুধ বা ঘুমের বড়ি কখনো বিড়ালকে দেবেন না। এর অনেকগুলোই বিড়ালের জন্য বিষাক্ত।" } }
  ]
});

/* ---------- 5. Heatstroke ---------- */
POSTS.push({
  id: "cat-heatstroke-summer-care", date: "2026-09-20", product: "hands-free-cat-bag", medical: true,
  tag: { en: "Health", bn: "স্বাস্থ্য" },
  keyword: { en: "heatstroke in cats", bn: "গরমে বিড়ালের যত্ন" },
  title: { en: "Heatstroke in Cats: Warning Signs, First Aid and Summer Care", bn: "বিড়ালের হিটস্ট্রোক: লক্ষণ, প্রাথমিক চিকিৎসা ও গরমে যত্ন" },
  metaTitle: { en: "Heatstroke in Cats: Signs and First Aid | Purrvelous", bn: "বিড়ালের হিটস্ট্রোক: লক্ষণ ও গরমে করণীয় | Purrvelous" },
  metaDesc: { en: "Learn the warning signs of heatstroke in cats, what to do right away and simple ways to keep your cat cool through Bangladesh's hot and humid months.", bn: "বিড়ালের হিটস্ট্রোকের লক্ষণ, সাথে সাথে কী করবেন আর বাংলাদেশের গরম ও আর্দ্র মাসগুলোতে বিড়ালকে ঠান্ডা রাখার সহজ উপায় জানুন।" },
  ex: { en: "Know the signs before you need them. What heatstroke looks like, the first aid steps and how to keep your cat cool all summer.", bn: "দরকার হওয়ার আগেই লক্ষণগুলো জেনে রাখুন। হিটস্ট্রোক দেখতে কেমন, প্রাথমিক চিকিৎসা আর পুরো গ্রীষ্মে বিড়ালকে ঠান্ডা রাখার উপায়।" },
  photo: { en: "Cat stretched out on a cool tiled floor in a shaded room, water bowl nearby. Calm, natural light, no staged distress.", bn: "ছায়াঘেরা ঘরে ঠান্ডা টাইলসের মেঝেতে টানটান হয়ে শুয়ে আছে বিড়াল, পাশে পানির বাটি। শান্ত, প্রাকৃতিক আলো, কষ্টের দৃশ্য সাজানো নয়।" },
  body: {
    en: [
      ["p", "Cats cope with heat better than many pets, but they have limits. In Bangladesh, the hot months regularly push temperatures past 35°C and the humidity makes it harder for a cat to cool down. Heatstroke can come on fast and it can kill, so learn the signs before you ever need them."],
      ["h", "How cats cool down"],
      ["p", "Cats don't sweat like we do. They lose a little heat through their paw pads, and they mostly cool down by resting, finding cool surfaces and grooming, because saliva evaporating from fur works a bit like sweat. A healthy cat's normal body temperature is about 38 to 39°C. Unlike dogs, cats should not pant at rest, so take panting seriously."],
      ["h", "Cats at higher risk"],
      ["ul", [
        "Kittens and older cats",
        "Flat-faced breeds like Persians, which are popular in Bangladesh",
        "Overweight cats",
        "Cats with heart, breathing or kidney problems",
        "Long-haired cats with matted coats",
        "Any cat shut in a hot room, car, carrier or rooftop with no shade"
      ]],
      ["h", "Warning signs of heatstroke"],
      ["h3", "Early signs"],
      ["ul", [
        "Restlessness and searching for cool places",
        "Panting or open mouth breathing",
        "Drooling",
        "Sweaty paws that leave damp prints",
        "Grooming much more than usual"
      ]],
      ["h3", "Serious signs: go to a vet now"],
      ["ul", [
        "Bright red, dark or pale gums and tongue",
        "Vomiting or diarrhoea",
        "Stumbling, weakness or confusion",
        "A very fast heartbeat",
        "Collapse or seizures"
      ]],
      ["h", "First aid for heatstroke"],
      ["p", "If you think your cat has heatstroke, start cooling right away and get to a vet as soon as you can. Cooling at home is first aid, not treatment. Heatstroke can damage organs even after your cat seems to recover."],
      ["ol", [
        "**Move your cat** to a cool, shaded room. Turn on a fan if you have one.",
        "**Wet your cat with cool, not cold, water.** Focus on the paws, belly, armpits and neck. A damp cloth works, but don't leave a wet towel wrapped around your cat because it can trap heat.",
        "**Don't use ice or ice-cold water.** It narrows the blood vessels near the skin and slows cooling.",
        "**Offer small sips of water** if your cat is alert. Never force water into the mouth.",
        "**Call your vet** and head there, keeping the car or CNG as cool as possible on the way."
      ]],
      ["h", "Keeping your cat cool through summer"],
      ["ul", [
        "Leave out fresh water at all times, with a second bowl in another room. Some cats drink more from wide bowls or water fountains.",
        "Add some wet food to the diet. It boosts how much water your cat takes in.",
        "Close curtains during the hottest hours and let your cat reach tiled floors, which stay cooler.",
        "Never shut your cat on a sunny balcony or rooftop.",
        "Brush long-haired cats often. Mats trap heat. Ask a vet or groomer before shaving.",
        "Save play sessions for early morning or evening.",
        "Watch out during power cuts. A closed room with no fan heats up quickly, so open a window with a safety net or move your cat somewhere cooler."
      ]],
      ["h", "Travelling in the heat"],
      ["p", "Carriers, cars and CNGs all trap heat. Travel early or late in the day, use a carrier with mesh on several sides and never leave your cat in a parked vehicle. Our tips for [travelling with your cat in Dhaka](#/blog/travel-with-cat-dhaka) cover this in detail."],
      ["tip", "Learn what your cat's gums look like now, while they are healthy. Healthy gums are pink. Knowing normal makes it much easier to spot a problem."]
    ],
    bn: [
      ["p", "অনেক পোষা প্রাণীর চেয়ে বিড়াল গরম ভালো সামলায়, কিন্তু তারও সীমা আছে। বাংলাদেশে গরমের মাসগুলোতে তাপমাত্রা প্রায়ই ৩৫°C ছাড়িয়ে যায়, আর আর্দ্রতার কারণে বিড়ালের শরীর ঠান্ডা হওয়া আরও কঠিন হয়। হিটস্ট্রোক খুব দ্রুত হতে পারে এবং প্রাণঘাতী হতে পারে, তাই দরকার হওয়ার আগেই লক্ষণগুলো জেনে রাখুন।"],
      ["h", "বিড়াল কীভাবে শরীর ঠান্ডা করে"],
      ["p", "আমাদের মতো বিড়াল ঘামে না। থাবার প্যাড দিয়ে সামান্য তাপ বের হয়, আর মূলত বিশ্রাম নিয়ে, ঠান্ডা জায়গা খুঁজে আর শরীর চেটে সে ঠান্ডা হয়, কারণ লোম থেকে লালা শুকানোর সময় অনেকটা ঘামের মতো কাজ করে। সুস্থ বিড়ালের স্বাভাবিক তাপমাত্রা প্রায় ৩৮ থেকে ৩৯°C। কুকুরের মতো বিশ্রামের সময় বিড়ালের হাঁপানো স্বাভাবিক নয়, তাই হাঁপানোকে গুরুত্ব দিন।"],
      ["h", "যে বিড়ালগুলোর ঝুঁকি বেশি"],
      ["ul", [
        "বিড়ালছানা ও বয়স্ক বিড়াল",
        "পার্শিয়ানের মতো চ্যাপ্টা মুখের জাত, যা বাংলাদেশে বেশ জনপ্রিয়",
        "অতিরিক্ত ওজনের বিড়াল",
        "হৃদ্‌রোগ, শ্বাসকষ্ট বা কিডনির সমস্যা আছে এমন বিড়াল",
        "জট পাকানো লোমের লম্বা লোমওয়ালা বিড়াল",
        "যেকোনো বিড়াল, যাকে ছায়াহীন গরম ঘর, গাড়ি, ক্যারিয়ার বা ছাদে আটকে রাখা হয়েছে"
      ]],
      ["h", "হিটস্ট্রোকের সতর্কসংকেত"],
      ["h3", "শুরুর লক্ষণ"],
      ["ul", [
        "অস্থিরতা আর ঠান্ডা জায়গা খোঁজা",
        "হাঁপানো বা মুখ খুলে শ্বাস নেওয়া",
        "লালা ঝরা",
        "ঘামে ভেজা থাবা, যা মেঝেতে ভেজা ছাপ রাখে",
        "স্বাভাবিকের চেয়ে অনেক বেশি শরীর চাটা"
      ]],
      ["h3", "গুরুতর লক্ষণ: এখনই ভেটের কাছে যান"],
      ["ul", [
        "মাড়ি ও জিভ টকটকে লাল, গাঢ় বা ফ্যাকাশে",
        "বমি বা ডায়রিয়া",
        "টলমল করা, দুর্বলতা বা দিশেহারা ভাব",
        "খুব দ্রুত হৃৎস্পন্দন",
        "নেতিয়ে পড়া বা খিঁচুনি"
      ]],
      ["h", "হিটস্ট্রোকের প্রাথমিক চিকিৎসা"],
      ["p", "বিড়ালের হিটস্ট্রোক হয়েছে মনে হলে সাথে সাথে ঠান্ডা করা শুরু করুন আর যত দ্রুত সম্ভব ভেটের কাছে যান। বাসায় ঠান্ডা করা প্রাথমিক চিকিৎসা, পুরো চিকিৎসা নয়। বিড়াল সুস্থ মনে হওয়ার পরেও হিটস্ট্রোক শরীরের ভেতরের অঙ্গের ক্ষতি করতে পারে।"],
      ["ol", [
        "**বিড়ালকে সরিয়ে নিন** ঠান্ডা, ছায়াঘেরা ঘরে। ফ্যান থাকলে চালিয়ে দিন।",
        "**ঠান্ডা নয়, শীতল পানি দিয়ে বিড়ালকে ভেজান।** বিশেষ করে থাবা, পেট, বগল আর গলায়। ভেজা কাপড় দিয়ে মোছা যায়, তবে ভেজা তোয়ালে জড়িয়ে রাখবেন না, এতে তাপ আটকে যায়।",
        "**বরফ বা বরফ-ঠান্ডা পানি ব্যবহার করবেন না।** এতে চামড়ার কাছের রক্তনালী সংকুচিত হয়ে ঠান্ডা হওয়া ধীর হয়ে যায়।",
        "**বিড়াল সজাগ থাকলে অল্প অল্প পানি দিন।** কখনো জোর করে মুখে পানি ঢালবেন না।",
        "**ভেটকে ফোন করুন** আর রওনা দিন, পথে গাড়ি বা সিএনজি যতটা সম্ভব ঠান্ডা রাখুন।"
      ]],
      ["h", "পুরো গ্রীষ্মে বিড়ালকে ঠান্ডা রাখার উপায়"],
      ["ul", [
        "সবসময় পরিষ্কার পানি রাখুন, আরেকটা ঘরে দ্বিতীয় একটা বাটিও রাখুন। কিছু বিড়াল চওড়া বাটি বা পানির ফাউন্টেন থেকে বেশি পানি খায়।",
        "খাবারে কিছু ওয়েট ফুড যোগ করুন। এতে বিড়ালের শরীরে পানির পরিমাণ বাড়ে।",
        "সবচেয়ে গরম সময়টায় পর্দা টেনে দিন আর বিড়াল যেন টাইলসের মেঝেতে যেতে পারে, যা তুলনামূলক ঠান্ডা থাকে।",
        "রোদের বারান্দা বা ছাদে কখনো বিড়ালকে আটকে রাখবেন না।",
        "লম্বা লোমের বিড়ালকে নিয়মিত ব্রাশ করুন। জট তাপ আটকে রাখে। লোম কামানোর আগে ভেট বা গ্রুমারকে জিজ্ঞেস করুন।",
        "খেলার সময় রাখুন ভোরে বা সন্ধ্যায়।",
        "লোডশেডিংয়ের সময় সতর্ক থাকুন। ফ্যান ছাড়া বন্ধ ঘর খুব দ্রুত গরম হয়, তাই সেফটি নেট দেওয়া জানালা খুলে দিন বা বিড়ালকে ঠান্ডা কোথাও সরিয়ে নিন।"
      ]],
      ["h", "গরমে যাতায়াত"],
      ["p", "ক্যারিয়ার, গাড়ি আর সিএনজি সবই তাপ আটকে রাখে। দিনের শুরুতে বা শেষে যাতায়াত করুন, কয়েক দিকে মেশ আছে এমন ক্যারিয়ার ব্যবহার করুন আর পার্ক করা গাড়িতে কখনো বিড়াল রেখে যাবেন না। বিস্তারিত পাবেন আমাদের [ঢাকায় বিড়াল নিয়ে যাতায়াত](#/blog/travel-with-cat-dhaka) লেখায়।"],
      ["tip", "বিড়াল সুস্থ থাকতেই ওর মাড়ি দেখতে কেমন, চিনে রাখুন। সুস্থ মাড়ি গোলাপি। স্বাভাবিক অবস্থা জানা থাকলে সমস্যা চোখে পড়া অনেক সহজ হয়।"]
    ]
  },
  faq: [
    { q: { en: "What temperature is too hot for cats?", bn: "বিড়ালের জন্য কত তাপমাত্রা বেশি গরম?" }, a: { en: "There is no single number, but cats start to struggle when a room is hot and humid and they can't reach a cooler spot. Flat-faced, very young and older cats struggle sooner.", bn: "নির্দিষ্ট কোনো সংখ্যা নেই, তবে ঘর গরম ও আর্দ্র হলে আর ঠান্ডা কোনো জায়গায় যেতে না পারলে বিড়ালের কষ্ট শুরু হয়। চ্যাপ্টা মুখের, খুব ছোট আর বয়স্ক বিড়ালের কষ্ট আগে শুরু হয়।" } },
    { q: { en: "Is it normal for my cat to pant?", bn: "বিড়ালের হাঁপানো কি স্বাভাবিক?" }, a: { en: "Brief panting after hard play can happen, but panting at rest or in the heat is a warning sign. Cool your cat down and call a vet if it doesn't stop quickly.", bn: "জোরে খেলার পর অল্প সময় হাঁপাতে পারে, কিন্তু বিশ্রামের সময় বা গরমে হাঁপানো সতর্কসংকেত। বিড়ালকে ঠান্ডা করুন, আর দ্রুত না থামলে ভেটকে ফোন করুন।" } },
    { q: { en: "Should I shave my cat in summer?", bn: "গরমে কি বিড়ালের লোম কামিয়ে দেওয়া উচিত?" }, a: { en: "Not without advice. A cat's coat also protects against sunburn. Regular brushing is usually enough, so ask your vet or groomer first.", bn: "পরামর্শ ছাড়া নয়। বিড়ালের লোম রোদে পোড়া থেকেও রক্ষা করে। সাধারণত নিয়মিত ব্রাশ করাই যথেষ্ট, তাই আগে ভেট বা গ্রুমারকে জিজ্ঞেস করুন।" } }
  ]
});

/* ---------- 6. Safe and toxic foods ---------- */
POSTS.push({
  id: "foods-toxic-to-cats", date: "2026-09-12", product: null, medical: true,
  tag: { en: "Food", bn: "খাবার" },
  keyword: { en: "what can cats eat", bn: "বিড়াল কী খেতে পারে" },
  title: { en: "What Can Cats Eat? Human Foods That Are Safe and Dangerous for Cats", bn: "বিড়াল কী খেতে পারে? মানুষের যে খাবার নিরাপদ আর যেগুলো বিপজ্জনক" },
  metaTitle: { en: "What Can Cats Eat? Safe and Toxic Foods | Purrvelous", bn: "বিড়াল কী খেতে পারে আর কী পারে না | Purrvelous" },
  metaDesc: { en: "Can cats drink milk or eat fish, rice or chicken? A clear guide to safe and toxic human foods for cats, including everyday Bangladeshi kitchen foods.", bn: "বিড়াল কি দুধ, মাছ, ভাত বা মুরগি খেতে পারে? বাংলাদেশি রান্নাঘরের রোজকার খাবারসহ বিড়ালের জন্য নিরাপদ আর বিষাক্ত খাবারের সহজ গাইড।" },
  ex: { en: "Fish, rice, milk, curry. What is fine to share, what to limit and what can seriously harm your cat.", bn: "মাছ, ভাত, দুধ, তরকারি। কোনটা দেওয়া যায়, কোনটা কম দেবেন আর কোনটা বিড়ালের মারাত্মক ক্ষতি করতে পারে।" },
  photo: { en: "Cat sitting beside a kitchen counter looking up at a plate, owner's hand holding a small piece of plain boiled chicken. Warm kitchen light.", bn: "রান্নাঘরের তাকের পাশে বসে প্লেটের দিকে তাকিয়ে আছে বিড়াল, মালিকের হাতে এক টুকরো সেদ্ধ মুরগি। রান্নাঘরের উষ্ণ আলো।" },
  body: {
    en: [
      ["p", "Cats are expert beggars, and in many Bangladeshi homes they get a little fish or rice from the family plate. Some of that is fine. Some of it can make your cat seriously ill. Here is a clear guide to what is safe, what to limit and what to never give your cat."],
      ["h", "Cats need a meat-based diet"],
      ["p", "Cats are obligate carnivores. Their bodies need nutrients found in animal protein, like taurine, which they can't make enough of on their own. A long-term lack of taurine can cause heart and eye problems. That is why a complete cat food should make up most of your cat's diet, with human food kept as an occasional extra."],
      ["h", "Safe in small amounts"],
      ["ul", [
        "**Plain cooked chicken or beef,** without skin, bones, oil or spices",
        "**Plain cooked fish** with every bone removed. Skip fish cooked with onion, chilli or masala",
        "**Egg,** always fully cooked, never raw",
        "**Plain cooked rice** in small amounts. It adds calories but little nutrition for a cat",
        "**Plain cooked pumpkin**"
      ]],
      ["p", "As a rule of thumb, treats of any kind, including human food, should make up no more than about 10 percent of what your cat eats in a day."],
      ["h", "Limit or avoid"],
      ["table", { head: ["Food", "Why"], rows: [
        ["Milk", "Many adult cats can't digest lactose well, so milk often causes diarrhoea"],
        ["Raw fish", "Fed often, it can cause a vitamin B1 deficiency and may carry parasites"],
        ["Bones", "Cooked bones and small fish bones can splinter, choke or injure the gut"],
        ["Fried, fatty or spicy food", "Curry, biryani and fried snacks upset the stomach and may trigger pancreatitis"],
        ["Salty snacks", "Chips, chanachur and salted fish contain far too much salt for a cat"],
        ["Dog food", "It lacks enough taurine for cats. A stolen bite is fine, a regular diet is not"]
      ] }],
      ["h", "Never give these to your cat"],
      ["ul", [
        "**Onion, garlic, chives and leeks,** whether raw, cooked or powdered. They damage red blood cells. That includes curries, gravies and soups made with them.",
        "**Chocolate, coffee and tea.** They contain theobromine and caffeine, which are toxic to cats.",
        "**Grapes and raisins.** They are proven toxic to dogs and are best kept away from cats too.",
        "**Alcohol** in any amount.",
        "**Raw dough with yeast.** It expands in the stomach and produces alcohol.",
        "**Xylitol,** a sweetener found in some sugar-free gum and sweets."
      ]],
      ["h", "Medicines and plants are even more dangerous"],
      ["p", "Some of the most serious poisonings in cats don't come from food at all."],
      ["ul", [
        "**Paracetamol.** Even a small piece of one tablet can kill a cat. Never give your cat any human painkiller.",
        "**Dog flea treatments containing permethrin.** Safe for dogs, highly toxic to cats. Always use products made for cats.",
        "**Lilies.** Every part of the plant, even the pollen or the water in the vase, can cause kidney failure in cats."
      ]],
      ["p", "Getting a new kitten? Our [new kitten checklist](#/blog/new-kitten-checklist) covers how to make your whole home safer."],
      ["h", "What to do if your cat eats something toxic"],
      ["ol", [
        "Take away anything left and keep the packaging, or take a photo of it.",
        "Note roughly how much your cat ate and when.",
        "**Call your vet right away,** even if your cat seems fine. Some poisons take hours to show symptoms.",
        "Don't try to make your cat vomit unless a vet tells you to."
      ]],
      ["p", "Signs of poisoning can include vomiting, drooling, diarrhoea, weakness, shaking, breathing trouble or seizures."],
      ["tip", "Tell everyone in the house, including guests and household help, which foods are dangerous. Many poisonings happen when someone shares a snack with good intentions."]
    ],
    bn: [
      ["p", "বিড়াল খাবার চাইতে ওস্তাদ, আর বাংলাদেশের অনেক বাসায় পরিবারের প্লেট থেকে একটু মাছ বা ভাত তার ভাগে জোটে। এর কিছু ঠিক আছে। আবার কিছু খাবার বিড়ালকে মারাত্মক অসুস্থ করে দিতে পারে। এখানে সহজভাবে দেওয়া হলো কোনটা নিরাপদ, কোনটা কম দেবেন আর কোনটা কখনোই দেবেন না।"],
      ["h", "বিড়ালের দরকার মাংসভিত্তিক খাবার"],
      ["p", "বিড়াল পুরোপুরি মাংসাশী প্রাণী। ওর শরীরের দরকার প্রাণিজ প্রোটিনে থাকা পুষ্টি, যেমন টরিন, যা সে নিজে যথেষ্ট পরিমাণে তৈরি করতে পারে না। দীর্ঘদিন টরিনের অভাবে হৃদ্‌যন্ত্র আর চোখের সমস্যা হতে পারে। তাই বিড়ালের খাবারের বেশিরভাগই হওয়া উচিত পূর্ণাঙ্গ ক্যাট ফুড, আর মানুষের খাবার মাঝেমধ্যে বাড়তি হিসেবে।"],
      ["h", "অল্প পরিমাণে নিরাপদ"],
      ["ul", [
        "**মসলা ছাড়া সেদ্ধ মুরগি বা গরুর মাংস,** চামড়া, হাড়, তেল ও মসলা ছাড়া",
        "**মসলা ছাড়া রান্না করা মাছ,** সব কাঁটা বেছে। পেঁয়াজ, মরিচ বা মসলা দিয়ে রান্না করা মাছ দেবেন না",
        "**ডিম,** সবসময় পুরোপুরি সেদ্ধ, কখনো কাঁচা নয়",
        "**সাদা ভাত** অল্প পরিমাণে। এতে ক্যালরি আছে, কিন্তু বিড়ালের জন্য পুষ্টি সামান্য",
        "**মসলা ছাড়া রান্না করা মিষ্টি কুমড়া**"
      ]],
      ["p", "সাধারণ নিয়ম হলো, মানুষের খাবারসহ যেকোনো ট্রিট বিড়ালের দিনের মোট খাবারের প্রায় ১০ শতাংশের বেশি হবে না।"],
      ["h", "কম দিন বা এড়িয়ে চলুন"],
      ["table", { head: ["খাবার", "কেন"], rows: [
        ["দুধ", "অনেক প্রাপ্তবয়স্ক বিড়াল ল্যাকটোজ হজম করতে পারে না, তাই প্রায়ই ডায়রিয়া হয়"],
        ["কাঁচা মাছ", "নিয়মিত খেলে ভিটামিন বি১-এর অভাব হতে পারে, পরজীবীও থাকতে পারে"],
        ["হাড় ও কাঁটা", "রান্না করা হাড় আর ছোট মাছের কাঁটা ভেঙে গলায় আটকাতে বা পেটে আঘাত করতে পারে"],
        ["ভাজাপোড়া, চর্বি বা মসলাদার খাবার", "তরকারি, বিরিয়ানি আর ভাজা নাশতায় পেট খারাপ হয়, প্যানক্রিয়াটাইটিসও হতে পারে"],
        ["লবণাক্ত নাশতা", "চিপস, চানাচুর আর লোনা মাছে বিড়ালের জন্য অনেক বেশি লবণ"],
        ["কুকুরের খাবার", "এতে বিড়ালের জন্য যথেষ্ট টরিন নেই। চুরি করে এক কামড় ঠিক আছে, নিয়মিত খাবার নয়"]
      ] }],
      ["h", "এগুলো কখনোই বিড়ালকে দেবেন না"],
      ["ul", [
        "**পেঁয়াজ, রসুন, পেঁয়াজকলি ও লিক,** কাঁচা, রান্না বা গুঁড়া, যেকোনোভাবে। এগুলো লোহিত রক্তকণিকা নষ্ট করে। এগুলো দিয়ে রান্না করা তরকারি, ঝোল আর স্যুপও এর মধ্যে পড়ে।",
        "**চকলেট, কফি ও চা।** এতে থিওব্রোমিন আর ক্যাফেইন থাকে, যা বিড়ালের জন্য বিষাক্ত।",
        "**আঙুর ও কিশমিশ।** কুকুরের জন্য বিষাক্ত বলে প্রমাণিত, বিড়ালকেও দূরে রাখাই ভালো।",
        "**অ্যালকোহল,** যেকোনো পরিমাণে।",
        "**ইস্ট দেওয়া কাঁচা ময়দার খামির।** পেটে গিয়ে ফুলে ওঠে আর অ্যালকোহল তৈরি করে।",
        "**জাইলিটল,** কিছু সুগার-ফ্রি চুইংগাম আর মিষ্টিতে থাকা এক ধরনের মিষ্টিকারক।"
      ]],
      ["h", "ওষুধ আর গাছপালা আরও বিপজ্জনক"],
      ["p", "বিড়ালের সবচেয়ে মারাত্মক বিষক্রিয়ার কিছু ঘটনা খাবার থেকে আসেই না।"],
      ["ul", [
        "**প্যারাসিটামল।** একটা ট্যাবলেটের ছোট্ট একটা টুকরোও বিড়ালের মৃত্যুর কারণ হতে পারে। মানুষের কোনো ব্যথানাশক ওষুধ কখনো বিড়ালকে দেবেন না।",
        "**পারমেথ্রিনযুক্ত কুকুরের ফ্লি ট্রিটমেন্ট।** কুকুরের জন্য নিরাপদ, বিড়ালের জন্য মারাত্মক বিষাক্ত। সবসময় বিড়ালের জন্য বানানো পণ্যই ব্যবহার করুন।",
        "**লিলি ফুল।** গাছের প্রতিটা অংশ, এমনকি পরাগরেণু বা ফুলদানির পানিও বিড়ালের কিডনি অকেজো করে দিতে পারে।"
      ]],
      ["p", "নতুন বিড়ালছানা আনছেন? পুরো ঘর কীভাবে নিরাপদ করবেন, তা আছে আমাদের [নতুন বিড়ালছানার চেকলিস্টে](#/blog/new-kitten-checklist)।"],
      ["h", "বিড়াল বিষাক্ত কিছু খেয়ে ফেললে কী করবেন"],
      ["ol", [
        "বাকি যা আছে সরিয়ে ফেলুন আর প্যাকেটটা রেখে দিন বা ছবি তুলে রাখুন।",
        "বিড়াল আনুমানিক কতটা আর কখন খেয়েছে, লিখে রাখুন।",
        "**সাথে সাথে ভেটকে ফোন করুন,** বিড়াল সুস্থ মনে হলেও। কিছু বিষের লক্ষণ দেখা দিতে কয়েক ঘণ্টা লাগে।",
        "ভেট না বললে বিড়ালকে বমি করানোর চেষ্টা করবেন না।"
      ]],
      ["p", "বিষক্রিয়ার লক্ষণের মধ্যে থাকতে পারে বমি, লালা ঝরা, ডায়রিয়া, দুর্বলতা, কাঁপুনি, শ্বাসকষ্ট বা খিঁচুনি।"],
      ["tip", "বাসার সবাইকে, অতিথি আর গৃহকর্মীসহ, জানিয়ে রাখুন কোন খাবারগুলো বিপজ্জনক। অনেক বিষক্রিয়া ঘটে যখন কেউ ভালোবেসে নিজের নাশতা ভাগ করে দেয়।"]
    ]
  },
  faq: [
    { q: { en: "Can cats eat rice?", bn: "বিড়াল কি ভাত খেতে পারে?" }, a: { en: "Plain cooked rice in small amounts is generally safe, but it offers little nutrition for cats. It should never replace meat-based cat food.", bn: "অল্প পরিমাণে সাদা ভাত সাধারণত নিরাপদ, কিন্তু বিড়ালের জন্য এতে পুষ্টি সামান্য। মাংসভিত্তিক ক্যাট ফুডের বদলে কখনো ভাত দেবেন না।" } },
    { q: { en: "Can cats eat fish every day?", bn: "বিড়াল কি প্রতিদিন মাছ খেতে পারে?" }, a: { en: "A fish-only diet isn't balanced. Cooked, boneless fish as an occasional treat is fine, but your cat needs complete cat food for daily nutrition.", bn: "শুধু মাছের খাবার সুষম নয়। মাঝেমধ্যে কাঁটা বাছা রান্না করা মাছ ঠিক আছে, তবে প্রতিদিনের পুষ্টির জন্য বিড়ালের পূর্ণাঙ্গ ক্যাট ফুড দরকার।" } },
    { q: { en: "Is milk good for cats?", bn: "দুধ কি বিড়ালের জন্য ভালো?" }, a: { en: "Not really. Many adult cats can't digest milk well and it can cause diarrhoea. Fresh water is the best drink for cats.", bn: "আসলে না। অনেক প্রাপ্তবয়স্ক বিড়াল দুধ ঠিকমতো হজম করতে পারে না, ফলে ডায়রিয়া হতে পারে। বিড়ালের জন্য সবচেয়ে ভালো পানীয় পরিষ্কার পানি।" } }
  ]
});
