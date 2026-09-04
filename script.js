/**
 * Obsidian Fine Art Gallery
 * Artist: B. K. Unagar
 * Curated Collection of Canvas Oil Paintings & Graphite/Charcoal Sketches
 */

const artworks = [
  // ==================== CANVAS PAINTINGS (16 unique works) ====================
  {
    id: "canvas-citrus-harmony",
    title: "Citrus Harmony",
    src: "canvas/canvas-citrus-harmony.png",
    type: "Canvas Painting",
    category: "still-life",
    categoryLabel: "Still Life",
    medium: "Oil on Canvas",
    dimensions: "1048 × 740 px",
    orientation: "Landscape",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A vibrant botanical still life featuring sliced blood oranges, mandarins, and ruby grapefruit segments arranged with lush citrus leaves in a rustic vessel. Celebrates natural illumination and luscious organic textures.",
    detail:
      "Virtuoso control of citrus translucency, pulp detail, and contrasting white background create an immediately striking centerpiece."
  },
  {
    id: "canvas-golden-sundae",
    title: "Golden Sundae Study",
    src: "canvas/canvas-golden-sundae.png",
    type: "Canvas Painting",
    category: "still-life",
    categoryLabel: "Still Life",
    medium: "Oil on Canvas",
    dimensions: "648 × 960 px",
    orientation: "Portrait",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A playful study in reflective glass, featuring velvety scoops of mango and vanilla cream, a cocktail umbrella, and a ripe strawberry nestled in an ornate sundae goblet.",
    detail:
      "Superb mastery of transparent glass reflections, liquid refractions, and warm saturated dessert tones against a muted slate backdrop."
  },
  {
    id: "canvas-crimson-lilies",
    title: "Crimson Lilies in Crystal",
    src: "canvas/canvas-crimson-lilies.png",
    type: "Canvas Painting",
    category: "floral",
    categoryLabel: "Floral",
    medium: "Oil on Canvas",
    dimensions: "958 × 960 px",
    orientation: "Square",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A dramatic arrangement of coral-crimson and white lily blossoms emerging from a low crystal bowl against an intense obsidian background. The deep contrast makes the petals appear illuminated from within.",
    detail:
      "Sculptural petal folds, delicate yellow stamens, and rich surface gloss make this one of the most commanding floral works in the collection."
  },
  {
    id: "canvas-lilac-roses-pitcher",
    title: "Lilac & Roses in Ornate Pitcher",
    src: "canvas/canvas-lilac-roses-pitcher.png",
    type: "Canvas Painting",
    category: "floral",
    categoryLabel: "Floral",
    medium: "Oil on Canvas",
    dimensions: "952 × 1280 px",
    orientation: "Portrait",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A breathtaking classical still life of white lilacs and velvety scarlet roses in an embossed crystal pitcher with gilt filigree. Fallen rose petals rest gracefully on the table.",
    detail:
      "Demonstrates traditional academic realism: textured lilac clusters contrast against smooth rose petals and intricately patterned crystal glass."
  },
  {
    id: "canvas-riverside-twilight",
    title: "Riverside Twilight",
    src: "canvas/canvas-riverside-twilight.png",
    type: "Canvas Painting",
    category: "landscape",
    categoryLabel: "Landscape",
    medium: "Oil on Canvas",
    dimensions: "960 × 800 px",
    orientation: "Landscape",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A tranquil rural riverbank scene capturing a lone boatman silhouetted against calm water reflections under an evening sky. Lush fields and dense trees frame the serene horizon.",
    detail:
      "Poetic atmosphere created through delicate horizontal water brushwork, restrained olive-sage tones, and quiet contemplative lighting."
  },
  {
    id: "canvas-crimson-peony",
    title: "Crimson Peony Bloom",
    src: "canvas/canvas-crimson-peony.png",
    type: "Canvas Painting",
    category: "floral",
    categoryLabel: "Floral",
    medium: "Oil on Canvas",
    dimensions: "960 × 927 px",
    orientation: "Square",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "An intimate close-up of a ruffled crimson peony blossom in full radiance. Ruffled petal edges with subtle white contours curl dramatically over a soft pistachio ground.",
    detail:
      "Masterful depth and velvety texture; each petal layer is sculpted with soft light gradations and rich carmine-to-ruby tones."
  },
  {
    id: "canvas-rose-in-glass",
    title: "Rose in Wine Glass",
    src: "canvas/canvas-rose-in-glass.png",
    type: "Canvas Painting",
    category: "floral",
    categoryLabel: "Floral",
    medium: "Oil on Canvas",
    dimensions: "1080 × 1569 px",
    orientation: "Portrait",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A single delicate pink rose stem submerged in a tall stemmed water glass. The composition embodies purity and stillness through minimalist realism and gradient shadow.",
    detail:
      "The refraction of the submerged stem in clean water and delicate highlights along the glass rim demonstrate refined technical finesse."
  },
  {
    id: "canvas-stargazer-lily",
    title: "Stargazer Lily Elegance",
    src: "canvas/canvas-stargazer-lily.png",
    type: "Canvas Painting",
    category: "floral",
    categoryLabel: "Floral",
    medium: "Oil on Canvas",
    dimensions: "939 × 960 px",
    orientation: "Square",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "Pale pink and white lily blossoms with graceful pointed petals and emerging buds, illuminated against a deep dark background. Long green leaves frame the focal blossom.",
    detail:
      "Soft chiaroscuro lighting accentuates the gentle curving edges and lifelike botanical grace of the lily petals."
  },
  {
    id: "canvas-forest-fawn",
    title: "Forest Fawn",
    src: "canvas/canvas-forest-fawn.png",
    type: "Canvas Painting",
    category: "wildlife",
    categoryLabel: "Wildlife",
    medium: "Oil on Canvas",
    dimensions: "1420 × 1976 px",
    orientation: "Portrait",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "An alert young fawn standing amidst an atmospheric woodland aura. The tender, luminous eyes and soft speckled coat convey innocence and quiet vitality. Signed by B. K. Unagar in Gujarati script.",
    detail:
      "Richly layered fur brushwork and a soft, impressionistic background blur anchor the viewer's focus on the fawn's sensitive expression."
  },
  {
    id: "canvas-open-sky-clouds",
    title: "Open Sky Fields",
    src: "canvas/canvas-open-sky-clouds.png",
    type: "Canvas Painting",
    category: "landscape",
    categoryLabel: "Landscape",
    medium: "Oil on Canvas",
    dimensions: "928 × 960 px",
    orientation: "Square",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A sweeping pastoral vista dominated by majestic, billowing cumulus clouds surging across an amethyst and lilac sky over golden sunlit pastures and woodland groves.",
    detail:
      "Celebrates expansive atmospheric depth and cloud volume, balancing soft airy transitions with crisp tree silhouettes."
  },
  {
    id: "canvas-bearded-iris",
    title: "Bearded Iris in Bloom",
    src: "canvas/canvas-bearded-iris.png",
    type: "Canvas Painting",
    category: "floral",
    categoryLabel: "Floral",
    medium: "Oil on Canvas",
    dimensions: "733 × 960 px",
    orientation: "Portrait",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A botanical portrait of a ruffled pink and wine-red bearded iris with upright leaves and fresh budding flowers rising from a rich obsidian backdrop.",
    detail:
      "Fine textural handling of the delicate petal ruffles and vibrant magenta falls, showcasing pure botanical observation."
  },
  {
    id: "canvas-revered-guru",
    title: "Revered Guru in Saffron",
    src: "canvas/canvas-revered-guru.png",
    type: "Canvas Painting",
    category: "devotional",
    categoryLabel: "Devotional Portrait",
    medium: "Oil on Canvas",
    dimensions: "720 × 858 px",
    orientation: "Portrait",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A devotional portrait of a saintly spiritual master wearing a red turban, sacred tilak, and flowing white beard. The gaze radiates compassion, tranquility, and divine insight. Signed B. K. Unagar.",
    detail:
      "Gentle skin modeling, warm ambient lighting, and delicate hair rendering bestow this painting with profound spiritual presence."
  },
  {
    id: "canvas-krishna-flute-maiden",
    title: "Divine Flute & Maiden",
    src: "canvas/canvas-krishna-flute-maiden.png",
    type: "Canvas Painting",
    category: "devotional",
    categoryLabel: "Devotional",
    medium: "Oil on Canvas",
    dimensions: "719 × 1280 px",
    orientation: "Portrait",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A stylized mythological composition depicting Lord Krishna playing the flute amidst lush forest foliage above a serene maiden adorned with intricate peacock motifs and traditional golden borders.",
    detail:
      "Harmonious blend of Indian classical symbolism, graceful figurative lines, and deep indigo and jade pigments."
  },
  {
    id: "canvas-harvest-bounty",
    title: "Harvest Bounty",
    src: "canvas/canvas-harvest-bounty.png",
    type: "Canvas Painting",
    category: "still-life",
    categoryLabel: "Still Life",
    medium: "Oil on Canvas",
    dimensions: "1440 × 1080 px",
    orientation: "Landscape",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A rich rustic harvest arrangement featuring a ribbed winter melon, ripe heirloom tomatoes, and crisp carrots resting on a dark reflective wooden surface.",
    detail:
      "Exceptional tactile realism—the taut skin of the tomatoes, leafy carrot greens, and melon ribs reflect radiant warmth against the shadowed backdrop."
  },
  {
    id: "canvas-radha-krishna-framed",
    title: "Radha Krishna in Golden Frame",
    src: "canvas/canvas-radha-krishna-framed.png",
    type: "Canvas Painting",
    category: "devotional",
    categoryLabel: "Devotional",
    medium: "Oil on Canvas (Framed)",
    dimensions: "1092 × 976 px",
    orientation: "Landscape",
    framing: "Custom Framed in Rosewood & Gold Trim",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A framed devotional masterpiece depicting an intimate gaze between Radha and Krishna, featuring ornate jewelry, flute, and traditional headdress. Signed by artist B. K. Unagar.",
    detail:
      "The deep blue complexion of Krishna contrasts tenderly with the warm golden tones of Radha, enhanced by a formal gallery frame."
  },
  {
    id: "canvas-celestial-radha-krishna",
    title: "Celestial Radha Krishna",
    src: "canvas/canvas-celestial-radha-krishna.png",
    type: "Canvas Painting",
    category: "devotional",
    categoryLabel: "Devotional",
    medium: "Oil on Canvas",
    dimensions: "812 × 1062 px",
    orientation: "Portrait",
    framing: "Unframed / Studio Canvas",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A breathtaking devotional painting depicting Lord Krishna adorned with golden peacock-feather crown, ornate necklaces, and flute, held in the loving devotion of Radha in a golden veil. Signed B. K. Unagar.",
    detail:
      "One of the crown jewels of the collection. The golden jewelry, intricate textile patterns, and loving expressions capture sublime devotional artistry."
  },

  // ==================== SKETCHES & CHARCOAL STUDIES (10 works) ====================
  {
    id: "sketch-turban-dignitary",
    title: "Rajasthani Dignitary",
    src: "sketch_art/sketch-turban-dignitary.png",
    type: "Pencil & Charcoal Sketch",
    category: "portrait",
    categoryLabel: "Portrait Sketch",
    medium: "Graphite & Pastel on Paper",
    dimensions: "959 × 1280 px",
    orientation: "Portrait",
    framing: "Mounted on Acid-Free Board",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A dignified portrait study of a distinguished nobleman wearing a vibrant striped pagri turban, traditional mustache, and buttoned bandhgala attire. Signed B. K. Unagar.",
    detail:
      "Combines sharp graphite contouring with subtle pastel highlights on the turban, capturing regal pride and personality."
  },
  {
    id: "sketch-charcoal-portrait-man",
    title: "Man of Conviction",
    src: "sketch_art/sketch-charcoal-portrait-man.png",
    type: "Pencil & Charcoal Sketch",
    category: "portrait",
    categoryLabel: "Portrait Sketch",
    medium: "Charcoal & Graphite on Paper",
    dimensions: "1080 × 1623 px",
    orientation: "Portrait",
    framing: "Mounted on Acid-Free Board",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A realistic charcoal study of an expressive man with mustache, crinkled smile lines, and an open, warm gaze. Signed B. K. Unagar.",
    detail:
      "Exceptional tonal shading on facial musculature, crinkles around the eyes, and crisp collar lines that bring the subject to life."
  },
  {
    id: "sketch-girl-with-butterflies",
    title: "Girl with Butterflies",
    src: "sketch_art/sketch-girl-with-butterflies.png",
    type: "Pencil & Charcoal Sketch",
    category: "portrait",
    categoryLabel: "Figurative Sketch",
    medium: "Graphite & Charcoal on Paper",
    dimensions: "1080 × 1440 px",
    orientation: "Portrait",
    framing: "Mounted on Acid-Free Board",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A poetic figurative study of a young woman in contemplation, with delicate butterflies landing upon her outstretched hands and hair. Signed B. K. Unagar.",
    detail:
      "Soft charcoal blending creates a dreamlike, ethereal atmosphere with elegant silhouette work."
  },
  {
    id: "sketch-bird-in-flight",
    title: "Bird in Flight",
    src: "sketch_art/sketch-bird-in-flight.png",
    type: "Pencil & Charcoal Sketch",
    category: "wildlife",
    categoryLabel: "Wildlife Sketch",
    medium: "Graphite on Paper",
    dimensions: "1080 × 1440 px",
    orientation: "Portrait",
    framing: "Mounted on Acid-Free Board",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A dynamic avian drawing capturing a bird sweeping through mid-air with outstretched wings, spread talons, and layered flight feathers. Signed B. K. Unagar.",
    detail:
      "Incredible feather anatomy, quill texture, and kinetic motion preserved through precise graphite strokes."
  },
  {
    id: "sketch-spiritual-guru-profile",
    title: "Profile of Wisdom",
    src: "sketch_art/sketch-spiritual-guru-profile.png",
    type: "Pencil & Charcoal Sketch",
    category: "devotional",
    categoryLabel: "Spiritual Sketch",
    medium: "Pencil on Paper",
    dimensions: "720 × 960 px",
    orientation: "Portrait",
    framing: "Mounted on Acid-Free Board",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A serene profile portrait of a venerable spiritual elder in quiet contemplation, rendered with sensitive cross-hatching. Signed B. K. Unagar.",
    detail:
      "Honors age and spiritual depth through delicate forehead folds, thoughtful gaze, and clean linear contours."
  },
  {
    id: "sketch-loyal-companion-dog",
    title: "Loyal Companion",
    src: "sketch_art/sketch-loyal-companion-dog.png",
    type: "Pencil & Charcoal Sketch",
    category: "wildlife",
    categoryLabel: "Animal Sketch",
    medium: "Charcoal on Paper",
    dimensions: "720 × 960 px",
    orientation: "Portrait",
    framing: "Mounted on Acid-Free Board",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "An expressive canine study of an alert dog with a collared neck, bright energetic eyes, and panting tongue. Signed B. K. Unagar.",
    detail:
      "Vigorous charcoal stroke work that replicates the thick coat texture and lively character of the loyal pet."
  },
  {
    id: "sketch-rural-elder-safa",
    title: "Rural Sentinel",
    src: "sketch_art/sketch-rural-elder-safa.png",
    type: "Pencil & Charcoal Sketch",
    category: "portrait",
    categoryLabel: "Portrait Sketch",
    medium: "Graphite on Paper",
    dimensions: "720 × 960 px",
    orientation: "Portrait",
    framing: "Mounted on Acid-Free Board",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A striking portrait of a traditional village elder glancing over his shoulder, wearing a wrapped safa turban and woven shawl. Signed B. K. Unagar.",
    detail:
      "Strong facial character, intricate turban folds, and confident shading capture the authentic spirit of rural India."
  },
  {
    id: "sketch-pramukh-swami-portrait",
    title: "Pramukh Swami Maharaj",
    src: "sketch_art/sketch-pramukh-swami-portrait.png",
    type: "Pencil & Charcoal Sketch",
    category: "devotional",
    categoryLabel: "Devotional Sketch",
    medium: "Pencil on Paper",
    dimensions: "1080 × 1440 px",
    orientation: "Portrait",
    framing: "Mounted on Acid-Free Board",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A reverent portrait drawing of the beloved spiritual leader HH Pramukh Swami Maharaj wearing his traditional cap and chandan-kumkum tilak. Signed B. K. Unagar.",
    detail:
      "The gentle smile, kind eyes, and textured beard convey the saint's renowned warmth, humility, and divine peace."
  },
  {
    id: "sketch-grace-of-nargis",
    title: "Grace of Nargis",
    src: "sketch_art/sketch-grace-of-nargis.png",
    type: "Pencil & Charcoal Sketch",
    category: "portrait",
    categoryLabel: "Portrait Sketch",
    medium: "Charcoal on Paper",
    dimensions: "867 × 1280 px",
    orientation: "Portrait",
    framing: "Mounted on Acid-Free Board",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "An emotive tribute portrait of legendary Indian cinema actress Nargis Dutt, draped in a gentle dupatta with expressive, soulful eyes. Signed B. K. Unagar.",
    detail:
      "Cinematic contrast and tender facial modeling that honor the classic Golden Age of Indian film."
  },
  {
    id: "sketch-narendra-modi-portrait",
    title: "Narendra Modi Portrait",
    src: "sketch_art/sketch-narendra-modi-portrait.png",
    type: "Pencil & Charcoal Sketch",
    category: "portrait",
    categoryLabel: "Portrait Sketch",
    medium: "Graphite on Paper",
    dimensions: "1080 × 1598 px",
    orientation: "Portrait",
    framing: "Mounted on Acid-Free Board",
    availability: "Available",
    availabilityClass: "available",
    analysis:
      "A realistic pencil portrait of Prime Minister Narendra Modi, capturing his spectacles, trimmed beard, and resolute expression. Signed B. K. Unagar.",
    detail:
      "High precision in the rendering of spectacles, hair textures, and facial contours, showing refined draftsmanship."
  }
];

