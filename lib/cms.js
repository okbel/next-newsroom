import Cosmic from "cosmicjs";

const api = Cosmic();

export const bucket = api.bucket({
  slug: process.env.COSMIC_BUCKET_SLUG,
  read_key: process.env.COSMIC_READ_KEY,
});
