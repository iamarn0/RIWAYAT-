export function unsplash(photoId, width = 1600) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=75`;
}

export const photos = {
  hero: unsplash("photo-1505253758473-96b7015fcd40", 2000),
  skillet: unsplash("photo-1505253758473-96b7015fcd40", 1400),
  biryani: unsplash("photo-1589302168068-964664d93dc0", 1600),
  wood: unsplash("photo-1712757248842-04f6e3844374", 1600),
  kadhai: unsplash("photo-1585937421612-70a008356fbe", 1400),
  brassRice: unsplash("photo-1563379091339-03b21ab4a4f8", 1400),
  bananaLeaf: unsplash("photo-1625398407796-82650a8c135f", 1400),
  naanPlate: unsplash("photo-1565557623262-b51c2513a641", 1200),
  brassPot: unsplash("photo-1606471191009-63994c53433b", 1400),
  puri: unsplash("photo-1596522869169-95231d2b6864", 1400),
  thali: unsplash("photo-1589778655375-3e622a9fc91c", 1600),
  spices: unsplash("photo-1596040033229-a9821ebd058d", 1400),
  spiceSpoons: unsplash("photo-1509358271058-acd22cc93898", 1400),
  stall: unsplash("photo-1665206221363-568ea2f7b195", 1400),
  amber: unsplash("photo-1599661046289-e31897846e41", 1600),
};