// Active State
let currentFilter = "all";
let currentFilteredArtworks = [...artworks];
let currentModalIndex = 0;

// DOM Elements
const galleryContainer = document.getElementById("pinterest-gallery");
const filterButtons = document.querySelectorAll(".filter-pill");
const artworkCountEl = document.getElementById("artwork-count");

// Modal Elements
const modal = document.getElementById("art-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalType = document.getElementById("modal-type");
const modalCategory = document.getElementById("modal-category");
const modalMedium = document.getElementById("modal-medium");
const modalDimensions = document.getElementById("modal-dimensions");
const modalFraming = document.getElementById("modal-framing");
const modalAvailability = document.getElementById("modal-availability");
const modalAnalysis = document.getElementById("modal-analysis");
const modalWhatsappBtn = document.getElementById("modal-whatsapp-btn");
const modalPrevBtn = document.getElementById("modal-prev-btn");
const modalNextBtn = document.getElementById("modal-next-btn");
const modalCounter = document.getElementById("modal-counter");

// Contact constants
const WHATSAPP_NUMBER = "919265517759";

/**
 * Render Pinterest Masonry Grid
 */
function renderGallery(filter = "all") {
  currentFilter = filter;

  if (filter === "all") {
    currentFilteredArtworks = artworks;
  } else if (filter === "canvas") {
    currentFilteredArtworks = artworks.filter((a) => a.src.startsWith("canvas/"));
  } else if (filter === "sketch") {
    currentFilteredArtworks = artworks.filter((a) => a.src.startsWith("sketch_art/"));
  } else {
    currentFilteredArtworks = artworks.filter((a) => a.category === filter);
  }

  if (artworkCountEl) {
    artworkCountEl.textContent = `${currentFilteredArtworks.length} artwork${
      currentFilteredArtworks.length === 1 ? "" : "s"
    }`;
  }

  galleryContainer.innerHTML = "";

  currentFilteredArtworks.forEach((art, index) => {
    const card = document.createElement("article");
    card.className = "pin-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View artwork: ${art.title}`);

    card.innerHTML = `
      <div class="pin-media">
        <img 
          src="${art.src}" 
          alt="${art.title} by B. K. Unagar" 
          loading="lazy" 
          class="pin-img"
        />
        <div class="pin-hover-overlay">
          <span class="pin-hover-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Inspect & Buy
          </span>
          <button class="pin-inquire-quick" type="button" title="Claim on WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="pin-info">
        <div class="pin-header-line">
          <span class="pin-tag">${art.categoryLabel}</span>
          <span class="pin-type-pill">${art.type === "Canvas Painting" ? "Canvas" : "Sketch"}</span>
        </div>
        <h3 class="pin-title">${art.title}</h3>
        <p class="pin-meta">${art.medium} • ${art.dimensions}</p>
      </div>
    `;

    // Click handler to open modal
    card.addEventListener("click", (e) => {
      if (e.target.closest(".pin-inquire-quick")) {
        e.stopPropagation();
        openWhatsAppInquiry(art);
        return;
      }
      openModal(index);
    });

    // Keyboard navigation to open modal
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(index);
      }
    });

    galleryContainer.appendChild(card);
  });
}

