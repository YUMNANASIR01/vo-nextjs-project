// This is a mock API that would typically fetch from a database or external API
export async function getProducts() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: "1",
      name: "Baby Shark Perfume",
      description: "Experience the world of immersive sound with Baby Shark Perfume. Equipped with cutting-edge noise cancellation technology, it delivers a premium auditory experience.",
      price: 249.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/b/a/baby_shark1.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "2",
      name: "Inspiration",
      description: "Capture stunning aerial footage with the Inspiration drone's 4K camera, perfect for aspiring filmmakers and adventurers.",
      price: 799.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/i/n/inspiration_3.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "3",
      name: "Velvet Majestic",
      description: "Elevate your gaming or work experience with Velvet Majestic. Its responsive keys and customizable RGB lighting make it perfect for both productivity and play.",
      price: 149.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/v/e/velvet_01.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "4",
      name: "Stardom",
      description: "Designed for comfort, the Stardom office chair supports long hours of work with its ergonomic lumbar support and plush seating.",
      price: 299.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/s/t/stardom1.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "5",
      name: "Marina",
      description: "Marina delivers powerful sound from a compact, waterproof design, ideal for music lovers on the go.",
      price: 129.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/m/a/marina_01.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "6",
      name: "Mirage",
      description: "Capture stunning aerial footage with the Mirage drone's 4K camera, delivering exceptional video quality in any condition.",
      price: 799.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/m/i/mirage_him_4_.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "7",
      name: "Epic",
      description: "Epic's responsive keys and customizable RGB lighting make it perfect for gamers and creators alike, providing an enhanced user experience.",
      price: 149.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/e/p/epic1-1.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "8",
      name: "Power Marine",
      description: "Protect your device with Power Marine's durable design, offering easy smartphone controls and total security for your equipment.",
      price: 399.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/p/o/power_marine.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "9",
      name: "Gravity",
      description: "Gravity headphones deliver an immersive listening experience, combining noise cancellation and deep bass for audiophiles.",
      price: 249.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/g/r/gravity_01.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "10",
      name: "Centurion",
      description: "Track your fitness goals with Centurions advanced health monitoring features. Perfect for anyone serious about health and fitness.",
      price: 199.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/c/e/centurion.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "11",
      name: "Journey",
      description: "Designed for professionals, the Journey monitor offers crystal-clear display and vibrant colors, ideal for work and entertainment.",
      price: 349.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/j/o/journey_01.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "12",
      name: "Opus",
      description: "The Opus chair offers both comfort and style with lumbar support, making it the perfect choice for long working hours.",
      price: 299.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/o/p/opus1.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "13",
      name: "Stallion",
      description: "Stallion delivers powerful sound in a compact, waterproof design, making it the perfect companion for outdoor adventures.",
      price: 129.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/s/t/stallion_01_1_.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "14",
      name: "Poem",
      description: "The Poem monitor features a crystal-clear display and vibrant colors, tailored for professionals who need reliable visual performance.",
      price: 349.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/p/o/poem1.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "15",
      name: "Sheriff",
      description: "Sheriff offers advanced fitness tracking capabilities, making it a perfect tool for health enthusiasts looking to monitor their progress.",
      price: 199.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/s/h/sheriff_01.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
    {
      id: "16",
      name: "Epic Purple",
      description: "The Epic Purple is designed for complete protection, with easy smartphone controls and a durable build for total security.",
      price: 399.99,
      image: "https://www.gulahmedshop.com/media/catalog/product/e/p/epic2-1.jpg?optimize=low&fit=bounds&height=750&width=500&canvas=2:3",
    },
  ];
}
