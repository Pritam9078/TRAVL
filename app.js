// Travl App - Navigation and Data Management

// Global Variables
let currentState = '';
let currentPlace = '';

// Place Data with all 12 locations
const placesData = {
    odisha: {
        name: 'Odisha',
        places: [
            {
                id: 'konark-sun-temple',
                name: 'Konark Sun Temple',
                image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy1setlJUPIRH_LnGVSLT8G2bLJF7KjTgD_Lp5yuXOS_WvU45Z3H365dP61qDfoYCZCMRbFZk37nvJA2xmvGUuzVSVotxG7QpnQNvBFGOldhRSv77IlQp_6bDkHAR1nMq9ENeyIbw=w800-h600-n-k-no-nu',
                description: 'Standing majestically on the eastern coast of Odisha, approximately 35 kilometers from Puri, the Konark Sun Temple emerges from the golden sands like a vision from ancient times, its weathered stones telling stories of devotion, artistry, and astronomical brilliance that span over seven centuries. Built in the 13th century by the legendary King Narasimhadeva I of the Eastern Ganga dynasty, this architectural masterpiece represents the pinnacle of Kalinga temple architecture and stands as one of India\'s most celebrated UNESCO World Heritage Sites. The temple is conceived as a colossal stone chariot dedicated to Surya, the Sun God, complete with 24 intricately carved wheels, each measuring about 10 feet in diameter, and seven powerful horses frozen in stone, eternally pulling the divine chariot across the celestial sphere. Every element of this magnificent structure serves both aesthetic and functional purposes, creating a harmonious blend of art, religion, and science that continues to astound visitors and scholars alike. The temple\'s orientation is precisely calculated to catch the first rays of dawn, symbolizing the eternal journey of the sun across the heavens and the triumph of light over darkness. As the sun rises over the Bay of Bengal, its golden rays illuminate the temple\'s eastern facade, bringing the countless sculptures to life in a daily spectacle that has remained unchanged for centuries. The main sanctum, though partially in ruins, still towers at an impressive height, while the adjacent Jagamohana (assembly hall) remains largely intact, showcasing the architectural genius of medieval Odisha. The temple complex spans an area of about 857 by 540 feet, enclosed within a massive wall that once protected this sacred space from invaders and the elements. Archaeological excavations have revealed that the temple was originally built on a raised platform surrounded by subsidiary shrines, gardens, and numerous smaller temples, creating a vast religious complex that served as a center of learning, art, and spiritual practice. The famous wheels of Konark are not merely decorative elements but sophisticated sundials that can accurately tell time even today. Each wheel is divided into eight major spokes representing the eight prahars (three-hour periods) of a day, further subdivided into smaller sections that mark minutes and even moments. The intricate calculations involved in creating these functional sundials demonstrate the advanced understanding of astronomy and mathematics possessed by the temple\'s architects and craftsmen. The sculptural program of Konark is arguably the most comprehensive and sophisticated in all of Indian temple architecture, with every surface covered in meticulously carved figures that range from the divine to the mundane, from the erotic to the spiritual. The temple walls come alive with thousands of sculptures depicting celestial beings, mythical creatures, musicians, dancers, lovers, warriors, and scenes from daily life, creating a stone encyclopedia of medieval Indian society and culture.',
                culture: 'Built by King Narasimhadeva I around 1250 CE to commemorate his victory over Muslim invaders, the Konark Sun Temple represents the zenith of Odishan temple architecture and the culmination of centuries of artistic and spiritual evolution in eastern India. The temple follows the traditional Kalinga architectural style, characterized by its curvilinear tower (deul) and pillared hall (jagamohana), but takes these elements to unprecedented heights of complexity and sophistication. The temple\'s conception as a solar chariot draws from ancient Vedic traditions where Surya is described as riding across the sky in a seven-horse chariot, while its astronomical precision reflects the advanced scientific knowledge of medieval Odisha. The craftsmen who created Konark belonged to hereditary guilds that had perfected their skills over generations, passing down techniques for working with the local khondalite stone and chlorite that give the temple its distinctive appearance and remarkable durability. The temple served not only as a place of worship but as a center of learning where astronomy, mathematics, music, dance, and sculpture were taught and practiced. Ancient texts describe elaborate rituals performed here, including the famous Chandrabhaga Mela, a week-long festival that attracted pilgrims from across the Indian subcontinent. The temple\'s decline began in the 15th century when the main deity was moved to Puri, possibly due to Muslim invasions or natural disasters, and by the 18th century, much of the complex lay in ruins. However, the temple\'s cultural significance has only grown over time, inspiring countless artists, poets, and scholars. Rabindranath Tagore famously described it as a place "where the language of stone surpasses the language of humans," while modern conservation efforts have ensured that this masterpiece continues to inspire future generations. The temple\'s influence on Odishan art and culture cannot be overstated, with its motifs and techniques continuing to influence contemporary craftsmen and artists throughout the region.',
                localFlavour: 'The culinary landscape around Konark offers a delightful exploration of authentic Odishan coastal cuisine that perfectly complements a visit to this ancient wonder. The nearby fishing villages serve incredibly fresh seafood caught daily from the Bay of Bengal, with local specialties including chingudi (prawn) curry prepared with coconut milk and aromatic spices, pomfret fish grilled with mustard oil and turmeric, and the famous macha ghanta (fish head curry) that represents the pinnacle of Odishan cooking. Street food vendors around the temple complex offer traditional snacks like aloo chop (spiced potato fritters), bara ghuguni (black gram curry with fried bread), and the sweet delight of chhena poda (baked cottage cheese dessert) that originated in this region. The local palm jaggery, harvested from date palms that dot the coastal landscape, adds a unique sweetness to many dishes and can be purchased fresh from village markets. Pilgrims and visitors traditionally enjoy simple sattvic meals of dalma (lentil and vegetable stew), bhata (rice), and seasonal vegetables cooked without onion or garlic, reflecting the spiritual atmosphere of this sacred site. The nearby Chandrabhaga beach hosts small eateries serving fresh coconut water, roasted corn, and peanuts, while local women prepare traditional pitha (rice cakes) during festivals, offering visitors authentic tastes that have remained unchanged for generations.',
                whyVisit: 'A visit to the Konark Sun Temple is a journey through time that offers multiple layers of experience, from spiritual contemplation to artistic appreciation to scientific wonder. The temple is one of India\'s most photographed monuments, and for good reason – every angle reveals new details and perspectives that showcase the incredible skill of its medieval creators. The intricate erotic sculptures that adorn the temple walls, particularly on the jagamohana, rival those of Khajuraho in their artistic merit and frank celebration of human sexuality, representing the tantric traditions that were prevalent in medieval Odisha. These sculptures, far from being merely decorative, serve deeper symbolic purposes, representing the unity of opposites and the creative energy that drives the universe. The engineering genius of the ancient architects is evident in every aspect of the temple\'s construction, from the perfectly balanced stone blocks that required no mortar to the sophisticated drainage system that has protected the structure for centuries. Marvel at the seven horses that represent the days of the week and the twelve pairs of wheels that symbolize the months and seasons, each carved with astronomical symbols that reveal the deep scientific knowledge of the temple\'s creators. The nearby Chandrabhaga beach, just a short walk from the temple, offers the perfect complement to a temple visit, with its golden sands and gentle waves providing a peaceful setting for reflection. The beach is also significant for its role in the annual Chandrabhaga Mela, when thousands of pilgrims come to bathe in the sacred waters. The annual Konark Dance Festival, held in December, transforms the temple into a spectacular stage for classical Indian dance forms, with performances by renowned artists set against the backdrop of the illuminated temple creating an unforgettable cultural experience. The festival celebrates the temple\'s connection to the performing arts, as many of the sculptures depict musicians and dancers, and the temple\'s acoustics are said to have been designed to enhance musical performances. Throughout the year, the temple offers different experiences depending on the time of visit – sunrise visits are particularly magical as the first rays of light illuminate the eastern facade, while sunset visits reveal the temple\'s silhouette against the darkening sky. The nearby Archaeological Museum houses many sculptures and artifacts recovered from the temple complex, providing deeper insights into the temple\'s history and significance. Photography enthusiasts will find endless opportunities, from macro shots of intricate carvings to wide-angle captures of the entire complex, while history buffs can spend hours deciphering the stories told in stone throughout the temple walls.'
            },
            {
                id: 'puri-jagannath-temple',
                name: 'Puri Jagannath Temple',
                image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyUvoF_WgDpXQVtVVdRuozCAph_nVBUdTanAu96_fecpCXm0zKuPRYr2FXNbQlfBYpWsrIjxYS3XNW7lENDq1U-YFztvpJZ7V-whD9kwMfqa-J5gZ4gMHt6WcXLuFLg0yCNrtT7nOJWw94_=s1360-w1360-h1020-rw',
                description: 'In the sacred coastal town of Puri, where the ancient meets the eternal, stands the magnificent Jagannath Temple, a spiritual powerhouse that has been the beating heart of Odishan devotion for over nine centuries. This 12th-century architectural marvel, dedicated to Lord Jagannath (literally "Lord of the Universe"), represents one of the most significant pilgrimage destinations in Hinduism and serves as the crown jewel of the four sacred Char Dham sites. The temple complex, sprawling across 10.7 acres within the bustling town of Puri, rises majestically with its towering 214-foot main spire (called Neelachakra) visible from miles away, serving as a beacon for countless pilgrims who journey here seeking divine blessings and spiritual fulfillment. The temple\'s unique architectural style, known as Kalinga architecture, showcases the extraordinary craftsmanship of medieval Odisha, with its soaring shikhara (tower) adorned with intricate carvings and crowned by the sacred Sudarshan Chakra, which is replaced annually in a ritual that draws thousands of devotees. What makes this temple truly extraordinary is not just its physical grandeur, but the mystical aura that surrounds every aspect of its existence, from the enigmatic wooden idols that defy conventional Hindu iconography to the countless miracles and mysteries that devotees attribute to Lord Jagannath\'s divine presence. The temple houses three main deities carved from sacred neem wood: Jagannath (Krishna), his brother Balabhadra (Balarama), and sister Subhadra, whose distinctive large eyes and simplified features create an immediately recognizable iconographic style that has become synonymous with Odishan culture. These wooden idols, unlike the stone and metal images found in most Hindu temples, are replaced periodically in the sacred Nabakalebara ceremony, which occurs every 8, 12, or 19 years according to complex astrological calculations. This ancient ritual, shrouded in secrecy and performed by hereditary priests, involves the creation of new idols from specially chosen neem trees, followed by the mysterious transfer of the "soul" or spiritual essence from the old idols to the new ones, a process that takes place in complete darkness and is witnessed only by a select few. The temple complex is a bustling microcosm of religious life, encompassing numerous smaller shrines, sacred pools, administrative buildings, and residential quarters for the hundreds of priests and temple staff who maintain the elaborate daily rituals. The temple kitchen, known as Rosa Ghara, is often cited as one of the largest kitchens in the world, where an army of cooks prepares sacred food (prasadam) in earthen pots using traditional wood-fired stoves, feeding thousands of devotees daily without regard to caste, creed, or social status. The cooking process itself is considered a form of worship, with specific rules governing everything from the selection of ingredients to the order in which dishes are prepared, and the miraculous efficiency with which this kitchen operates has been the subject of numerous studies and documentaries.',
                culture: 'The Jagannath Temple stands as a living testament to over 800 years of unbroken religious tradition, cultural continuity, and social evolution in eastern India. Built during the reign of King Anantavarman Chodaganga Deva of the Eastern Ganga dynasty in the 12th century, the temple has survived numerous political upheavals, foreign invasions, and natural disasters while maintaining its essential character and traditions. The temple\'s most famous cultural contribution to world heritage is the annual Rath Yatra (Chariot Festival), which has inspired similar celebrations across the globe and given the English language the word "juggernaut," derived from Jagannath. This spectacular festival, held during the monsoon season (usually June-July), sees the three deities taken out in massive wooden chariots – Nandighosha for Jagannath, Taladhvaja for Balabhadra, and Darpadalana for Subhadra – each constructed anew each year by hereditary craftsmen using traditional techniques passed down through generations. The procession from the main temple to the Gundicha Temple, located about 3 kilometers away, attracts millions of devotees who consider pulling the chariot ropes as one of the most meritorious acts possible. The temple\'s cultural significance extends far beyond its religious importance, as it has served as a center for classical Odishan arts, including Odissi dance, classical music, sculpture, and painting. The temple follows strict traditional protocols that have remained largely unchanged for centuries, including the restriction that prevents non-Hindus from entering the temple premises, a rule that has been maintained despite modern pressures for reform. The daily rituals, numbering in the dozens, begin before dawn and continue until late at night, following elaborate procedures laid down in ancient texts and modified only slightly over the centuries. The Gajapati Maharaja of Puri, considered the first servitor of Lord Jagannath, performs the daily Chhera Pahara ritual during the Rath Yatra, symbolically sweeping the chariot platforms, demonstrating that even royalty is equal before the divine. The temple\'s social impact has been profound, as it has historically served as a great equalizer where caste distinctions are minimized, and all devotees, regardless of social status, share the same prasadam and participate in the same rituals. The temple has also been a significant economic force, supporting thousands of families involved in various temple-related activities, from priests and temple staff to artisans, musicians, shopkeepers, and pilgrimage service providers.',
                localFlavour: 'The sacred town of Puri offers a unique culinary experience centered around the legendary temple prasadam, considered among the purest and most spiritually significant food in India. The temple\'s massive kitchen, Rosa Ghara, operates like a divine restaurant serving thousands daily with meals prepared using traditional methods that have remained unchanged for centuries. The famous Jagannath temple prasadam includes anna (rice), dalma (mixed lentils with vegetables), saga (leafy greens), kheer (sweet rice pudding), and the revered mahaprasad that is blessed by being offered directly to the deities before distribution. Local specialty sweets like rasabali (cottage cheese discs in sweet milk), khaja (layered sweet pastry), and chenna gaja (cottage cheese squares) represent Puri\'s rich confectionery tradition. Street food around the temple includes popular snacks like ghuguni (spiced yellow pea curry), aloo dum (spiced potato curry), and various pitha (rice cakes) prepared during festivals. The coastal location ensures fresh seafood availability, with local preparations of pomfret, hilsa, and prawns cooked in traditional Odishan style using mustard oil, panch phoron spice mix, and coconut. Coconut water from roadside vendors provides refreshing relief, while traditional beverages like palm wine and fermented rice water offer authentic local flavors. The unique aspect of Puri\'s food culture is the spiritual significance attached to every meal, with even commercial establishments maintaining certain traditional practices and offering food that reflects the town\'s sacred atmosphere.',
                whyVisit: 'A pilgrimage to the Jagannath Temple offers a transformative spiritual experience that combines devotional intensity with cultural immersion and historical discovery. The temple provides multiple levels of engagement for visitors, from the deeply religious seeking darshan (divine sight) of the deities to cultural enthusiasts interested in experiencing one of India\'s most vibrant religious traditions. The world-famous Rath Yatra festival represents the pinnacle of temple celebrations, attracting millions of devotees from across India and abroad who come to participate in this ancient ritual that has been described as one of the greatest religious gatherings on earth. The sight of the massive chariots, some reaching heights of 45 feet, being pulled through the streets by thousands of devotees creates an atmosphere of collective devotion that is both humbling and exhilarating. Even outside the festival season, the temple offers daily experiences that showcase the living nature of Hindu tradition, from the elaborate morning rituals that begin before sunrise to the evening arati ceremonies where oil lamps illuminate the sanctum as devotional songs fill the air. The prasadam served at the temple, known for its divine taste and spiritual significance, provides visitors with a unique culinary experience that transcends mere eating to become an act of communion with the divine. The temple\'s prasadam is famous throughout India for its quality and spiritual potency, with devotees often traveling great distances just to taste food that has been offered to Lord Jagannath. The temple complex itself offers numerous points of interest, from the intricate stone carvings that adorn the walls and pillars to the various smaller shrines that house different aspects of the divine. The nearby Puri beach, with its golden sands stretching along the Bay of Bengal, provides a perfect complement to temple visits, offering opportunities for meditation, relaxation, and reflection while watching spectacular sunrises over the ocean. The vibrant markets surrounding the temple create a bustling atmosphere where visitors can purchase religious artifacts, traditional handicrafts, and souvenirs while experiencing the commercial energy that has surrounded this sacred site for centuries. The Grand Road (Bada Danda), the broad avenue that connects the main temple to the Gundicha Temple, serves as the stage for the Rath Yatra but throughout the year remains a fascinating street where religious life and daily commerce intersect. Photography enthusiasts will find endless subjects, from architectural details of the temple to candid moments of devotion, though cameras are not permitted inside the temple premises. The spiritual energy of Puri extends beyond the temple itself to encompass the entire town, where almost every street corner has some connection to Lord Jagannath, creating an immersive environment where the sacred and secular blend seamlessly.'
            },
            {
                id: 'chilika-lake',
                name: 'Chilika Lake',
                image: 'https://trueyatra.com/wp-content/uploads/2024/01/Nalaban-Island-Chilika-Lake-1024x576.png',
                description: 'Stretching majestically across 1,100 square kilometers along the eastern coast of India, Chilika Lake stands as Asia\'s largest brackish water lagoon and one of the most significant wetland ecosystems on the planet, representing a unique confluence of freshwater rivers, saltwater intrusion from the Bay of Bengal, and an intricate network of channels, islands, and mudflats that create a constantly changing aquatic landscape of extraordinary beauty and ecological importance. This vast inland sea, connected to the Bay of Bengal through a narrow outlet at Mouth of Chilika, serves as a critical stopover and wintering ground for over one million migratory birds traveling along the Central Asian Flyway, making it one of the most important bird sanctuaries in the world and a paradise for ornithologists, wildlife photographers, and nature enthusiasts. The lake\'s unique brackish water environment, where salinity levels fluctuate dramatically with the monsoon seasons, creates diverse micro-habitats that support an incredible variety of life forms, from microscopic plankton to large marine mammals, establishing it as one of India\'s most productive ecosystems and a critical component of the global environmental network. During the winter months, from November to February, Chilika transforms into a spectacular avian theater as countless birds arrive from distant lands – flamingos from the Rann of Kutch paint the waters pink, white-bellied sea eagles soar overhead, painted storks wade through shallow waters, and thousands of other species create a cacophony of calls that resonates across the vast expanse of water. The lake\'s ecosystem supports over 160 species of fish, including the famous Chilika mahseer, numerous prawn varieties, and crabs that form the basis of local fishing communities\' livelihoods while also attracting the playful Irrawaddy dolphins that have made Chilika their permanent home, delighting visitors with their acrobatic displays in the deeper channels. Nalaban Island, situated in the heart of the lake and designated as a core area of the Chilika Wildlife Sanctuary, serves as the primary bird sanctuary where human activity is restricted during the breeding season, allowing visitors to witness nature\'s spectacles without disturbance. The lake\'s geography is punctuated by numerous islands of varying sizes, from the larger inhabited islands like Krushna Prasad and Malud to smaller seasonal islands that appear and disappear with changing water levels, each supporting unique flora and fauna adapted to the dynamic wetland environment.',
                culture: 'Chilika Lake has been the lifeblood of local communities for over a millennium, sustaining a unique cultural ecosystem that has evolved in harmony with the lake\'s natural rhythms and seasonal changes. The indigenous fishing communities, primarily the Keutas, have developed sophisticated traditional knowledge systems for sustainable fishing practices, including intricate understanding of fish migration patterns, seasonal changes in water quality, and traditional boat-building techniques that have been passed down through generations without written documentation. These communities have created a rich oral tradition of folklore, songs, and stories centered around the lake\'s mythical origins, its resident deities, and the seasonal arrival of migratory birds, with local festivals marking significant events in the lake\'s annual cycle. The famous Kalijai Temple, situated on a small island in the southern sector of the lake, represents the spiritual heart of Chilika culture, where the goddess Kalijai is believed to protect fishermen and grant boons to devotees who make the pilgrimage across the waters. The temple\'s annual festival draws thousands of devotees who travel by boat to participate in rituals that blend Hindu traditions with local customs specific to the lake communities. The lake has also played a significant role in regional history, serving as a natural barrier and strategic waterway that influenced trade routes, military campaigns, and cultural exchange between coastal and inland regions of Odisha. Archaeological evidence suggests that the lake region has been continuously inhabited for over 2,000 years, with ancient ports and trading centers that connected the Kalinga kingdom to Southeast Asian maritime networks. The traditional industries associated with Chilika, including prawn cultivation, salt production, and seaweed collection, have created specialized communities with distinct cultural practices, while the introduction of modern tourism and conservation efforts has led to new forms of cultural adaptation and economic diversification. The lake communities have developed unique architectural styles adapted to the wetland environment, with houses built on stilts or elevated platforms to withstand seasonal flooding, and traditional boats designed specifically for navigating the shallow, often choppy waters of the lagoon.',
                localFlavour: 'Chilika Lake\'s culinary treasures revolve around the incredible bounty of fresh seafood harvested daily from its brackish waters, creating a unique gastronomic experience that showcases the finest aspects of Odishan coastal cuisine. The lake\'s famous blue swimming crabs, considered among the sweetest in India, are prepared in numerous ways - from simple steamed preparations that highlight their natural flavor to rich curries cooked with coconut milk, curry leaves, and aromatic spices. Fresh prawns of various sizes, caught using traditional methods, are transformed into delectable dishes like chingudi malai curry (prawns in coconut curry), chingudi bhaja (spiced fried prawns), and the popular prawn pickle that locals prepare during the harvest season. The lake\'s fish varieties, including hilsa, rohu, and catla, are prepared using time-honored recipes that often involve slow-cooking in earthen pots with mustard oil, turmeric, and the distinctive panch phoron spice blend. Fishing communities prepare special dishes during festivals, including fish head curry cooked with vegetables from their kitchen gardens, creating hearty meals that reflect their intimate connection with the lake\'s resources. Local women specialize in preparing traditional snacks like fish cutlets, prawn fritters, and various types of fish pickles that serve as perfect accompaniments to rice meals. The nearby villages also offer unique vegetarian dishes featuring lotus stems, water chestnuts, and aquatic vegetables that grow naturally around the lake margins. Palm jaggery harvested from date palms in the area adds distinctive sweetness to desserts and beverages, while fresh coconut water and tender coconut provide refreshing natural drinks that complement the spicy seafood preparations perfectly.',
                whyVisit: 'Chilika Lake offers visitors an unparalleled opportunity to experience one of India\'s most spectacular natural wonders while engaging with conservation efforts, local cultures, and outdoor adventures that combine wildlife viewing, cultural immersion, and environmental education in a setting of extraordinary natural beauty. The lake provides world-class birdwatching opportunities throughout the year, but reaches its peak during the winter months when over 260 recorded bird species, including numerous rarities and endemics, can be observed in their natural habitat. Professional birdwatching tours led by experienced local guides offer chances to spot painted storks, spot-billed pelicans, brahminy ducks, northern pintails, common teals, and if extremely fortunate, the occasional vagrant species that strays from its normal migration route. The resident Irrawaddy dolphins, one of only three populations of this endangered species found in Indian waters, provide visitors with magical encounters as these intelligent marine mammals surface playfully around boats, often approaching close enough for spectacular photography opportunities. Boat excursions to various islands within the lake system offer diverse experiences, from the serene bird sanctuary of Nalaban Island where photography blinds provide intimate access to roosting and feeding areas, to Breakfast Island where visitors can enjoy fresh seafood prepared by local communities while watching sunrise paint the waters in brilliant colors. The historic Kalijai Temple provides both spiritual and cultural experiences, accessible only by boat and offering insights into local religious practices while providing panoramic views of the lake from its elevated position. Sunrise and sunset boat rides across the vast expanse of Chilika create unforgettable moments as the changing light transforms the water\'s surface into a mirror reflecting the sky\'s infinite variations, while the silhouettes of fishing boats and wading birds add dramatic elements to the natural composition. Adventure enthusiasts can engage in various water sports including kayaking through narrow channels, sailing in traditional boats, and even camping on designated islands under star-filled skies. The lake\'s fishing villages offer authentic cultural experiences where visitors can learn traditional fishing techniques, participate in net-making workshops, understand sustainable aquaculture practices, and enjoy freshly prepared local cuisine featuring the lake\'s abundant seafood. Photography opportunities are virtually limitless, from macro shots of exotic birds and dolphins to vast landscape compositions capturing the lake\'s ever-changing moods, seasonal transformations, and the interplay between human activities and natural processes. Conservation-minded visitors can participate in citizen science projects, bird counting surveys, and environmental monitoring activities that contribute to ongoing research and protection efforts while providing deeper understanding of this critical ecosystem.'
            },
        ],
        foods: [
            {
                name: 'Dalma',
                description: 'Traditional lentil curry with vegetables and turmeric',
                image: 'https://www.seema.com/wp-content/uploads/2022/04/Dalma-recipe.jpg'
            },
            {
                name: 'Pakhala Bhata',
                description: 'Fermented rice soaked in water, served with fried vegetables and pickles',
                image: 'https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/hindi-betterindia/media/post_attachments/uploads/2021/08/Pakhala-rice.jpg'
            },
            {
                name: 'Machha Jhola',
                description: 'Spicy fish curry cooked in mustard oil with aromatic Odishan spices',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVlqF50yRpb6BibqKcw_XOSOvjMZ6B8GUdQ&s'
            },
            {
                name: 'Rasgulla',
                description: 'Spongy cottage cheese balls in sugar syrup - Odisha\'s pride with GI status',
                image: 'https://palatesdesire.com/wp-content/uploads/2022/09/rasgulla-recipe@palates-desire.jpg'
            },
            {
                name: 'Chhena Poda',
                description: 'Baked cottage cheese dessert caramelized with jaggery - the "burnt cheese"',
                image: 'https://www.bigbasket.com/media/uploads/recipe/w-l/4570_2_1.jpg'
            },
            {
                name: 'Kheer Sagar',
                description: 'Rasgullas floating in cardamom-flavored thickened milk with nuts',
                image: 'https://assets.zeezest.com/videos/PROD_KHEER%20SAGAR%20EP01_1641576497656.jpg'
            }
        ]
    },
    kerala: {
        name: 'Kerala',
        places: [
            {
                id: 'munnar',
                name: 'Munnar',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Munnar_hillstation_kerala.jpg/960px-Munnar_hillstation_kerala.jpg',
                description: 'Nestled in the heart of the Western Ghats at an elevation of 1,600 meters above sea level, Munnar stands as Kerala\'s crown jewel among hill stations, a breathtaking tapestry of rolling hills carpeted with emerald tea plantations that stretch endlessly toward mist-shrouded peaks, creating one of the most photographed and romantically evocative landscapes in all of India. This former British colonial hill station, whose name derives from the Malayalam words "munu" (three) and "aar" (river), referring to its location at the confluence of three mountain streams – Mudrapuzha, Nallathanni, and Kundala – has evolved from a pristine wilderness inhabited only by tribal communities to become South India\'s premier destination for those seeking respite from the tropical heat, natural beauty of extraordinary proportions, and immersion in the culture of tea cultivation that has defined this region for over 150 years. The town of Munnar itself, perched on a series of terraced hills and valleys, serves as the commercial and administrative center for the sprawling tea estates that dominate the landscape, but the true magic of this destination lies in the vast expanses of cultivation that surround it, where millions of tea bushes planted in perfect geometric patterns create living artwork that changes color and character with the shifting light throughout the day. The climate of Munnar is nothing short of perfect, with temperatures rarely exceeding 25°C even during the hottest months, while winter nights can drop to a refreshing 5°C, creating an environment where visitors can enjoy outdoor activities year-round without the oppressive heat that characterizes much of peninsular India. The monsoon seasons, from June to September and again from October to November, transform Munnar into a verdant paradise where countless waterfalls cascade down rocky cliffs, mist clings to the hillsides creating ethereal scenes, and the air becomes so clean and fresh that simply breathing feels like a therapeutic experience. Perhaps the most remarkable natural phenomenon associated with Munnar is the legendary blooming of Neelakurinji (Strobilanthes kunthianus), a rare endemic plant that covers the hillsides in a carpet of brilliant blue-purple flowers once every twelve years, creating such a spectacular display that it attracts botanists, nature lovers, and tourists from around the world who plan their visits specifically to witness this botanical wonder. The rolling topography of Munnar encompasses not just tea plantations but also pristine patches of shola forests – ancient tropical montane forests that represent some of the most biodiverse ecosystems in the Western Ghats – grasslands that provide habitat for endangered species, crystal-clear mountain streams that provide both scenic beauty and the pure water essential for tea processing, and numerous peaks that offer trekking opportunities and panoramic viewpoints.',
                culture: 'The cultural landscape of Munnar represents a fascinating blend of indigenous tribal traditions, colonial British influence, and modern South Indian practices that have evolved over more than a century of tea cultivation and tourism development. Originally, this pristine mountain region was inhabited primarily by tribal communities including the Muthuvas, Mannans, and Paliyans, who lived in harmony with the forest environment, practicing sustainable agriculture, hunting, and gathering while maintaining rich oral traditions and intimate knowledge of the region\'s flora and fauna. The transformation of Munnar began in the 1870s when Scottish planter John Daniel Munro identified the area\'s potential for tea cultivation and established the first plantations, followed by other British entrepreneurs who created the extensive tea estates that continue to define the region today. The colonial period left an indelible mark on Munnar\'s architecture, with numerous bungalows built in the distinctive Anglo-Indian style featuring steep-pitched roofs, wide verandas, and carefully planned gardens that were designed to recreate a piece of Britain in the tropical mountains. The British also established the infrastructure that made large-scale tea production possible, including narrow-gauge railways for transporting tea to the plains, processing factories equipped with machinery imported from England, and the hierarchical plantation system that organized workers into distinct communities with specific roles and responsibilities. The cultural legacy of the plantation era persists in the carefully maintained colonial buildings, many of which have been converted into heritage hotels and museums, the continued use of English as a lingua franca among tea estate managers and guides, and the preservation of certain British customs and protocols in plantation management. However, the dominant culture of modern Munnar reflects the Tamil and Malayalam influences brought by the thousands of workers who migrated from the plains to work in the tea gardens, creating a unique hill station culture that blends South Indian traditions with the specific lifestyle requirements of mountain living and agricultural work. The tea estate workers, many of whom are descendants of the original Tamil laborers brought to work the plantations, have developed their own cultural expressions including folk songs, dances, and festivals that celebrate both their heritage and their connection to the tea-growing cycle. Local festivals in Munnar often revolve around agricultural seasons, with celebrations marking the beginning and end of plucking seasons, while religious observances reflect the diverse spiritual traditions of the Hindu, Christian, and Muslim communities that call Munnar home.',
                localFlavour: 'Munnar\'s high-altitude cuisine offers a delightful fusion of Kerala, Tamil, and tribal culinary traditions adapted to the cool mountain climate and local ingredients sourced from tea plantations, spice gardens, and surrounding forests. The region\'s famous cardamom, grown in the surrounding hills, features prominently in both sweet and savory dishes, lending its distinctive aroma to everything from traditional milk tea to elaborate biryanis served in local restaurants. Tea estate workers have developed unique breakfast traditions featuring robust black tea brewed with fresh milk, cardamom, and jaggery, accompanied by steamed puttu made with locally grown rice and coconut, creating hearty morning meals that provide energy for the day\'s plantation work. Local restaurants serve specialties like appam with vegetable stew prepared using organic vegetables grown in kitchen gardens, while traditional Kerala fish curry is adapted using locally available freshwater fish from mountain streams. The tribal communities contribute unique dishes featuring wild honey collected from cliff faces, various forest greens and medicinal plants prepared as nutritious curries, and traditional preparations of locally hunted small game (where legally permitted) cooked with indigenous spices and herbs. Munnar\'s cool climate allows for excellent cultivation of temperate vegetables like cabbage, carrots, and beans, which feature in continental dishes served at plantation bungalows and heritage hotels, often prepared with European techniques learned during the colonial era but incorporating local spice blends. The region\'s numerous spice gardens provide incredibly fresh cardamom, pepper, cinnamon, and cloves that transform even simple rice and curry combinations into aromatic feasts. Local bakeries, established to serve the plantation community, continue to produce excellent fresh bread, cakes, and pastries that pair perfectly with the region\'s exceptional tea, while roadside stalls offer freshly roasted corn, sweet potatoes, and peanuts that provide perfect snacks during mountain explorations.',
                whyVisit: 'Munnar offers visitors an extraordinary range of experiences that combine natural beauty, adventure activities, cultural immersion, and educational opportunities in a setting that feels like a piece of paradise carved from the Western Ghats. The region\'s tea plantations provide the foundation for numerous visitor experiences, from guided tours of working tea factories where visitors can observe the entire process of tea production from fresh leaf to finished product, learning about the subtle art of tea grading, fermentation, and packaging while sampling different varieties of high-quality teas produced in the local estates. The famous Tata Tea Museum, housed in a restored colonial-era factory, offers fascinating insights into the history of tea cultivation in Munnar through exhibits of vintage equipment, historical photographs, and artifacts that tell the story of how this remote mountain region became one of India\'s premier tea-producing areas. Trekking enthusiasts will find Munnar to be a paradise of trails that range from gentle walks through tea gardens suitable for all fitness levels to challenging mountain hikes that reward climbers with spectacular panoramic views of the surrounding landscape. The trek to Anamudi Peak, South India\'s highest point at 2,695 meters, represents the ultimate challenge for serious hikers, while shorter trails to viewpoints like Top Station and Echo Point provide easier access to stunning vistas and photographic opportunities. Eravikulam National Park, located just outside Munnar town, protects a crucial population of the endangered Nilgiri tahr, a mountain goat species endemic to the Western Ghats, and offers visitors the rare opportunity to observe these magnificent animals in their natural grassland habitat while also exploring the park\'s shola forests and learning about high-altitude ecosystem conservation. Adventure sports enthusiasts can experience the thrill of paragliding over tea plantations, with qualified instructors providing tandem flights that offer bird\'s-eye views of the rolling green landscape, while rock climbing and rappelling opportunities exist at various locations around Munnar for those seeking more challenging adventures. The numerous waterfalls around Munnar, including Lakkam Falls, Attukad Falls, and Cheeyappara Falls, provide perfect destinations for picnics, photography, and refreshing dips in natural pools, with each waterfall offering its own character and accessibility depending on the season and recent rainfall. Wildlife enthusiasts can explore the diverse ecosystems of the region through guided nature walks that reveal the incredible biodiversity of the Western Ghats, from colorful birds and butterflies to rare orchids and medicinal plants, while photography workshops led by local experts help visitors capture the perfect shots of landscapes, wildlife, and cultural subjects. The cool climate of Munnar makes it an ideal destination for romantic getaways, with numerous scenic locations perfect for couples seeking intimate moments amid natural beauty, while the abundance of luxury resorts and boutique hotels provides accommodation options that complement the romantic atmosphere with world-class amenities and service.'
            },
            {
                id: 'alleppey-backwaters',
                name: 'Alleppey Backwaters',
                image: 'https://miro.medium.com/1*MGLoMtfmdM0uWvckntBlOA.png',
                description: 'Rightfully acclaimed as the "Venice of the East," Alleppey (officially known as Alappuzha) serves as the gateway to Kerala\'s legendary backwaters, an intricate maze of interconnected lagoons, lakes, canals, and rivers that stretch across nearly 900 square kilometers, creating one of the most unique and enchanting aquatic landscapes found anywhere in the world. This extraordinary network of waterways, formed by the complex deltaic system where multiple rivers meet the Arabian Sea, has created a parallel universe where life flows at the gentle pace of moving water, where transportation occurs primarily by boat, and where the rhythm of existence is determined by tides, monsoons, and the seasonal cycles of rice cultivation and fishing that have sustained local communities for over a thousand years. The backwaters represent far more than just a tourist destination; they embody a complete way of life that has evolved in perfect harmony with the aquatic environment, where traditional houseboats called kettuvallams – originally rice barges that transported the region\'s abundant harvest from inland areas to coastal ports – have been transformed into floating accommodations that allow visitors to experience this water world from the inside, drifting silently through palm-fringed canals where time seems to have stopped centuries ago. The experience of cruising through these backwaters reveals layer upon layer of life and activity: fishermen casting their nets in the early morning mist, their silhouettes creating artistic compositions against the soft light filtering through coconut palms; women washing clothes on steps leading down to the water, their colorful saris creating brilliant splashes of color against the green backdrop; children playing along the banks and occasionally diving into the water with joyful abandon; farmers tending to their paddy fields that stretch like green carpets interrupted only by meandering waterways and clusters of coconut palms; and everywhere the gentle sounds of water lapping against boat hulls, palm fronds rustling in the breeze, and the calls of countless birds that make these waterways their home. The geography of Alleppey\'s backwaters encompasses multiple distinct environments, from the broader lakes like Vembanad Lake (India\'s longest lake) where houseboats can spread their sails and cruise at leisurely speeds, to narrow canals barely wide enough for a single boat that provide intimate access to village life and agricultural areas, to tidal estuaries where fresh and salt water mix, creating unique ecosystems that support diverse fish populations and serve as nurseries for marine life.',
                culture: 'The backwaters of Alleppey represent the heart of Kerala\'s ancient water-centric civilization, where communities have developed sophisticated lifestyles, economic systems, and cultural practices specifically adapted to life in an aquatic environment characterized by seasonal flooding, monsoon variations, and the constant interplay between fresh and salt water that defines this unique deltaic region. For over a millennium, the people of this region have built their entire existence around the rhythms of water, developing traditional industries that take advantage of the aquatic environment while maintaining sustainable practices that have preserved the ecosystem\'s delicate balance. Coir making, the process of extracting fiber from coconut husks, represents one of the most important traditional industries, with entire families engaged in the labor-intensive process of retting, beating, and spinning coconut fiber into ropes, mats, and other products that were historically exported throughout the Indian Ocean region and continue to provide livelihoods for thousands of families. Toddy tapping, the extraction of palm wine from coconut and palm trees, represents another traditional occupation that requires specialized skills passed down through generations, with toddy tappers climbing towering palms twice daily to collect the sweet sap that can be consumed fresh or fermented into an alcoholic beverage that plays an important role in local social and religious customs. Rice cultivation in the backwater region follows unique patterns adapted to the seasonal flooding and varying salinity levels, with farmers utilizing traditional varieties of rice that can tolerate salt water intrusion and sophisticated systems of bunds, canals, and pumps that control water levels in the paddy fields. The famous Nehru Trophy Boat Race, held annually in Vembanad Lake, showcases the region\'s rich maritime heritage through spectacular competitions featuring the sleek snake boats (chundan vallams) that can reach lengths of over 100 feet and require crews of more than 100 rowers working in perfect synchronization, creating a spectacle that combines athletic competition, cultural celebration, and community pride in a uniquely Kerala tradition. The architectural heritage of the backwater region reflects the adaptation to aquatic living, with traditional homes built on stilts or elevated foundations, featuring distinctive red tile roofs, wooden construction techniques that can withstand humidity and seasonal flooding, and design elements like interior courtyards and cross-ventilation that provide comfort in the tropical climate. Local cuisine in the backwater region represents some of Kerala\'s most distinctive and flavorful cooking, taking advantage of the abundance of fresh fish, coconut, and rice while incorporating unique preparation methods and spice combinations that reflect both the availability of ingredients and the cultural preferences of communities whose lives revolve around water and agriculture.',
                localFlavour: 'The Alleppey backwaters region boasts some of Kerala\'s most extraordinary culinary traditions, built around the incredible abundance of fresh fish, prawns, and crabs harvested daily from the interconnected network of canals, lagoons, and estuaries that define this aquatic landscape. The famous karimeen (pearl spot fish), considered the pride of Kerala\'s backwaters, is prepared in numerous traditional ways, from the iconic karimeen pollichathu where the fish is marinated in spices and wrapped in banana leaves before being pan-fried to perfection, to rich curries cooked with coconut milk and curry leaves that showcase the fish\'s delicate flavor. Prawn preparations are equally spectacular, with dishes like chemmeen curry (prawn curry) featuring locally caught tiger prawns cooked in thick coconut gravy with traditional spices, while konju peera combines prawns with grated coconut and green chilies for a dry preparation that perfectly complements steamed rice. The region\'s famous toddy (fermented palm wine) plays a central role in local food culture, not only as a beverage but also as an ingredient in various dishes and as the perfect accompaniment to spicy seafood preparations. Traditional duck dishes, particularly the celebrated duck roast prepared with locally raised ducks and aromatic spice blends, represent another cornerstone of backwater cuisine, often served during special occasions and festivals. The abundance of coconut palms provides fresh coconut in various forms - from tender coconut water and meat to rich coconut milk and grated coconut that forms the base of countless curries and chutneys. Rice remains the staple grain, with special varieties like the aromatic jeerakasala rice and red rice grown in the paddy fields that are interspersed throughout the backwater landscape. Local specialties also include fish pickle (meen achar) prepared with freshly caught fish and preserved in coconut oil and spices, providing a tangy accompaniment that can last for months, and various types of traditional sweets made with coconut, jaggery, and rice flour that reflect the region\'s agricultural abundance.',
                whyVisit: 'The Alleppey backwaters offer visitors an unparalleled opportunity to experience one of India\'s most unique and tranquil environments through a variety of activities and experiences that range from luxurious relaxation aboard traditional houseboats to active exploration of village life, cultural immersion, and adventure activities that showcase the incredible diversity and beauty of Kerala\'s aquatic landscape. The quintessential backwater experience involves cruising aboard a kettuvallam houseboat, these remarkable vessels that have been converted from traditional rice barges into floating hotels complete with modern amenities while retaining their distinctive curved architecture, thatched roofs, and wooden construction that allows them to glide silently through even the narrowest canals without disturbing the peaceful atmosphere or disrupting local life. Houseboat cruises can range from day trips that provide a taste of backwater life to multi-day expeditions that allow for deep immersion in the rhythm of water travel, with opportunities to witness spectacular sunrises and sunsets that paint the water and sky in brilliant colors, observe the daily routines of fishing and farming communities, and experience the profound peace that comes from traveling at the gentle pace of drifting water. The culinary experiences aboard houseboats represent some of the finest examples of Kerala cuisine, with onboard chefs preparing fresh fish caught from the very waters through which the boat travels, utilizing coconut, spices, and vegetables sourced from villages along the route, and creating meals that perfectly complement the serene setting and leisurely pace of backwater travel. Beyond houseboat cruising, the backwaters offer numerous opportunities for more active exploration, including canoe rides through narrow canals that provide access to areas too small for larger vessels, allowing visitors to observe village life up close, interact with local families, and gain intimate insights into traditional occupations like coir making, fishing, and farming. Village walks and bicycle tours provide land-based exploration opportunities that complement water-based activities, allowing visitors to experience rural Kerala life, visit traditional homes, observe agricultural practices, and participate in cultural activities like cooking classes, craft workshops, and festival celebrations. The backwaters also serve as an excellent base for experiencing Kerala\'s renowned Ayurvedic treatments and wellness traditions, with numerous resorts and specialized centers offering authentic therapies in settings that combine natural beauty with traditional healing practices, creating ideal environments for relaxation, rejuvenation, and spiritual renewal. Adventure enthusiasts can engage in various water sports including kayaking, fishing expeditions with local fishermen, and even swimming in designated areas, while photography enthusiasts will find endless subjects ranging from dramatic landscapes and wildlife to intimate portraits of local life and cultural activities. The famous snake boat races, held during various festivals throughout the year but most spectacularly during the Nehru Trophy competition, provide visitors with opportunities to witness one of Kerala\'s most exciting and colorful cultural events, where the combination of athletic competition, traditional music, and community celebration creates an unforgettable spectacle that embodies the spirit and heritage of the backwater region.'
            },
            {
                id: 'wayanad',
                name: 'Wayanad',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpr0K6VBTfjbw3vz_gsK3o59s8LOKELvDChg&s',
                description: 'Nestled in the Western Ghats at an altitude of 700-2100 meters, Wayanad is Kerala\'s wild heart where pristine forests meet rolling hills and cascading waterfalls. This biodiversity hotspot houses two wildlife sanctuaries teeming with elephants, tigers, leopards, and over 300 bird species. Ancient caves like Edakkal hold prehistoric petroglyphs dating back 8,000 years, revealing secrets of early human civilization. Spice plantations carpet the hills with cardamom, pepper, vanilla, and coffee, filling the air with exotic fragrances. Tribal settlements preserve age-old traditions while eco-tourism initiatives showcase sustainable living practices. The district\'s numerous waterfalls, including the spectacular Soochipara and Meenmutty falls, create natural swimming pools amidst lush greenery.',
                culture: 'Home to indigenous tribes like the Paniyas, Adiyars, and Kurichiyas, Wayanad preserves ancient tribal traditions, art forms, and sustainable farming practices. The region\'s name derives from \'Vayal Nadu\' meaning \'land of paddy fields.\' Historical sites including Jain temples and Sultan Bathery fort reflect the area\'s diverse religious and cultural heritage. Tribal festivals, traditional medicines, and organic farming showcase a harmonious relationship with nature.',
                localFlavour: 'Wayanad\'s cuisine reflects the rich culinary heritage of its indigenous tribal communities combined with traditional Kerala flavors, creating a unique gastronomic experience centered around organic ingredients sourced directly from the region\'s pristine forests and sustainable farms. The famous bamboo rice (mulayari), harvested from bamboo groves during specific seasons, offers a nutty, aromatic alternative to regular rice and is considered a delicacy among tribal communities who prepare it in traditional methods passed down through generations. Wild honey collected from cliff-dwelling bees provides natural sweetness to numerous tribal dishes and is prized for its medicinal properties and intense flavor that varies depending on the seasonal flowers from which the bees collect nectar. Traditional tribal preparations include various wild vegetables and medicinal plants like moringa leaves, wild spinach, and forest mushrooms that are prepared as nutritious curries and stir-fries using indigenous spices and coconut. The region\'s coffee plantations produce some of India\'s finest arabica beans, which are roasted fresh and brewed using traditional methods to create rich, aromatic coffee that perfectly complements the cool mountain mornings. Wayanad\'s spice gardens contribute fresh cardamom, pepper, vanilla, and cinnamon that enhance both traditional tribal dishes and contemporary Kerala cuisine served in local restaurants and homestays. The famous Wayanad banana varieties, including the small sweet nendran bananas, are used in numerous preparations from simple snacks to elaborate payasam (rice pudding) desserts. Local specialties also include traditional rice dishes prepared using indigenous red rice varieties, coconut-based curries featuring locally sourced vegetables, and unique tribal preparations of game meat (where culturally appropriate and legally permitted) cooked with forest herbs and traditional smoking techniques.',
                whyVisit: 'Trek to hidden waterfalls and viewpoints like Chembra Peak with its heart-shaped lake, safari through Wayanad Wildlife Sanctuary to spot elephants and tigers, explore the mysterious Edakkal Caves with ancient rock art, experience tribal culture and organic spice plantations, enjoy adventure activities like zip-lining and rock climbing, stay in eco-friendly tree houses and bamboo cottages, and witness the rare phenomenon of bioluminescent mushrooms during monsoon season.'
            }
        ],
        foods: [
            {
                name: 'Appam & Stew',
                description: 'Soft, lacy rice pancakes served with aromatic coconut milk vegetable stew',
                image: 'https://onionz.in/uploads/items/41b650ca8d8c3530d3d18732e7c44e2b.jpeg'
            },
            {
                name: 'Kerala Fish Curry',
                description: 'Spicy fish curry in coconut milk with curry leaves and kokum',
                image: 'https://sc0.blr1.cdn.digitaloceanspaces.com/article/146843-jnxhqckdaa-1598964061.jpg'
            },
            {
                name: 'Puttu & Kadala',
                description: 'Steamed rice flour cylinders with spiced black chickpea curry',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XSIdUGs4C7oqSdrnSMbJhAFXl9dMUPqZbw&s'
            },
            {
                name: 'Banana Chips',
                description: 'Crispy deep-fried plantain slices - Kerala\'s favorite crunchy snack',
                image: 'https://ganguram.com/cdn/shop/files/banana-chips-1_f31bba50-74dc-45d6-b728-b2befe11cb2c.jpg?v=1756981450'
            },
            {
                name: 'Payasam',
                description: 'Traditional sweet rice pudding with milk, jaggery, and nuts',
                image: 'https://static.toiimg.com/thumb/52290082.cms?imgsize=443885&width=800&height=800'
            },
            {
                name: 'Karimeen Fry',
                description: 'Pearl spot fish marinated and fried - a Kerala backwater specialty',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXH9EJA390bKey8bfZdQaEjXjfXr3_8YXb_g&s'
            }
        ]
    },
    shillong: {
        name: 'Shillong, Meghalaya',
        places: [
            {
                id: 'shillong-peak',
                name: 'Shillong Peak',
                image: 'https://hblimg.mmtcdn.com/content/hubble/img/shillong/mmt/activities/t_ufs/m_activities_Shillong_Laitlum%20Canyons_l_400_640.jpg',
                description: 'Rising majestically to 1,965 meters above sea level, Shillong Peak stands as the crown jewel of Meghalaya\'s capital, offering breathtaking 360-degree views of the rolling Khasi Hills. On clear days, the panorama extends beyond the cityscape to reveal the Bangladesh plains shimmering in the distance like a mirage. The peak serves as a sacred site for the indigenous Khasi people, who believe it houses benevolent spirits. The Indian Air Force radar station at the summit adds a modern touch to this ancient landscape. During winter mornings, clouds often blanket the valleys below, creating the illusion of floating islands. The drive up the winding roads reveals terraced hillsides, pine forests, and traditional Khasi villages where corrugated iron roofs glint in the mountain sunlight.',
                culture: 'Sacred to the Khasi tribe, Shillong Peak holds deep spiritual significance in local folklore and is considered the abode of Lei Shyllong, the deity after whom the city is named. Traditional ceremonies and offerings are still conducted here by local communities. The peak represents the harmonious coexistence of indigenous beliefs with modern infrastructure, symbolizing Meghalaya\'s unique cultural identity.',
                localFlavour: 'The culinary landscape around Shillong Peak reflects the unique Khasi tribal heritage combined with influences from neighboring states and colonial British traditions, creating a distinctive northeastern Indian cuisine that emphasizes fresh, local ingredients and traditional preservation methods. The famous Khasi dish jadoh, a fragrant rice preparation cooked with pork or chicken and flavored with turmeric and ginger, represents the heart of local cuisine and is often prepared during festivals and special occasions at the peak\'s surrounding villages. Doh khlieh, a traditional pork salad made with boiled pork, onions, chili, and lime juice, showcases the Khasi preference for simple yet flavorful preparations that highlight the quality of locally raised meat. The region\'s abundant rainfall and cool climate create perfect conditions for growing unique vegetables like bamboo shoots, which are fermented and used in various curries and stews that provide warmth during the chilly mountain evenings. Local markets around Shillong offer an array of traditional foods including smoked meats, fermented fish, and indigenous vegetables that reflect the Khasi community\'s sustainable food practices developed over centuries of mountain living. The area is also famous for its excellent quality ginger and turmeric, which are used generously in local cooking and are available fresh from small family farms dotting the hillsides. Traditional Khasi meals are often accompanied by rice beer (kyat) brewed using indigenous methods and consumed during festivals and social gatherings. The influence of Christian missionary activities has also introduced bread-making traditions, resulting in excellent local bakeries that produce fresh bread and pastries perfect for enjoying with the region\'s locally grown tea during cool mountain mornings.',
                whyVisit: 'Experience sunrise and sunset views that paint the entire landscape in golden hues, photograph the spectacular panoramic vistas of Shillong city and surrounding hills, visit the sacred groves and learn about Khasi spiritual traditions, enjoy the cool mountain climate perfect for hiking and photography, explore nearby attractions like the Laitlum Canyons, and witness the unique cloud formations that make the peak a meteorological wonder.'
            },
            {
                id: 'elephant-falls',
                name: 'Elephant Falls',
                image: 'https://media1.thrillophilia.com/filestore/a3bybhn9ejip867s2vc1mdnuqrzd_shutterstock_1616020981.jpg',
                description: 'Originally named Ka Kshaid Lai Pateng Khohsiew by the Khasi people, meaning "Three Step Waterfall," Elephant Falls earned its English name from a rock formation that resembled an elephant until it was destroyed in an earthquake in 1897. This magnificent three-tiered cascade plunges through dense forest, creating a natural symphony as water tumbles over rocky ledges adorned with ferns and mosses. Each tier offers a unique perspective - the first falls through a narrow gorge, the second spreads into a wide curtain of water, and the third creates a serene pool perfect for reflection. The surrounding subtropical forest buzzes with exotic birds, butterflies, and the occasional sighting of rare orchids clinging to ancient trees. Monsoons transform the falls into a thunderous spectacle, while winter reveals delicate formations in the mist.',
                culture: 'The falls hold special significance in Khasi mythology and are considered sacred by local communities who believe the waters possess healing properties. Traditional Khasi names for natural landmarks reflect the community\'s deep connection with their environment. The area showcases the indigenous practice of forest conservation through sacred groves, demonstrating sustainable relationships between communities and nature.',
                localFlavour: 'The area around Elephant Falls offers visitors authentic Khasi culinary experiences that reflect the indigenous community\'s deep connection with the surrounding forest and their traditional methods of food preparation and preservation. Local food stalls and small eateries near the falls serve traditional Khasi snacks including tungrymbai (fermented soybean curry) served with rice, providing a protein-rich meal that has sustained the mountain communities for generations. The famous Khasi red rice, grown in the terraced fields visible from various viewpoints around the falls, forms the foundation of most meals and offers a nutty flavor and chewy texture that pairs perfectly with local vegetable curries and meat preparations. Fresh stream fish caught from the clear mountain waters are prepared simply with minimal spices, allowing the natural flavors to shine through, while bamboo shoot pickles and fermented vegetables provide tangy accompaniments that aid digestion and add complexity to simple rice meals. The surrounding forest provides various edible ferns, wild mushrooms, and medicinal plants that skilled Khasi cooks incorporate into nutritious soups and curries, creating dishes that are both flavorful and beneficial for health. Local honey harvested from wild bees that inhabit the forest around the falls is prized for its unique flavor profile influenced by the diverse flowering plants of the region. Traditional beverages include fresh stream water that is considered particularly pure and refreshing, as well as rice beer brewed using indigenous methods and consumed during festivals and community gatherings. Small vendors also offer fresh seasonal fruits like plums, peaches, and local varieties of citrus that grow well in the region\'s temperate climate and provide perfect refreshments after trekking to the various viewpoints.',
                whyVisit: 'Trek through well-maintained trails with multiple viewpoints, photograph the dramatic three-tier cascade from different angles, enjoy natural pools perfect for a refreshing dip, explore the rich biodiversity of the surrounding subtropical forest, discover hidden caves behind the waterfalls, experience the therapeutic sound of cascading water, and visit during monsoons for the most spectacular flow or winter for clearer photography opportunities.'
            },
            {
                id: 'umiam-lake',
                name: 'Umiam Lake',
                image: 'https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/grgtujfcdm07yd6payxq.jpg',
                description: 'Created by damming the Umiam River in the early 1960s, this pristine reservoir spans 220 square kilometers and serves as both a vital source of hydroelectric power and a breathtaking natural wonder. Known locally as "Barapani" meaning "big water," the lake transforms the landscape into a series of emerald fjords surrounded by rolling hills covered in pine forests. The crystal-clear waters reflect the ever-changing sky, creating a mirror-like surface that doubles the beauty of the surrounding landscape. Small islands dot the lake, accessible by boat and perfect for picnics and photography. Adventure enthusiasts flock here for water sports including kayaking, boating, and water skiing, while the surrounding hills offer excellent trekking opportunities. During winter mornings, mist rises from the warm water surface, creating ethereal scenes that photographers dream of capturing.',
                culture: 'The lake represents Meghalaya\'s successful balance between development and environmental conservation. Local Khasi communities have adapted their fishing and tourism practices around the reservoir, creating sustainable livelihoods while preserving the pristine environment. The area has become a symbol of eco-friendly tourism in Northeast India, where traditional knowledge meets modern conservation practices.',
                localFlavour: 'Umiam Lake\'s culinary offerings showcase the best of Khasi cuisine enhanced by the abundance of fresh fish from the reservoir\'s clear waters, creating a unique dining experience that combines traditional tribal flavors with the scenic beauty of the lake setting. The lake\'s fish, particularly the prized carp and local varieties, are prepared using traditional Khasi methods that emphasize simplicity and natural flavors, often grilled over open fires or steamed in banana leaves with minimal spices to allow the fish\'s freshness to shine through. Lakeside restaurants and local eateries serve the famous Khasi fish curry prepared with the day\'s fresh catch, cooked in aromatic broths flavored with local herbs, ginger, and turmeric, creating comforting meals that perfectly complement the cool lake breeze. The surrounding pine forests contribute a unique element to local cuisine through the collection of pine nuts and various wild mushrooms that appear seasonally, providing ingredients for specialized dishes that reflect the area\'s highland environment. Traditional Khasi preparations like ja don (boiled pork with minimal seasoning) and tungrymbai (fermented soybean preparation) are commonly served at local establishments, offering visitors authentic tastes of indigenous cuisine. The cooler climate around the lake also supports cultivation of temperate vegetables like potatoes, cabbages, and beans, which feature prominently in local vegetable preparations and soups that provide warmth during chilly evenings. Rice beer (kyat) brewed using traditional methods is often available at local gatherings and adds to the authentic cultural experience, while fresh lake water is prized for its purity and is used in preparing traditional teas and beverages. Local vendors also offer fresh seasonal fruits and homemade snacks that visitors can enjoy while taking in the spectacular lake views, creating perfect moments that combine natural beauty with culinary satisfaction.',
                whyVisit: 'Enjoy boating and kayaking on pristine waters surrounded by hills, experience water sports like jet skiing and parasailing, explore small islands perfect for camping and photography, trek through pine forests with spectacular lake views, indulge in fresh fish cuisine at lakeside restaurants, witness magical sunrise and sunset reflections on the water, stay in eco-friendly resorts with panoramic lake views, and participate in adventure activities organized by local tour operators.'
            }
        ],
        foods: [
            {
                name: 'Jadoh',
                description: 'Fragrant rice cooked with pork, turmeric, and ginger - Khasi signature dish',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXydqOpUR0qXilME2YpciEo1Fa5hoxv--Ig&s'
            },
            {
                name: 'Tungrymbai',
                description: 'Fermented soybean curry with pork - protein-rich Khasi traditional dish',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEd8chkW9D6V9qtTDEq6nHsWrIUibURtaz2g&s'
            },
            {
                name: 'Doh Khlieh',
                description: 'Traditional pork salad with onions, chilies, and lime - favorite Khasi appetizer',
                image: 'https://blog.swiggy.com/wp-content/uploads/2024/08/Image-No-4-Doh-Khlieh-1024x538.png'
            },
            {
                name: 'Kyat (Rice Beer)',
                description: 'Traditional fermented rice beer brewed using indigenous tribal methods',
                image: 'https://www.datocms-assets.com/75079/1723751175-style-school-sticky-rice-beer-1.jpg'
            },
            {
                name: 'Bamboo Shoot Curry',
                description: 'Fermented bamboo shoots with pork or fish - northeastern staple cuisine',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Ihl-mThIOI9fvv4XdXAadCH5BNmdbZZnLw&s'
            },
            {
                name: 'Pumaloi',
                description: 'Steamed rice cake wrapped in banana leaves for festivals and ceremonies',
                image: 'https://curtaincalladventures.com/wp-content/uploads/2022/04/pumaloi-steamed-rice-cakes.jpg'
            }
        ],
        journey: {
            title: "Wandering Through Shillong",
            subtitle: "Meghalaya Through My Eyes",
            images: {
                airport: "https://i.postimg.cc/vmMrwqnj/Whats-App-Image-2025-12-15-at-20-01-29.jpg",
                umiamLake: "https://i.postimg.cc/5tnCdxbf/Whats-App-Image-2025-12-15-at-20-01-47.jpg",
                donBosco: "https://i.postimg.cc/nV6Tw1d8/Whats-App-Image-2025-12-15-at-20-02-34.jpg",
                policeBazaar: "https://i.postimg.cc/0jgmZV9C/Whats-App-Image-2025-12-15-at-20-03-19.jpg",
                elephantFalls: "https://i.postimg.cc/90jRyzBn/Whats-App-Image-2025-12-15-at-20-03-32.jpg",
                personal: "https://i.postimg.cc/zXz3Ns2R/Whats-App-Image-2025-12-15-at-20-03-43.jpg",
                caves: "https://i.postimg.cc/wM6x6N2L/Whats-App-Image-2025-12-15-at-20-05-39.jpg",
                nohkalikai: "https://i.postimg.cc/zX2DrVgf/Whats-App-Image-2025-12-15-at-20-06-11.jpg",
                doubleDecker: "https://i.postimg.cc/tCJy2pmD/Whats-App-Image-2025-12-15-at-20-06-26.jpg",
                blueLagoon: "https://i.postimg.cc/fyL42f57/Whats-App-Image-2025-12-15-at-20-06-36.jpg",
                dawki: "https://i.postimg.cc/WbxR8rZr/Whats-App-Image-2025-12-15-at-20-07-23.jpg"
            },
            content: `I began this journey with a flight from Bangalore to Guwahati, carrying equal parts excitement and curiosity. As the plane landed, I knew I was stepping into a completely different world. From Guwahati, we had already booked a car, and as we started driving toward Shillong, the roads slowly curled into the hills. The air felt cooler, fresher, and with every turn, Meghalaya began to reveal itself.

[IMG:airport]

**Umiam Lake – Where the Journey Truly Began**

Our first stop was Umiam Lake, and honestly, it felt like the journey truly began there. The lake was unbelievably beautiful—wide, calm, and surrounded by gentle green hills. I remember standing there quietly, watching the clouds reflect on the water, feeling an unexpected sense of peace. It was one of those places where you don't feel the need to talk—you just stand and absorb everything.

[IMG:umiamLake]

**Shillong – A City That Feels Alive**

We reached Shillong and went straight to the Don Bosco Museum. Walking through the museum felt like slowly understanding the soul of the Northeast. Each floor told stories of tribes, traditions, and cultures I knew very little about before. It made me appreciate the region beyond its landscapes.

[IMG:donBosco]

After that, we checked into our hotel to rest for a bit before heading out again. In the evening, we went to Police Bazaar, which felt like the heartbeat of Shillong. The place was lively, colorful, and full of energy. We walked through the streets, bought small tourist souvenirs, and just enjoyed being there among locals and travelers. It felt warm, familiar, and welcoming.

[IMG:policeBazaar]

**Elephant Falls – Nature in Its Raw Form**

Next on our list was Elephant Falls. The moment we got closer, we could hear the water before we saw it. Watching the waterfall rush down with such force was refreshing and calming at the same time. The mist in the air and the greenery around made the whole experience feel raw and natural.

[IMG:elephantFalls]

[IMG:personal]

**Mawsmai Cave – A Step into the Unknown**

Visiting Mawsmai Cave was a completely different experience. Walking inside the dark, narrow cave was both exciting and slightly uncomfortable. Water dripped from above, and the silence felt heavy. But that's what made it special—it reminded me how powerful and ancient nature really is.

[IMG:caves]

**Nohkalikai Falls – Powerful and Emotional**

Nohkalikai Falls left me speechless. Standing at the edge and looking down at the water falling from such a height was overwhelming. The view was dramatic, almost emotional. There was something about the place that made me stand still for a long time, just looking, thinking, and feeling.

[IMG:nohkalikai]

**Krang Suri (Kyrem) Falls – A Place I'll Never Forget**

Among all the places I visited, Krang Suri Falls felt truly magical. The water was unbelievably clear and blue, and the surroundings were so peaceful. I remember wishing I could stay there longer. It felt untouched, pure, and quietly beautiful—one of those places that stays with you even after you leave.

**Double Decker Living Root Bridge & Blue Lagoon – Beautiful but Brutal**

The trek to the Double Decker Living Root Bridge and Blue Lagoon was the most challenging part of the trip. The bridge itself was incredible—nature and human patience working together over generations. The Blue Lagoon was stunning and refreshing, making the effort feel worth it.

[IMG:doubleDecker]

But the climb back was exhausting. The endless steps pushed me to my limits, and even physically fit people struggled. I realized this trek isn't for everyone—especially those with heart problems, BP issues, or joint pain. For me, it was both a rewarding and difficult experience. Beautiful, but brutal.

[IMG:blueLagoon]

**Dawki – A Perfect Ending**

Finally, we reached Dawki, and it felt like the perfect way to end the journey. The water was so clear it didn't feel real. Boats looked like they were floating in the air. Standing there, I felt calm, amazed, and grateful. It was one of those moments where you don't want to leave, just stand and remember how incredible the world can be.

[IMG:dawki]

This journey through Meghalaya wasn't just about visiting places—it was about feeling them. The roads, the silence, the effort, the beauty, and the exhaustion all came together to create memories I know I'll carry with me for a long time.`
        }
    },
    goa: {
        name: 'Goa',
        places: [
            {
                id: 'baga-beach',
                name: 'Baga Beach',
                image: 'https://static.toiimg.com/thumb/msid-59486326,width=1200,height=900/59486326.jpg',
                description: 'Stretching along the Arabian Sea coastline in North Goa, Baga Beach pulsates with energy from dawn to dusk, earning its reputation as the party capital of India\'s beach destinations. Named after the Baga Creek that flows into the sea here, this golden sand paradise seamlessly blends Portuguese colonial charm with modern beach culture. By day, the beach transforms into an adventure playground with jet skiing, parasailing, banana boat rides, and dolphin spotting cruises. Colorful beach shacks serve everything from fresh seafood to international cuisine, while vendors offer everything from sarongs to seashells. As sunset approaches, the beach takes on a magical quality with fire dancers, live music, and beachside bars coming alive. The famous Tito\'s and Mambo nightclubs have made Baga synonymous with Goa\'s legendary nightlife, attracting party-goers from around the world.',
                culture: 'Baga represents the cosmopolitan face of Goa where Portuguese colonial heritage meets hippie culture and modern tourism. The beach embodies the famous Goan philosophy of \'Susegad\' - a laid-back approach to life. Local fishermen still cast their nets at dawn, maintaining traditional practices alongside the bustling tourism industry. The area showcases Goa\'s unique blend of Indian and Portuguese influences in architecture, cuisine, and lifestyle.',
                localFlavour: 'Baga Beach offers an extraordinary culinary journey that perfectly embodies Goa\'s unique fusion of Portuguese, Indian, and international flavors, creating a beachside dining experience that ranges from authentic local specialties to cosmopolitan cuisine served in spectacular oceanfront settings. The famous beach shacks that line the shore serve the freshest seafood imaginable, with fishermen bringing their daily catch directly to restaurant kitchens where skilled cooks prepare traditional Goan dishes like fish curry rice, prawn balchão, and the iconic bebinca (traditional Goan dessert) that showcase the region\'s distinctive use of coconut, kokum, and Portuguese-influenced spice blends. Kingfish, pomfret, and tiger prawns are grilled to perfection on open flames, served with traditional accompaniments like sannas (fermented rice cakes) and sol kadhi (a refreshing drink made from coconut milk and kokum), creating meals that perfectly complement the beach atmosphere and sea breezes. The Portuguese heritage of Goa shines through in dishes like sorpotel (spicy pork curry), vindaloo preparations that balance heat with tangy flavors, and various types of chouriço (Goan sausage) that reflect centuries of cultural fusion between European and Indian culinary traditions. Feni, Goa\'s famous cashew-based spirit, flows freely at beachside bars and provides the perfect accompaniment to spicy seafood dishes, while fresh lime soda, coconut water, and tropical fruit juices offer refreshing alternatives for those seeking non-alcoholic options. International cuisine thrives at Baga, with beach shacks and restaurants offering everything from wood-fired pizzas and fresh pasta to Thai curries and Mediterranean grills, reflecting the cosmopolitan nature of this beach destination. The famous Saturday Night Market near Baga offers an additional culinary adventure with food stalls serving everything from traditional Goan sweets and snacks to international street food, creating a vibrant atmosphere where food, music, and culture blend seamlessly under the stars.',
                whyVisit: 'Experience world-class water sports and adventure activities, enjoy vibrant nightlife at famous clubs and beach parties, savor fresh seafood and Goan delicacies at beach shacks, shop for souvenirs and beachwear at the Saturday Night Market, take dolphin watching cruises during sunset, learn to surf or try parasailing for an adrenaline rush, explore nearby attractions like Anjuna Flea Market, and soak in the sun while enjoying the perfect blend of relaxation and excitement.'
            },
            {
                id: 'fort-aguada',
                name: 'Fort Aguada',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX18nbUjnnf4XtYAPID-AaPBTXx008hnR8Q&s',
                description: 'Perched majestically on the Sinquerim coastline, Fort Aguada stands as a testament to Portuguese military architecture and maritime history. Built between 1609-1612, this imposing fortress served as a crucial defense outpost protecting Old Goa from Dutch and Maratha invasions. The fort\'s name derives from \'Água\' (water in Portuguese), as it housed one of Asia\'s largest freshwater storage systems, providing clean water to passing ships. The massive ramparts, built with laterite stones, stretch across the headland offering commanding views of the Arabian Sea. The iconic lighthouse, built in 1864, once guided ships safely to harbor and now serves as a romantic sunset viewpoint. Underground tunnels, ammunition rooms, and bastions reveal the strategic importance of this coastal sentinel. The fort complex includes a church, barracks, and the famous Aguada Jail, which operated until recently.',
                culture: 'Fort Aguada represents 400 years of Portuguese colonial legacy in Goa. The architecture showcases European military engineering adapted to tropical conditions. The fort played a crucial role in protecting the Estado da Índia (Portuguese State of India) and served as a symbol of colonial power. Today, it stands as a protected monument under the Archaeological Survey of India, representing the complex history of colonialism, resistance, and cultural fusion that defines Goa.',
                localFlavour: 'The area surrounding Fort Aguada offers visitors an authentic taste of Goan culinary heritage that reflects the region\'s Portuguese colonial history blended with local Indian influences, creating a unique gastronomic experience enhanced by stunning coastal views and historical ambiance. The nearby restaurants and beach shacks serve traditional Goan-Portuguese dishes that have been perfected over centuries, including the famous fish recheado (stuffed fish marinated in a spicy red masala paste) that showcases the masterful use of local spices, vinegar, and tamarind that Portuguese colonists introduced and adapted to local tastes. Bebinca, the iconic Goan dessert made with layers of coconut milk, eggs, and ghee, reflects the Portuguese influence on local sweets and provides a perfect ending to meals enjoyed while overlooking the Arabian Sea from fort-adjacent establishments. Fresh seafood dominates the local culinary scene, with establishments serving grilled kingfish, butter pepper garlic prawns, and crab xacuti prepared using traditional recipes that balance Portuguese techniques with indigenous Konkani spices and flavors. The famous Goan fish curry, served with steamed rice and prepared using coconut milk, kokum, and aromatic spices, represents the perfect fusion of local ingredients and cooking methods that developed during centuries of Portuguese rule. Local tavernas and beach restaurants also serve traditional pork dishes like sorpotel and vindaloo that originated from Portuguese recipes but evolved to incorporate local ingredients and spice preferences. Feni, the potent cashew-based spirit unique to Goa, is readily available at local establishments and provides an authentic taste of Goan drinking culture, while fresh lime soda and coconut water offer refreshing alternatives that complement the coastal setting perfectly. The combination of historical ambiance, ocean breezes, and centuries-old recipes creates a dining experience that transports visitors back to the colonial era while celebrating the vibrant culinary legacy that continues to define Goan culture.',
                whyVisit: 'Explore well-preserved Portuguese fortifications and military architecture, enjoy panoramic views of the Arabian Sea and Goan coastline, visit the historic lighthouse and learn about maritime navigation, discover underground tunnels and secret passages, witness spectacular sunsets from the ramparts, photograph the iconic fort walls against the blue sea, explore nearby Sinquerim Beach for water sports, and delve into Goa\'s colonial history through guided tours and interpretive displays.'
            },
            {
                id: 'dudhsagar-waterfalls',
                name: 'Dudhsagar Waterfalls',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekQILsBZvKWPayBThGZpQdiDBz7Cv10g4IA&s',
                description: 'Cascading from a height of 310 meters through four distinct tiers, Dudhsagar Falls creates one of India\'s most spectacular natural displays, earning its name meaning "Sea of Milk" from the milky white appearance of rushing water against dark rock faces. Located on the Mandovi River at the border of Goa and Karnataka, this monsoon marvel plunges through the dense Western Ghats forest, creating a thunderous roar that can be heard kilometers away. The falls are best accessed by a thrilling jeep safari through Bhagwan Mahavir Wildlife Sanctuary, where leopards, deer, and exotic birds inhabit the pristine forest. During peak monsoon months, the volume of water transforms the falls into a raging torrent, while the dry season reveals the intricate rock formations and natural pools perfect for swimming. The famous railway bridge spanning the gorge offers a unique vantage point, making it a favorite among photographers and adventure enthusiasts.',
                culture: 'Dudhsagar Falls holds sacred significance for local communities who consider it a manifestation of divine power. The surrounding area is protected within Bhagwan Mahavir Wildlife Sanctuary, showcasing Goa\'s commitment to conservation. Local tribal communities have traditional stories about the falls, and the area represents the harmonious coexistence of tourism and environmental protection in the Western Ghats biodiversity hotspot.',
                localFlavour: 'The culinary experience around Dudhsagar Falls offers visitors a unique blend of Goan coastal cuisine and Western Ghats forest-influenced dishes that reflect both the region\'s Portuguese heritage and its rich natural environment. Local eateries and forest rest houses serve traditional Goan curry and rice combinations featuring fresh river fish caught from the Mandovi River system, prepared with coconut milk, kokum, and aromatic spices that create the perfect comfort food after long treks through the forest. The area\'s spice plantations contribute incredibly fresh cardamom, pepper, cinnamon, and nutmeg that enhance both vegetarian and non-vegetarian dishes served at local establishments, while also providing opportunities for visitors to purchase these spices directly from the source. Traditional tribal communities in the surrounding forest areas contribute unique preparations featuring wild honey collected from forest bees, various edible ferns and forest vegetables prepared as nutritious curries, and medicinal plant-based teas that provide natural energy and healing properties appreciated by trekkers and nature enthusiasts. The famous Goan fish curry takes on special significance in this forest setting, with local cooks using spring water from the hills and fresh herbs from the surrounding jungle to create versions that are both familiar and uniquely adapted to the mountain environment. Bebinca and other traditional Goan sweets are often available at local establishments, providing perfect energy boosts for adventurous activities, while feni and other local beverages offer authentic tastes of Goan culture even in this remote forest setting. The combination of pure mountain air, the sound of cascading water, and fresh local ingredients creates dining experiences that perfectly complement the natural beauty and adventure activities that draw visitors to this spectacular waterfall destination.',
                whyVisit: 'Experience one of India\'s most powerful waterfalls during monsoon season, trek through pristine Western Ghats forest teeming with wildlife, enjoy thrilling jeep safaris to reach the falls, swim in natural rock pools at the base of the falls, photograph the dramatic railway bridge crossing the gorge, spot wildlife including leopards, deer, and colorful birds, explore spice plantations in the surrounding area, and witness the magical transformation of the landscape from lush monsoon greens to golden dry season hues.'
            }
        ],
        foods: [
            {
                name: 'Fish Curry Rice',
                description: 'Goa\'s signature dish - tangy fish curry in coconut milk with steamed rice',
                image: 'https://i.pinimg.com/736x/ce/5a/5a/ce5a5a483a77661006a0d49c79ac89c2.jpg'
            },
            {
                name: 'Vindaloo',
                description: 'Spicy Portuguese-origin pork curry marinated in vinegar and spices',
                image: 'https://www.whiskaffair.com/wp-content/uploads/2021/05/Chicken-Vindaloo-2-3.jpg'
            },
            {
                name: 'Bebinca',
                description: 'Traditional layered Goan dessert with coconut milk, eggs, and ghee',
                image: 'https://ychef.files.bbci.co.uk/1280x720/p0gjfcls.jpg'
            },
            {
                name: 'Prawn Balchão',
                description: 'Spicy pickled prawn with tomatoes, onions, and vinegar',
                image: 'https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/1671166439873-B4VPXCUQH3CGHJUJ1WGB/1871-Goan-Prawn-Balchao-Curry-With-Basmati-Rice.jpeg?format=1500w'
            },
            {
                name: 'Feni',
                description: 'Traditional Goan cashew or palm spirit - unique local alcoholic drink',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRU4C8MRMk1QEH3cBb7u0NwH_ALGQVFJ-vA&s'
            },
            {
                name: 'Sorpotel',
                description: 'Spicy pork with liver and heart, vinegar-spiced - Christmas specialty',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1MjOc8shLxGJp7UY3nwL63as2jnRa027mQ&s'
            }
        ]
    }
};