/**
 * Open Modal Dialog with Artwork details
 */
function openModal(index) {
  currentModalIndex = index;
  const art = currentFilteredArtworks[currentModalIndex];
  if (!art) return;

  modalImage.src = art.src;
  modalImage.alt = `${art.title} - ${art.medium} by B. K. Unagar`;
  modalTitle.textContent = art.title;
  modalType.textContent = art.type;
  modalCategory.textContent = art.categoryLabel;
  modalMedium.textContent = art.medium;
  modalDimensions.textContent = `${art.dimensions} (${art.orientation})`;
  modalFraming.textContent = art.framing;
  modalAvailability.textContent = art.availability;
  modalAnalysis.textContent = `${art.analysis} ${art.detail}`;

  // Counter
  if (modalCounter) {
    modalCounter.textContent = `${currentModalIndex + 1} of ${currentFilteredArtworks.length}`;
  }

  // Update WhatsApp inquiry link
  modalWhatsappBtn.onclick = () => openWhatsAppInquiry(art);

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
  document.body.style.overflow = "hidden";
}

/**
 * Close Modal Dialog
 */
function closeModal() {
  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
  document.body.style.overflow = "";
}

/**
 * Navigate to Next or Previous Artwork in Modal
 */
function nextArtwork() {
  if (currentFilteredArtworks.length === 0) return;
  currentModalIndex = (currentModalIndex + 1) % currentFilteredArtworks.length;
  openModal(currentModalIndex);
}

