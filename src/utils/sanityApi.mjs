"use server"
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "3ixr4i2c",
  dataset: "production",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

async function fetchSanity() {
  try {
    const res = await client.fetch(
      '*[_type == "product"]'
    )
    console.log("res😁",res);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

fetchSanity();