// Navigation Functions

// Show Home Page (States List)
function showHome() {
    hideAllPages();
    document.querySelector('.main-content').style.display = 'block';
    updateBreadcrumb(['Home']);
    currentState = '';
    currentPlace = '';
    resetScroll();
}

// Keep showLanding for compatibility
function showLanding() {
    showHome();
}

// Show State Page (Places List)
function showStatePage(stateId) {
    hideAllPages();
    document.getElementById('state-page').classList.add('active');
    
    currentState = stateId;
    const stateData = placesData[stateId];
    
    // Update state title
    document.getElementById('state-title').textContent = `Popular Places in ${stateData.name}`;
    
    // Update breadcrumb
    updateBreadcrumb(['Home', stateData.name]);
    
    // Populate places list
    const placesList = document.getElementById('places-list');
    placesList.innerHTML = '';
    
    stateData.places.forEach(place => {
        const placeCard = document.createElement('div');
        placeCard.className = 'place-card';
        placeCard.onclick = () => showPlaceDetail(stateId, place.id);
        
        placeCard.innerHTML = `
            <div class="place-card-image">
                <img src="${place.image}" alt="${place.name}" loading="eager" style="opacity: 1;">
            </div>
            <h4>${place.name}</h4>
            <p class="place-preview">${place.description.substring(0, 80)}...</p>
        `;
        
        placesList.appendChild(placeCard);
    });
    
    // Update foods title and populate foods list
    document.getElementById('foods-title').textContent = `Popular Foods in ${stateData.name}`;
    
    const foodsList = document.getElementById('foods-list');
    foodsList.innerHTML = '';
    
    if (stateData.foods) {
        stateData.foods.forEach(food => {
            const foodCard = document.createElement('div');
            foodCard.className = 'food-card';
            
            foodCard.innerHTML = `
                <div class="food-card-image">
                    <img src="${food.image}" alt="${food.name}" loading="eager" style="opacity: 1;">
                </div>
                <div class="food-card-content">
                    <h4>${food.name}</h4>
                    <p class="food-description">${food.description}</p>
                </div>
            `;
            
            foodsList.appendChild(foodCard);
        });
    }
    
    // Handle journey section (only for Shillong)
    const journeySection = document.getElementById('journey-section');
    if (stateId === 'shillong' && stateData.journey) {
        console.log("Loading Shillong journey section");
        journeySection.style.display = 'block';
        document.getElementById('journey-title').textContent = stateData.journey.title;
        console.log("Journey section should now be visible with Notes button");
        
        // Add event listener to notes button
        addNotesButtonListener();
        
        // Preload images for better performance
        setTimeout(() => {
            const notesGallery = document.getElementById('notes-gallery');
            if (notesGallery) {
                const images = notesGallery.querySelectorAll('img');
                console.log("Preloading", images.length, "note images");
                images.forEach((img, index) => {
                    const newImg = new Image();
                    newImg.onload = () => console.log(`Preloaded image ${index + 1}`);
                    newImg.onerror = () => console.error(`Failed to preload image ${index + 1}:`, img.src);
                    newImg.src = img.src;
                });
            }
        }, 500);
        
        // Integrate subtitle into the content rather than separate
        const journeyText = document.getElementById('journey-text');
        const contentWithSubtitle = `<h4 class="journey-subtitle">${stateData.journey.subtitle}</h4>\n\n${stateData.journey.content}`;
        
        // Convert the content to HTML with proper formatting
        let formattedContent = contentWithSubtitle
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>');
        
        // Process image markers if images are available
        if (stateData.journey.images) {
            formattedContent = formattedContent.replace(/\[IMG:(\w+)\]/g, (match, imageKey) => {
                if (stateData.journey.images[imageKey]) {
                    return `</p><div class="journey-image"><img src="${stateData.journey.images[imageKey]}" alt="Journey memory" loading="lazy"></div><p>`;
                }
                return '';
            });
        }
        
        journeyText.innerHTML = '<p>' + formattedContent + '</p>';
        
        // Hide the separate subtitle element since it's now part of content
        document.getElementById('journey-subtitle').textContent = '';
    } else {
        journeySection.style.display = 'none';
    }
    
    // Re-apply image loading effects for new images
    addImageLoadingEffect();
    resetScroll();
}