function prevArtwork() {
  if (currentFilteredArtworks.length === 0) return;
  currentModalIndex = (currentModalIndex - 1 + currentFilteredArtworks.length) % currentFilteredArtworks.length;
  openModal(currentModalIndex);
}

/**
 * Launch WhatsApp direct message
 */
function openWhatsAppInquiry(art) {
  const text = encodeURIComponent(
    `Hello B. K. Unagar,\n\nI fell in love with your original artwork "${art.title}" (${art.type}, ${art.medium}, ${art.dimensions}) from Obsidian.\n\nI want to make my space feel like home and bring this piece into my collection. Please let me know its availability, price, and doorstep delivery details. Thank you!`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

// Modal Event Listeners
modalPrevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  prevArtwork();
});

modalNextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  nextArtwork();
});

document.querySelectorAll("[data-close-modal]").forEach((btn) => {
  btn.addEventListener("click", closeModal);
});

modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  const clickedInDialog =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (!clickedInDialog) {
    closeModal();
  }
});

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (!modal.open) return;

  if (e.key === "Escape") {
    closeModal();
  } else if (e.key === "ArrowRight") {
    nextArtwork();
  } else if (e.key === "ArrowLeft") {
    prevArtwork();
  }
});

/**
 * Master Category Filter & Navigation Controller
 */
