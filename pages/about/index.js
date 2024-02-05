export default function About() {
  return (
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-center my-10">About Us</h1>

      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-2">Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
        Band Members will be inserted here by JavaScript
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-2">Contact Us</h2>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            class="border p-2 rounded w-full mb-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            class="border p-2 rounded w-full mb-2"
          />
          <textarea
            placeholder="Your Message"
            class="border p-2 rounded w-full mb-2"
          ></textarea>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