// Show Place Detail Page
function showPlaceDetail(stateId, placeId) {
    hideAllPages();
    document.getElementById('place-detail-page').classList.add('active');
    
    currentPlace = placeId;
    const stateData = placesData[stateId];
    const place = stateData.places.find(p => p.id === placeId);
    
    if (!place) return;
    
    // Update breadcrumb
    updateBreadcrumb(['Home', stateData.name, place.name]);
    
    // Populate place details
    const placeImg = document.getElementById('place-image');
    placeImg.src = place.image;
    placeImg.alt = place.name;
    placeImg.style.opacity = '1';
    document.getElementById('place-title').textContent = place.name;
    document.getElementById('place-description').textContent = place.description;
    document.getElementById('place-culture').textContent = place.culture;
    document.getElementById('place-local-flavour').textContent = place.localFlavour;
    document.getElementById('place-why-visit').textContent = place.whyVisit;
    
    // Re-apply image loading effects for the detail image
    addImageLoadingEffect();
    resetScroll();
}

// Go back to state page from place detail
function goBackToState() {
    if (currentState) {
        showStatePage(currentState);
    } else {
        showLanding();
    }
    resetScroll();
}

// Hide all pages
function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Also hide main content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.display = 'none';
    }
}

// Update breadcrumb navigation
function updateBreadcrumb(items) {
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = '';
    
    items.forEach((item, index) => {
        const span = document.createElement('span');
        span.className = 'breadcrumb-item';
        
        if (index === items.length - 1) {
            span.classList.add('active');
            span.textContent = item;
        } else {
            span.textContent = item;
            span.style.cursor = 'pointer';
            
            // Add click handlers for navigation
            if (index === 0) {
                span.onclick = showLanding;
            } else if (index === 1 && currentState) {
                span.onclick = () => showStatePage(currentState);
            }
        }
        
        breadcrumb.appendChild(span);
        
        // Add separator except for last item
        if (index < items.length - 1) {
            const separator = document.createElement('span');
            separator.className = 'breadcrumb-separator';
            separator.textContent = ' > ';
            breadcrumb.appendChild(separator);
        }
    });
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state) {
        if (event.state.page === 'landing') {
            showLanding();
        } else if (event.state.page === 'state') {
            showStatePage(event.state.stateId);
        } else if (event.state.page === 'place') {
            showPlaceDetail(event.state.stateId, event.state.placeId);
        }
    } else {
        showLanding();
    }
});