function applyCategoryFilter(filterKey = "all", smoothScroll = false) {
  currentFilter = filterKey;

  // Update active state on filter pills
  filterButtons.forEach((btn) => {
    if (btn.dataset.filter === filterKey) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Re-render Pinterest grid
  renderGallery(filterKey);

  // Smooth scroll to gallery if requested
  if (smoothScroll) {
    const galleryEl = document.getElementById("gallery");
    if (galleryEl) {
      const navHeader = document.querySelector(".gallery-header");
      const headerHeight = navHeader ? navHeader.offsetHeight : 80;
      const targetY = galleryEl.getBoundingClientRect().top + window.pageYOffset - headerHeight + 10;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  }
}

// Filter Button Click Handlers
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter || "all";
    applyCategoryFilter(filter, false);
  });
});

// Bind all navigation links and interactive stat triggers
document.querySelectorAll("[data-nav-filter]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filterKey = link.getAttribute("data-nav-filter") || "all";
    applyCategoryFilter(filterKey, true);
  });
});

// Handle URL hash on initial page load or hash change
function handleUrlHashRouting() {
  const hash = window.location.hash.toLowerCase().replace("#", "");
  if (!hash) return;

  if (hash === "gallery" || hash === "all") {
    applyCategoryFilter("all", false);
  } else if (hash === "canvas" || hash === "canvas-section" || hash === "canvas-oils") {
    applyCategoryFilter("canvas", false);
  } else if (hash === "sketch" || hash === "sketches" || hash === "sketches-section") {
    applyCategoryFilter("sketch", false);
  } else if (hash === "devotional") {
    applyCategoryFilter("devotional", false);
  } else if (hash === "floral") {
    applyCategoryFilter("floral", false);
  } else if (hash === "portrait") {
    applyCategoryFilter("portrait", false);
  } else if (hash === "landscape") {
    applyCategoryFilter("landscape", false);
  } else if (hash === "commission") {
    const commSection = document.getElementById("commission");
    if (commSection) {
      commSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}

window.addEventListener("hashchange", handleUrlHashRouting);

/* ==========================================================================
   CUSTOM ARTWORK COMMISSION FORM LOGIC
   ========================================================================== */
const commissionForm = document.getElementById("custom-commission-form");
const fileInput = document.getElementById("commission-file-input");
const dropzone = document.getElementById("commission-dropzone");
const dropzonePrompt = document.getElementById("dropzone-prompt");
const dropzonePreview = document.getElementById("dropzone-preview");
const previewImage = document.getElementById("preview-image");
const previewFilename = document.getElementById("preview-filename");
const previewFilemeta = document.getElementById("preview-filemeta");
const btnRemovePhoto = document.getElementById("btn-remove-photo");
const browseFilesBtn = document.getElementById("browse-files-btn");
const commissionAlert = document.getElementById("commission-alert");
const commissionSubmitBtn = document.getElementById("commission-submit-btn");
const commissionBtnText = document.getElementById("commission-btn-text");

let selectedCommissionFile = null;
let selectedMedium = "Oil on Stretched Canvas";
let selectedSize = "18″ × 24″ (Classic Gallery Size)";

// File selection trigger
if (browseFilesBtn && fileInput) {
  browseFilesBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    fileInput.click();
  });
}