// Add smooth scrolling for mobile and desktop
function scrollToTop() {
    // Ensure we scroll the main document
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also use smooth scroll if supported
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

// Force scroll reset on page change
function resetScroll() {
    // Multiple methods to ensure scroll reset works
    setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
    }, 100);
}

// Add loading animation for images
function addImageLoadingEffect() {
    // Wait a bit for DOM to be ready, then process images
    setTimeout(() => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Set initial opacity
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            
            img.addEventListener('error', function() {
                console.log('Image failed to load:', this.src);
                // Fallback to a generic travel image if the specific image fails
                this.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80';
                this.style.opacity = '1';
            });
            
            // Force load if image is already cached
            if (img.complete) {
                img.style.opacity = '1';
            }
        });
    }, 200);
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Ensure body can scroll
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    // Show main content directly (no separate landing page)
    hideAllPages();
    document.querySelector('.main-content').style.display = 'block';
    
    // Add history state for home page
    history.replaceState({page: 'home'}, 'Travl - Choose Your Destination', '#destinations');
    
    // Add image loading effects
    setTimeout(addImageLoadingEffect, 100);
});

// Notes functionality
function toggleNotes() {
    console.log("toggleNotes function called");
    const notesGallery = document.getElementById('notes-gallery');
    const notesBtn = document.getElementById('notes-btn');
    
    console.log("Notes gallery element:", notesGallery);
    console.log("Notes button element:", notesBtn);
    
    if (notesGallery && notesBtn) {
        const currentDisplay = window.getComputedStyle(notesGallery).display;
        console.log("Current computed display:", currentDisplay);
        
        if (currentDisplay === 'none') {
            // Show the gallery
            notesGallery.style.display = 'block';
            notesGallery.style.visibility = 'visible';
            notesGallery.style.opacity = '1';
            notesBtn.innerHTML = '📝 HIDE NOTES';
            notesBtn.style.background = 'linear-gradient(135deg, #e53e3e 0%, #c53030 100%)';
            console.log("Notes gallery shown - checking images...");
            
            // Check if images are loading
            setTimeout(() => {
                const images = notesGallery.querySelectorAll('img');
                console.log("Found", images.length, "images in gallery");
                images.forEach((img, index) => {
                    console.log(`Image ${index + 1}:`, img.src, "loaded:", img.complete);
                    if (!img.complete) {
                        img.addEventListener('load', () => {
                            console.log(`Image ${index + 1} loaded successfully`);
                        });
                        img.addEventListener('error', () => {
                            console.error(`Image ${index + 1} failed to load:`, img.src);
                        });
                    }
                });
            }, 100);
            
        } else {
            // Hide the gallery
            notesGallery.style.display = 'none';
            notesBtn.innerHTML = '📝 NOTES';
            notesBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            console.log("Notes gallery hidden");
        }
    } else {
        console.error("Could not find notes gallery or button elements");
        console.error("Gallery exists:", !!notesGallery);
        console.error("Button exists:", !!notesBtn);
        
        // Try to find elements in DOM
        console.log("All elements with 'notes' in id:", document.querySelectorAll('[id*="notes"]'));
    }
}