if (dropzone && fileInput) {
  dropzone.addEventListener("click", (e) => {
    // Avoid re-triggering when clicking remove button
    if (e.target.closest("#btn-remove-photo")) return;
    fileInput.click();
  });

  // Drag & Drop
  ["dragenter", "dragover"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add("drag-over");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("drag-over");
    });
  });

  dropzone.addEventListener("drop", (e) => {
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processSelectedFile(files[0]);
    }
  });

  fileInput.addEventListener("change", () => {
    if (fileInput.files && fileInput.files.length > 0) {
      processSelectedFile(fileInput.files[0]);
    }
  });
}

function processSelectedFile(file) {
  if (!file.type.startsWith("image/")) {
    showCommissionAlert("Please select a valid image file (JPG, PNG, or WEBP).", "error");
    return;
  }

  selectedCommissionFile = file;
  const reader = new FileReader();

  reader.onload = (e) => {
    previewImage.src = e.target.result;
    previewFilename.textContent = file.name;

    // Calculate dimensions
    const tempImg = new Image();
    tempImg.onload = () => {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      previewFilemeta.textContent = `${tempImg.naturalWidth} × ${tempImg.naturalHeight} px • ${sizeMB} MB`;
    };
    tempImg.src = e.target.result;

    dropzonePrompt.style.display = "none";
    dropzonePreview.style.display = "flex";
    hideCommissionAlert();
  };

  reader.readAsDataURL(file);
}