function openNoteModal(imageUrl) {
    console.log("openNoteModal called with URL:", imageUrl);
    const modal = document.getElementById('note-modal');
    const modalImage = document.getElementById('note-modal-image');
    
    console.log("Modal element:", modal);
    console.log("Modal image element:", modalImage);
    
    if (modal && modalImage) {
        modalImage.src = imageUrl;
        modal.classList.add('active');
        console.log("Modal opened successfully");
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    } else {
        console.error("Could not find modal elements");
    }
}

function closeNoteModal() {
    const modal = document.getElementById('note-modal');
    modal.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
document.addEventListener('click', function(e) {
    const modal = document.getElementById('note-modal');
    if (e.target === modal) {
        closeNoteModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeNoteModal();
    }
});

// Add backup event listener for notes button
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener when the page loads
    setTimeout(function() {
        const notesBtn = document.getElementById('notes-btn');
        if (notesBtn) {
            console.log("Adding backup event listener to notes button");
            notesBtn.addEventListener('click', toggleNotes);
        }
    }, 1000);
});

// Also add event listener when Shillong is loaded
function addNotesButtonListener() {
    setTimeout(function() {
        const notesBtn = document.getElementById('notes-btn');
        if (notesBtn && !notesBtn.hasAttribute('data-listener-added')) {
            console.log("Adding event listener to notes button");
            notesBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleNotes();
            });
            notesBtn.setAttribute('data-listener-added', 'true');
        }
    }, 500);
}

// Export functions for global access (if needed)
window.showLanding = showLanding;
window.showStatePage = showStatePage;
window.showPlaceDetail = showPlaceDetail;
window.goBackToState = goBackToState;
window.toggleNotes = toggleNotes;
window.openNoteModal = openNoteModal;
window.closeNoteModal = closeNoteModal;