// Remove selected photo
if (btnRemovePhoto) {
  btnRemovePhoto.addEventListener("click", (e) => {
    e.stopPropagation();
    selectedCommissionFile = null;
    fileInput.value = "";
    previewImage.src = "";
    dropzonePreview.style.display = "none";
    dropzonePrompt.style.display = "flex";
    hideCommissionAlert();
  });
}

// Medium selection buttons
document.querySelectorAll("#medium-selector .choice-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#medium-selector .choice-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedMedium = btn.dataset.medium || "Oil on Stretched Canvas";
  });
});

// Size selection buttons
document.querySelectorAll("#size-selector .choice-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#size-selector .choice-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedSize = btn.dataset.size || "18″ × 24″ (Classic Gallery Size)";
  });
});

function showCommissionAlert(message, type = "info") {
  if (!commissionAlert) return;
  commissionAlert.textContent = message;
  commissionAlert.className = `commission-alert ${type}`;
  commissionAlert.style.display = "block";
}

function hideCommissionAlert() {
  if (!commissionAlert) return;
  commissionAlert.style.display = "none";
}


// Cloudinary Configuration
const CLOUDINARY_CONFIG = {
  cloudName: "imgxwprl",
  apiKey: "872674858728113",
  apiSecret: "8ZtY4Uf12A1zl215OLZRI_AsoYc",
};

/**
 * Generates SHA-1 signature for Cloudinary upload
 */
async function getCloudinarySignature(timestamp) {
  const strToSign = `timestamp=${timestamp}${CLOUDINARY_CONFIG.apiSecret}`;
  const msgUint8 = new TextEncoder().encode(strToSign);
  const hashBuffer = await crypto.subtle.digest("SHA-1", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

/**
 * Uploads user's reference file to Cloudinary and returns the permanent secure URL
 */
async function uploadToCloudinary(file) {
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = await getCloudinarySignature(timestamp);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", CLOUDINARY_CONFIG.apiKey);
  formData.append("timestamp", timestamp);
  formData.append("signature", signature);

  const endpoint = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`;
  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Upload failed with status ${response.status}`);
  }

  const data = await response.json();
  return data.secure_url;
}

// Form State Tracking
let hasSubmittedCommission = false;

/**
 * Fully resets all custom commission form inputs, photo previews, and choice selections
 */
function resetCommissionForm() {
  if (commissionForm) {
    commissionForm.reset();
  }

  const clientNameInput = document.getElementById("commission-name");
  const clientPhoneInput = document.getElementById("commission-phone");
  const descInput = document.getElementById("commission-desc");

  if (clientNameInput) {
    clientNameInput.value = "";
    clientNameInput.defaultValue = "";
  }
  if (clientPhoneInput) {
    clientPhoneInput.value = "";
    clientPhoneInput.defaultValue = "";
  }
  if (descInput) {
    descInput.value = "";
    descInput.defaultValue = "";
  }

  selectedCommissionFile = null;
  if (fileInput) {
    fileInput.value = "";
  }
  if (previewImage) {
    previewImage.src = "";
  }
  if (dropzonePreview) {
    dropzonePreview.style.display = "none";
  }
  if (dropzonePrompt) {
    dropzonePrompt.style.display = "flex";
  }

  // Reset medium choice to default (first pill: Oil on Stretched Canvas)
  document.querySelectorAll("#medium-selector .choice-btn").forEach((btn, idx) => {
    if (idx === 0) {
      btn.classList.add("active");
      selectedMedium = btn.dataset.medium || "Oil on Stretched Canvas";
    } else {
      btn.classList.remove("active");
    }
  });

  // Reset size choice to default (first pill: 18″ × 24″)
  document.querySelectorAll("#size-selector .choice-btn").forEach((btn, idx) => {
    if (idx === 0) {
      btn.classList.add("active");
      selectedSize = btn.dataset.size || "18″ × 24″ (Classic Gallery Size)";
    } else {
      btn.classList.remove("active");
    }
  });

  if (commissionSubmitBtn) {
    commissionSubmitBtn.disabled = false;
  }
  if (commissionBtnText) {
    commissionBtnText.textContent = "Submit to WhatsApp & Get Free Quote";
  }
}

/**
 * Automatic clearing handler when returning from WhatsApp
 */
function handleReturnFromWhatsApp() {
  const isSubmittedFlag = sessionStorage.getItem("commission_just_submitted") === "true";
  if (hasSubmittedCommission || isSubmittedFlag) {
    hasSubmittedCommission = false;
    sessionStorage.removeItem("commission_just_submitted");
    resetCommissionForm();
    showCommissionAlert(
      "✓ Welcome back! Your commission inquiry was sent to WhatsApp. All form fields have been cleared for a new request.",
      "success"
    );
  }
}

// Window / document events for returning from WhatsApp
window.addEventListener("focus", handleReturnFromWhatsApp);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    handleReturnFromWhatsApp();
  }
});
window.addEventListener("pageshow", handleReturnFromWhatsApp);

// Form Submission & WhatsApp Launch with Permanent Cloudinary Link
if (commissionForm) {
  commissionForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!selectedCommissionFile) {
      showCommissionAlert("Please upload or drag & drop a reference photo of your subject or artwork.", "error");
      dropzone.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const descInput = document.getElementById("commission-desc");
    const clientNameInput = document.getElementById("commission-name");
    const clientPhoneInput = document.getElementById("commission-phone");

    const description = descInput ? descInput.value.trim() : "";
    const clientName = clientNameInput ? clientNameInput.value.trim() : "";
    const clientPhone = clientPhoneInput ? clientPhoneInput.value.trim() : "";

    if (!description) {
      showCommissionAlert("Please describe your artistic vision, preferred subject, or framing instructions.", "error");
      if (descInput) descInput.focus();
      return;
    }

    // Set Loading State
    commissionSubmitBtn.disabled = true;
    commissionBtnText.textContent = "Uploading to Cloudinary...";
    showCommissionAlert("Uploading reference photograph permanently to Cloudinary...", "loading");

    let cloudinaryUrl = "";

    try {
      cloudinaryUrl = await uploadToCloudinary(selectedCommissionFile);
    } catch (uploadError) {
      console.error("Cloudinary upload error:", uploadError);
      showCommissionAlert(
        `Upload failed: ${uploadError.message}. Please try again or inquire via WhatsApp directly.`,
        "error"
      );
      commissionSubmitBtn.disabled = false;
      commissionBtnText.textContent = "Submit to WhatsApp & Get Free Quote";
      return;
    }

    // Format WhatsApp message with permanent Cloudinary URL
    let waMessage = `*🎨 BESPOKE ART COMMISSION INQUIRY — OBSIDIAN*\n\n`;
    waMessage += `Hello B. K. Unagar,\n`;
    waMessage += `I would like to commission an original bespoke artwork.\n\n`;
    waMessage += `*Commission Specifications:*\n`;
    waMessage += `• *Collector / Client:* ${clientName || "Private Collector"}\n`;
    if (clientPhone) {
      waMessage += `• *Phone:* ${clientPhone}\n`;
    }
    waMessage += `• *Desired Medium:* ${selectedMedium}\n`;
    waMessage += `• *Target Dimensions:* ${selectedSize}\n`;
    waMessage += `• *Reference Photo Link:* ${cloudinaryUrl}\n\n`;
    waMessage += `*Vision & Creative Brief:* \n"${description}"\n\n`;
    waMessage += `Please review the reference photograph link above and share your timeline and quotation estimate. Thank you!`;

    // Mark submitted in memory and in sessionStorage
    hasSubmittedCommission = true;
    sessionStorage.setItem("commission_just_submitted", "true");

    // Clear all form inputs immediately
    resetCommissionForm();

    // Open WhatsApp directly in a new tab
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    let opened = false;
    try {
      const win = window.open(waUrl, "_blank");
      if (win && !win.closed) {
        opened = true;
      }
    } catch (err) {
      console.warn("window.open blocked, using link click fallback", err);
    }
    if (!opened) {
      const waLink = document.createElement("a");
      waLink.href = waUrl;
      waLink.target = "_blank";
      waLink.rel = "noopener noreferrer";
      document.body.appendChild(waLink);
      waLink.click();
      waLink.remove();
    }

    showCommissionAlert(
      "✓ Reference photo uploaded & WhatsApp opened! All form fields have been automatically reset.",
      "success"
    );
  });
}

// Initial check in case user navigated back from WhatsApp
handleReturnFromWhatsApp();

// Initial Render & URL Hash Handling
applyCategoryFilter("all", false);
handleUrlHashRouting();
